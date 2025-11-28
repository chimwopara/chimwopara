# Quick Reference Card - Affiliate Network System

## 📋 File Overview

| File | Purpose | Access |
|------|---------|--------|
| **index.html** | Main homepage with "Join Network" button | Your main site |
| **affiliate-system.html** | Signup & affiliate dashboard | Direct users here |
| **affiliate-promo.html** | Marketing landing page | Optional promo page |
| **admin-dashboard.html** | Admin panel for viewing stats | Admin only |
| **README.md** | Quick start guide | Read first |
| **AFFILIATE-SYSTEM-DOCUMENTATION.md** | Full technical docs | For developers |

## 🔑 Key URLs

- **Homepage**: `yoursite.com/index.html`
- **Join Network**: `yoursite.com/affiliate-system.html`
- **Promo Page**: `yoursite.com/affiliate-promo.html`
- **Admin Dashboard**: `yoursite.com/admin-dashboard.html`

## 🎯 Affiliate Link Format

```
chimwopara.com?ref=USERNAME
wopara.com?ref=USERNAME
pautacos.com?ref=USERNAME
devgameshow.com?ref=USERNAME
fromsupply.com?ref=USERNAME
```

## 🏆 Reward Tiers Quick Reference

| Tier | Referrals | Points | Icon |
|------|-----------|--------|------|
| Starter | 0-4 | 50/ref | 🌱 |
| Bronze | 5-14 | 75/ref | ⭐ |
| Silver | 15-29 | 100/ref | 💎 |
| Gold | 30-49 | 150/ref | 👑 |
| Platinum | 50+ | 200/ref | 🏆 |

## 📊 Admin Dashboard Quick Access

**View Statistics:**
- Total affiliates count
- Total referrals made
- Points distributed
- Average referrals per user

**Filter Options:**
- Search by name/username/email
- Filter by tier
- Filter by member type

**Export Data:**
- Click "Export CSV" button
- Downloads complete affiliate list

## 🔄 User Flow

1. **User clicks "Join Network"** → Goes to affiliate-system.html
2. **Fills signup form** → Creates account
3. **Gets dashboard** → Shows affiliate links
4. **Shares links** → Friends click and join
5. **Earns rewards** → Points accumulate automatically

## 💡 Testing Checklist

- [ ] Click "Join Network" button on homepage
- [ ] Complete signup form
- [ ] Verify affiliate links are generated
- [ ] Copy a link and test in new browser
- [ ] Complete second signup with referral link
- [ ] Check first user's dashboard for +1 referral
- [ ] Verify points were awarded correctly
- [ ] Check admin dashboard shows both users

## 🛠️ Common Customizations

**Change Points:**
```javascript
// In affiliate-system.html, find getPointsPerReferral()
'Starter': 50,  // Change these numbers
'Bronze': 75,
```

**Add Domain:**
```javascript
// In affiliate-system.html, find baseUrls
const baseUrls = {
    'newsite': 'https://newsite.com'  // Add here
};
```

**Change Tier Thresholds:**
```javascript
// In affiliate-system.html, find calculateTier()
if (referrals >= 50) return 'Platinum';  // Adjust numbers
```

## ⚠️ Important Notes

1. **Current Storage**: Uses localStorage (browser-based)
2. **Production**: Needs real database and backend
3. **Security**: Implement authentication for production
4. **Data**: Currently stores locally on each browser
5. **Reset**: Clear browser storage to reset test data

## 🚀 Launch Checklist

- [ ] Upload all HTML files to server
- [ ] Test all links work correctly
- [ ] Verify "Join Network" button is visible
- [ ] Test complete signup flow
- [ ] Test referral tracking
- [ ] Check admin dashboard
- [ ] Update any hardcoded URLs
- [ ] Test on mobile devices
- [ ] Share with test users
- [ ] Monitor initial signups

## 📞 Quick Support

**Issue**: Links not copying
**Fix**: Check browser permissions for clipboard

**Issue**: Dashboard not showing data
**Fix**: Check localStorage in browser console

**Issue**: Referrals not tracking
**Fix**: Ensure referral code matches exactly

**Issue**: Admin dashboard empty
**Fix**: Create test accounts first

## 🎨 Branding Elements Used

- **Primary Color**: Sky Blue (#0ea5e9)
- **Secondary Color**: Dark Blue (#1B2330)
- **Accent**: Purple/Gold for tiers
- **Font**: Inter (Google Fonts)
- **Style**: Glassy cards with blur effects

## 📈 Growth Metrics to Track

1. **Conversion Rate**: Clicks to signups
2. **Top Referrers**: Who brings most people
3. **Tier Distribution**: How users progress
4. **Member Types**: Which type is most popular
5. **Referral Sources**: Which links perform best

## 💻 Browser Console Commands

**View all users:**
```javascript
JSON.parse(localStorage.getItem('affiliateUsers'))
```

**View all referrals:**
```javascript
JSON.parse(localStorage.getItem('affiliateReferrals'))
```

**Clear all data:**
```javascript
localStorage.clear()
```

**Add test referrals:**
```javascript
// Use admin dashboard to view
// Or manually edit localStorage
```

## 🎉 Next Steps

1. Upload files to your server
2. Test with real users
3. Monitor performance
4. Gather feedback
5. Plan backend integration
6. Add email notifications
7. Create reward redemption system
8. Expand to more platforms

---

**Version**: 1.0
**Last Updated**: November 2024
**Support**: See full documentation for details
