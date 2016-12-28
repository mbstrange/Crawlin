var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

// Edit this for the sku --- need info ahead of time?
// Currently buys the hanes supreme t shirt in size large
var item_sku = "S_ms0xvo6mk";
// Edit this for the size --- need info ahead of time?
var size = 37119;

// Fill this shit in fam
var name = "Name";
var email = "Email";
var phone = "Telephone";
var address = "Address";
var zip = "Zip";
var city = "City";
var state = "State"; // Two letter code for state AL,AK,AS,...
var country = "USA"; // USA, CANADA
var cctype = "visa"; // visa, american_express, master
var ccnumber = "CCNUMBER"
var cvv = "CVV";
var month = "MONTH"; // "01,02,03,04,05,06,07,08,09,10,11,12"
var year = "YEAR"; // 2016, 2017, 2018

nightmare
  .goto('https://supremenewyork.com/shop/all')
  //.click('[href="/shop/all/accessories"]')
  .wait('[alt= ' + item_sku + ']')
  .click('[alt= ' + item_sku + ']')
  .wait('[itemprop="price"]')
  .select('[id="size"]', "37119")
  .evaluate(function () {
    price = document.querySelector('[itemprop="price"]').innerText
    return price
  })
  .click('[type="submit"]')
  .wait(300)
  .goto('https://www.supremenewyork.com/checkout')
//  .wait(200)
  .insert('#order_billing_name', name)
  .insert('#order_email', email)
  .insert('#order_tl', phone)
  .insert('#bo', address)
  .insert('#order_billing_zip', zip)
  .insert('#order_billing_city', city)
  .select('#order_billing_country', country)
  .select('#credit_card_type', cctype)
  .insert('#cnb', ccnumber)
  .insert('#cvw', cvv)
  .select('#order_billing_state', state)
  .select('#credit_card_month', month)
  .select('#credit_card_year', year)
  .click('[class="has-checkbox terms"]')

  // Uncomment this line to let it rip.
  //.click('[value="process payment"]')
  //.end()
  .then(function (result) {
    console.log(result)
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });
