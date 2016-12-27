var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

var item_sku = "S_ms0xvo6mk";
var size = 37119;

nightmare
  .goto('https://supremenewyork.com/shop/all')
 // .type('form[action*="/search"] [name=p]', 'github nightmare')
  .click('[href="/shop/all/accessories"]')
  .wait('[alt= ' + item_sku + ']')
  .click('[alt= ' + item_sku + ']')
  .wait('[itemprop="price"]')
  .select
  .evaluate(function () {
    return document.querySelector('[itemprop="price"]').innerText
  })
  .end()
  .then(function (result) {
    console.log(result)
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });
