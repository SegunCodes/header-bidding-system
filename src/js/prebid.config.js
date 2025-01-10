var adUnits = [
    {
      code: 'banner-ad',
      mediaTypes: {
        banner: {
          sizes: [[300, 250], [728, 90]]
        }
      },
      bids: [
        {
          bidder: 'appnexus',
          params: { placementId: 123456 }
        },
        {
          bidder: 'pubmatic',
          params: { publisherId: '123', adSlot: 'Banner_300x250@300x250' }
        }
      ]
    }
];
  
// Initialize Prebid.js
window.pbjs = window.pbjs || {};
pbjs.que = pbjs.que || [];
  
pbjs.que.push(function () {
    pbjs.addAdUnits(adUnits);
    pbjs.requestBids({
      bidsBackHandler: function () {
        pbjs.setTargetingForGPTAsync();
      }
    });
});
  