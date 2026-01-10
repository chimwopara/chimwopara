/**
 * Firebase P&L Store Integration
 * Handles saving, searching, and retrieving P&L challenges
 * 
 * Add this script to your HTML before other scripts:
 * <script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js"></script>
 * <script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore-compat.js"></script>
 * <script src="pnl-store.js"></script>
 */

const PnLStore = {
    db: null,
    initialized: false,

    /**
     * Initialize Firebase - Call this once on page load
     * Replace with your Firebase config from Firebase Console
     */
    init(firebaseConfig) {
        if (this.initialized) return;
        
        try {
            // Initialize Firebase
            if (!firebase.apps.length) {
                firebase.initializeApp(firebaseConfig);
            }
            this.db = firebase.firestore();
            this.initialized = true;
            console.log('[PnLStore] Initialized successfully');
        } catch (error) {
            console.error('[PnLStore] Init error:', error);
        }
    },

    /**
     * Generate search keywords from a prompt
     */
    generateKeywords(text) {
        if (!text) return [];
        
        // Common words to exclude
        const stopWords = new Set([
            'a', 'an', 'the', 'is', 'are', 'was', 'were', 'be', 'been',
            'to', 'of', 'and', 'or', 'in', 'on', 'at', 'for', 'with',
            'how', 'what', 'why', 'when', 'where', 'who', 'which',
            'do', 'does', 'did', 'can', 'could', 'should', 'would',
            'make', 'create', 'write', 'code', 'i', 'me', 'my', 'you', 'your'
        ]);
        
        return text
            .toLowerCase()
            .replace(/[^a-z0-9\s]/g, ' ')
            .split(/\s+/)
            .filter(word => word.length > 2 && !stopWords.has(word))
            .slice(0, 15); // Max 15 keywords for Firestore array-contains-any limit
    },

    /**
     * Calculate similarity score between two keyword arrays
     */
    calculateSimilarity(keywords1, keywords2) {
        if (!keywords1.length || !keywords2.length) return 0;
        
        const set1 = new Set(keywords1);
        const set2 = new Set(keywords2);
        const intersection = [...set1].filter(x => set2.has(x));
        const union = new Set([...set1, ...set2]);
        
        return intersection.length / union.size; // Jaccard similarity
    },

    /**
     * Search for existing P&L that matches the prompt
     * Returns the best match if similarity > threshold
     */
    async findSimilar(prompt, threshold = 0.4) {
        if (!this.initialized || !prompt) return null;
        
        try {
            const keywords = this.generateKeywords(prompt);
            if (keywords.length === 0) return null;
            
            // Query Firestore for P&Ls with matching keywords
            // Use array-contains-any (max 10 values)
            const searchTerms = keywords.slice(0, 10);
            
            const snapshot = await this.db
                .collection('pnl_challenges')
                .where('keywords', 'array-contains-any', searchTerms)
                .where('public', '==', true)
                .orderBy('usageCount', 'desc')
                .limit(20)
                .get();
            
            if (snapshot.empty) return null;
            
            // Find best match by similarity score
            let bestMatch = null;
            let bestScore = 0;
            
            snapshot.forEach(doc => {
                const data = doc.data();
                const score = this.calculateSimilarity(keywords, data.keywords || []);
                
                if (score > bestScore && score >= threshold) {
                    bestScore = score;
                    bestMatch = { id: doc.id, ...data, similarityScore: score };
                }
            });
            
            // Increment usage count if found
            if (bestMatch) {
                await this.incrementUsage(bestMatch.id);
                console.log(`[PnLStore] Found similar P&L (${(bestScore * 100).toFixed(0)}% match):`, bestMatch.originalPrompt);
            }
            
            return bestMatch;
            
        } catch (error) {
            console.error('[PnLStore] Search error:', error);
            return null;
        }
    },

    /**
     * Save a new P&L challenge to the store
     */
    async save(prompt, challengeData, userId = 'anonymous') {
        if (!this.initialized) {
            console.error('[PnLStore] Not initialized');
            return null;
        }
        
        try {
            const keywords = this.generateKeywords(prompt);
            
            const docData = {
                originalPrompt: prompt,
                keywords: keywords,
                type: challengeData.type || 'general',
                goal: challengeData.goal || '',
                concepts: challengeData.concepts || '',
                category: challengeData.category || '',
                language: challengeData.language || '',
                sequence: challengeData.sequence || [],
                fullCode: challengeData.fullCode || null,
                components: challengeData.components || null,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                createdBy: userId,
                public: true,
                usageCount: 1,
                rating: 0,
                ratingCount: 0
            };
            
            const docRef = await this.db.collection('pnl_challenges').add(docData);
            console.log('[PnLStore] Saved new P&L:', docRef.id);
            
            return docRef.id;
            
        } catch (error) {
            console.error('[PnLStore] Save error:', error);
            return null;
        }
    },

    /**
     * Increment usage count for a P&L
     */
    async incrementUsage(docId) {
        try {
            await this.db.collection('pnl_challenges').doc(docId).update({
                usageCount: firebase.firestore.FieldValue.increment(1)
            });
        } catch (error) {
            console.error('[PnLStore] Increment error:', error);
        }
    },

    /**
     * Search the store (for UI search functionality)
     */
    async search(query, limit = 20) {
        if (!this.initialized) return [];
        
        try {
            const keywords = this.generateKeywords(query);
            if (keywords.length === 0) {
                // Return recent popular P&Ls if no query
                return this.getPopular(limit);
            }
            
            const searchTerms = keywords.slice(0, 10);
            
            const snapshot = await this.db
                .collection('pnl_challenges')
                .where('keywords', 'array-contains-any', searchTerms)
                .where('public', '==', true)
                .orderBy('usageCount', 'desc')
                .limit(limit)
                .get();
            
            const results = [];
            snapshot.forEach(doc => {
                results.push({ id: doc.id, ...doc.data() });
            });
            
            // Sort by relevance
            results.sort((a, b) => {
                const scoreA = this.calculateSimilarity(keywords, a.keywords || []);
                const scoreB = this.calculateSimilarity(keywords, b.keywords || []);
                return scoreB - scoreA;
            });
            
            return results;
            
        } catch (error) {
            console.error('[PnLStore] Search error:', error);
            return [];
        }
    },

    /**
     * Get popular P&Ls (most used)
     */
    async getPopular(limit = 20) {
        if (!this.initialized) return [];
        
        try {
            const snapshot = await this.db
                .collection('pnl_challenges')
                .where('public', '==', true)
                .orderBy('usageCount', 'desc')
                .limit(limit)
                .get();
            
            const results = [];
            snapshot.forEach(doc => {
                results.push({ id: doc.id, ...doc.data() });
            });
            
            return results;
            
        } catch (error) {
            console.error('[PnLStore] GetPopular error:', error);
            return [];
        }
    },

    /**
     * Get recent P&Ls
     */
    async getRecent(limit = 20) {
        if (!this.initialized) return [];
        
        try {
            const snapshot = await this.db
                .collection('pnl_challenges')
                .where('public', '==', true)
                .orderBy('createdAt', 'desc')
                .limit(limit)
                .get();
            
            const results = [];
            snapshot.forEach(doc => {
                results.push({ id: doc.id, ...doc.data() });
            });
            
            return results;
            
        } catch (error) {
            console.error('[PnLStore] GetRecent error:', error);
            return [];
        }
    },

    /**
     * Get P&Ls by type (code, howto, structured)
     */
    async getByType(type, limit = 20) {
        if (!this.initialized) return [];
        
        try {
            const snapshot = await this.db
                .collection('pnl_challenges')
                .where('public', '==', true)
                .where('type', '==', type)
                .orderBy('usageCount', 'desc')
                .limit(limit)
                .get();
            
            const results = [];
            snapshot.forEach(doc => {
                results.push({ id: doc.id, ...doc.data() });
            });
            
            return results;
            
        } catch (error) {
            console.error('[PnLStore] GetByType error:', error);
            return [];
        }
    },

    /**
     * Get a single P&L by ID
     */
    async getById(docId) {
        if (!this.initialized) return null;
        
        try {
            const doc = await this.db.collection('pnl_challenges').doc(docId).get();
            
            if (!doc.exists) return null;
            
            return { id: doc.id, ...doc.data() };
            
        } catch (error) {
            console.error('[PnLStore] GetById error:', error);
            return null;
        }
    },

    /**
     * Rate a P&L
     */
    async rate(docId, rating) {
        if (!this.initialized || rating < 1 || rating > 5) return;
        
        try {
            const doc = await this.db.collection('pnl_challenges').doc(docId).get();
            if (!doc.exists) return;
            
            const data = doc.data();
            const newCount = (data.ratingCount || 0) + 1;
            const newRating = ((data.rating || 0) * (data.ratingCount || 0) + rating) / newCount;
            
            await this.db.collection('pnl_challenges').doc(docId).update({
                rating: newRating,
                ratingCount: newCount
            });
            
        } catch (error) {
            console.error('[PnLStore] Rate error:', error);
        }
    }
};

// Make globally available
window.PnLStore = PnLStore;
