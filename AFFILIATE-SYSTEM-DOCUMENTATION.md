# Chim Wopara Affiliate Network System - Documentation

## Overview
This affiliate link system allows you to create a network of partners, members, and assemblers who can refer new people to your platform and earn rewards based on their referrals.

## Files Included

### 1. **affiliate-system.html**
The main affiliate signup and dashboard page where users:
- Sign up with their information
- Choose their membership type (Assembler, Member, or Partner)
- Create a unique username
- Receive their personalized affiliate links
- Track their referrals and rewards

### 2. **index.html** (Updated)
Your main chimwopara.com page with the new "Join Network" button added in the Hi section.

## How It Works

### User Signup Flow

1. **User visits the affiliate page** (via "Join Network" button or direct link)
2. **Fills out signup form:**
   - Full Name
   - Phone Number
   - Email Address
   - Membership Type (Assembler/Member/Partner)
   - Username (must be unique)
   - Optional: Referral Code (if referred by someone)

3. **Username validation:**
   - Users can check if their desired username is available
   - System prevents duplicate usernames

4. **Account creation:**
   - User data is stored in browser's localStorage
   - If a referral code was used, the referrer gets credited automatically

### Affiliate Links Generation

Once signed up, users receive 5 affiliate links:
- **chimwopara.com?ref=username**
- **wopara.com?ref=username**
- **pautacos.com?ref=username**
- **devgameshow.com?ref=username**
- **fromsupply.com?ref=username**

### Reward Tier System

The system has 5 reward tiers based on total referrals:

| Tier | Referrals Required | Points per Referral | Badge |
|------|-------------------|---------------------|-------|
| **Starter** | 0-4 | 50 points | 🌱 |
| **Bronze** | 5-14 | 75 points | ⭐ |
| **Silver** | 15-29 | 100 points | 💎 |
| **Gold** | 30-49 | 150 points | 👑 |
| **Platinum** | 50+ | 200 points + exclusive perks | 🏆 |

### How Referrals Work

1. **User A** shares their affiliate link: `chimwopara.com?ref=userA`
2. **User B** clicks the link and signs up
3. The referral code "userA" is auto-filled in the signup form
4. When User B completes signup:
   - User A's referral count increases by 1
   - User A earns points based on their current tier
   - The referral is recorded in User A's dashboard

## Dashboard Features

### User Statistics
- **Total Referrals:** Number of people who signed up using your link
- **Reward Points:** Accumulated points based on referrals
- **Next Tier Count:** How many more referrals needed for next tier

### Affiliate Links Section
- All 5 affiliate links displayed
- One-click copy functionality for each link
- Visual feedback when copied

### Referral History
- List of recent referrals
- Shows referral name, type, date, and points earned
- Displays up to 10 most recent referrals

### Tier Progress Display
- Shows current tier badge
- Animated tier badges for visual appeal
- Clear indication of tier benefits

## Implementation on Other Domains

To implement this on your other domains (wopara.com, pautacos.com, etc.):

### Step 1: Add the Join Network button
Add this button to each site's landing page:

```html
<a href="https://chimwopara.com/affiliate-system.html" 
   class="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold py-3 px-10 rounded-lg">
    Join Network
</a>
```

### Step 2: Handle incoming referrals
Add this JavaScript to detect referral codes:

```javascript
// Detect referral parameter
const urlParams = new URLSearchParams(window.location.search);
const refUsername = urlParams.get('ref');

if (refUsername) {
    // Store referral code in sessionStorage
    sessionStorage.setItem('referralCode', refUsername);
    
    // Redirect to signup page with referral
    window.location.href = `https://chimwopara.com/affiliate-system.html?ref=${refUsername}`;
}
```

### Step 3: Track conversions (optional)
To track when referred users complete specific actions:

```javascript
function trackConversion(username, action) {
    // Log conversion event
    const conversion = {
        referrer: username,
        action: action, // e.g., 'purchase', 'enrollment', 'signup'
        timestamp: new Date().toISOString()
    };
    
    // Store or send to analytics
    console.log('Conversion tracked:', conversion);
}
```

## Data Storage

Currently uses **localStorage** for demo purposes. For production, you should:

### Recommended Backend Setup:

1. **Database Tables:**
   ```sql
   -- Users table
   CREATE TABLE users (
       id INT PRIMARY KEY AUTO_INCREMENT,
       fullname VARCHAR(255),
       phone VARCHAR(50),
       email VARCHAR(255) UNIQUE,
       username VARCHAR(100) UNIQUE,
       member_type ENUM('Assembler', 'Member', 'Partner'),
       referral_code VARCHAR(100),
       total_referrals INT DEFAULT 0,
       reward_points INT DEFAULT 0,
       joined_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   
   -- Referrals table
   CREATE TABLE referrals (
       id INT PRIMARY KEY AUTO_INCREMENT,
       referrer_id INT,
       referred_user_id INT,
       referred_user_name VARCHAR(255),
       referred_user_type VARCHAR(50),
       date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
       FOREIGN KEY (referrer_id) REFERENCES users(id),
       FOREIGN KEY (referred_user_id) REFERENCES users(id)
   );
   ```

2. **API Endpoints:**
   - `POST /api/signup` - Create new user
   - `POST /api/login` - Authenticate user
   - `GET /api/user/:id` - Get user details
   - `GET /api/referrals/:userId` - Get user's referrals
   - `POST /api/verify-username` - Check username availability

3. **Security Considerations:**
   - Hash passwords if implementing authentication
   - Use HTTPS for all API calls
   - Implement rate limiting
   - Validate all input data
   - Prevent SQL injection
   - Use CORS properly

## Customization Options

### Changing Reward Tiers
Edit the tier thresholds in the `calculateTier()` function:

```javascript
calculateTier(referrals) {
    if (referrals >= 100) return 'Diamond';  // Add new tier
    if (referrals >= 50) return 'Platinum';
    if (referrals >= 30) return 'Gold';
    if (referrals >= 15) return 'Silver';
    if (referrals >= 5) return 'Bronze';
    return 'Starter';
}
```

### Changing Points Per Referral
Edit the `getPointsPerReferral()` function:

```javascript
getPointsPerReferral(tier) {
    const points = {
        'Starter': 50,
        'Bronze': 75,
        'Silver': 100,
        'Gold': 150,
        'Platinum': 200,
        'Diamond': 300  // Add new tier
    };
    return points[tier] || 50;
}
```

### Adding More Domains
Add new domains in the affiliate links section:

```javascript
const baseUrls = {
    'chimwopara': 'https://chimwopara.com',
    'wopara': 'https://wopara.com',
    'pautacos': 'https://pautacos.com',
    'devgameshow': 'https://devgameshow.com',
    'fromsupply': 'https://fromsupply.com',
    'newdomain': 'https://newdomain.com'  // Add here
};
```

Then add the corresponding HTML in the dashboard:

```html
<div class="link-card bg-[#1B2330]/50 rounded-lg p-6">
    <h4 class="font-bold text-lg mb-3">New Domain</h4>
    <div class="flex gap-2">
        <input type="text" readonly id="link-newdomain" 
            class="flex-1 px-4 py-2 bg-[#1B2330] border border-[#3f5268] rounded-lg text-white text-sm font-mono">
        <button onclick="copyLink('link-newdomain')" 
            class="copy-btn px-6 py-2 bg-sky-500 hover:bg-sky-600 rounded-lg transition-colors">
            Copy
        </button>
    </div>
</div>
```

## Reward Redemption (To Be Implemented)

For converting points into actual rewards, you could add:

### 1. Rewards Store
```html
<div class="glassy-card rounded-2xl p-8">
    <h3 class="text-2xl font-bold mb-6">Redeem Rewards</h3>
    <div class="grid md:grid-cols-3 gap-6">
        <!-- Reward items -->
        <div class="bg-[#1B2330]/50 rounded-lg p-6">
            <h4 class="font-bold mb-2">Free Course</h4>
            <p class="text-sm text-[#B7D1E1]/70 mb-4">500 points</p>
            <button class="w-full bg-sky-500 hover:bg-sky-600 py-2 rounded-lg">
                Redeem
            </button>
        </div>
    </div>
</div>
```

### 2. Redemption Logic
```javascript
function redeemReward(rewardCost, rewardName) {
    if (user.rewardPoints >= rewardCost) {
        user.rewardPoints -= rewardCost;
        alert(`${rewardName} redeemed successfully!`);
        // Send email or grant access
    } else {
        alert('Insufficient points');
    }
}
```

## Analytics & Tracking

### Key Metrics to Track:
1. Total signups per referrer
2. Conversion rate by referral source
3. Most active referrers
4. Average time to first referral
5. Tier distribution
6. Most popular membership types

### Google Analytics Integration (Optional):
```javascript
// Track referral clicks
gtag('event', 'referral_click', {
    'referrer': username,
    'source_domain': domain
});

// Track signups
gtag('event', 'signup', {
    'method': 'affiliate',
    'referrer': referralCode
});
```

## Testing the System

1. **Sign up as User 1:**
   - Create account with username "user1"
   - Get affiliate links

2. **Test referral:**
   - Open incognito window
   - Click on User 1's affiliate link
   - Sign up as User 2
   - Verify User 1's dashboard shows the referral

3. **Test tier progression:**
   - Create 5+ accounts using User 1's link
   - Verify tier changes from Starter to Bronze
   - Check points calculation is correct

## Troubleshooting

### Issue: Username not available
**Solution:** Try a different username or add numbers/underscores

### Issue: Referral not showing
**Solution:** 
- Clear browser cache
- Check if referral code was correctly entered
- Verify localStorage is not disabled

### Issue: Dashboard not loading
**Solution:**
- Refresh the page
- Check browser console for errors
- Verify localStorage has data

## Future Enhancements

1. **Email Notifications:**
   - Welcome email on signup
   - Notification when someone uses your referral link
   - Monthly summary of referrals and earnings

2. **Social Sharing:**
   - Pre-formatted social media posts
   - Quick share buttons for WhatsApp, Twitter, Facebook

3. **Leaderboard:**
   - Top referrers ranking
   - Competition features
   - Special badges for achievements

4. **Advanced Analytics:**
   - Referral funnel visualization
   - Conversion tracking
   - Geographic distribution of referrals

5. **Payout System:**
   - Convert points to cash/crypto
   - PayPal/bank transfer integration
   - Automated monthly payouts

## Support

For questions or issues with the affiliate system:
- Email: your-support-email@example.com
- Check the FAQ section
- Contact technical support

## License & Terms

All referral rewards are subject to terms and conditions. Points cannot be transferred between accounts and have no cash value unless explicitly stated in the rewards program terms.

---

**Last Updated:** November 2024
**Version:** 1.0
