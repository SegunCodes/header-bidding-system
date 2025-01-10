pbjs.que.push(function () {
    pbjs.onEvent('auctionEnd', function () {
      var winningBids = pbjs.getWinningBids();
      if (winningBids.length === 0) {
        console.log('No bids received. Displaying fallback ad.');
        document.getElementById('default-ad').classList.remove('hidden');
        document.getElementById('banner-ad').classList.add('hidden');        
      }
    });
});
  