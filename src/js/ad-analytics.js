pbjs.que.push(function () {
    pbjs.onEvent('bidResponse', function (bid) {
      console.log('Bid received:', bid);
      // Send bid data to analytics
    });
  
    pbjs.onEvent('bidWon', function (bid) {
      console.log('Winning bid:', bid);
    });
});
  