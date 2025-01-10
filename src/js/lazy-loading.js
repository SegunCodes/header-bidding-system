document.addEventListener('DOMContentLoaded', function () {
    let observer = new IntersectionObserver(function (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          pbjs.que.push(function () {
            pbjs.addAdUnits(adUnits);
            pbjs.requestBids({
              bidsBackHandler: function () {
                pbjs.setTargetingForGPTAsync();
              }
            });
          });
          observer.unobserve(entry.target);
        }
      });
    });
  
    let adSlot = document.getElementById('banner-ad');
    observer.observe(adSlot);
});
  