import Ember from 'ember';

// let items = [{
//   id: 1,
//   user_id: 1,
//   item_name: 'BDG shorts',
//   item_desc: "BDG urban outfitters light wash high rise shorts with holes// retail for around 50. great condition. marked a size 28. I have a high waisted bathing suit bottom underneath so it made them look like they are more fitted. cheeky if you're above 5'5. super cute and go with anything, I don't have exact measurements currently but I would recommend a 26 for a less fitted fit-petite 28!",
//   price: 15,
//   img_url: 'https://dl.dropboxusercontent.com/u/1344889/bartering/shorts.jpeg'
// }, {
//   id: 2,
//   user_id: 2,
//   item_name: 'Authentic Louis Buitton Shoes',
//   item_desc: 'Mens all black slip ons😺👽💀😎 #grunge #vans #shoes #mensfootwear #menswear #skateboarding #skateboardfashion #skaterat #skateshoes #classics #red #trending #trendy #footwear #urbanwear #shoes #mens #urbanfashion #urban #alternativefashion #alternative #punky #punkrock #grey',
//   price: 38,
//   img_url: 'https://dl.dropboxusercontent.com/u/1344889/bartering/shoes.jpeg'
// }, {
//   id: 3,
//   user_id: 1,
//   item_name: 'T-Shirt',
//   item_desc: '🌭 Vintage 90s The Hot Dog - Where 8 inches is just average t shirt. Good condition. Chest: 40" Waist: 40" Length: 28" medium - please check measurements. ⚡️FREE US SHIPPING!⚡️',
//   price: 20,
//   img_url: 'https://dl.dropboxusercontent.com/u/1344889/bartering/tshirt.jpeg'
// }, {
//   id: 4,
//   user_id: 2,
//   item_name: 'silky ruffle sleeve shirt',
//   item_desc: 'pretty lil vintage black silky ruffle sleeve shirt// no marked size but fits like a m/l or an oversized small',
//   price: 100,
//   img_url: 'https://dl.dropboxusercontent.com/u/1344889/bartering/shirt.jpeg'
// }, {
//   id: 5,
//   user_id: 1,
//   item_name: 'Ecote',
//   item_desc: "ecote from urban outfitters rosey LBD! so dainty and cute. marked a medium but can easily fit a small. I am 5'5. perfect to throw an oversized denim jacket over for the fall!",
//   price: 15.99,
//   img_url: 'https://dl.dropboxusercontent.com/u/1344889/bartering/ecote.jpeg'
// }, {
//   id: 6,
//   user_id: 2,
//   item_name: 'Authentic Louis Vuitton Tikal Shoulder',
//   item_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//   price: 330,
//   img_url: 'https://dl.dropboxusercontent.com/u/1344889/bartering/bag.jpeg'
// }, {
//   id: 7,
//   user_id: 3,
//   item_name: 'V Jacket',
//   item_desc: "Found the best spot to take photos on my way home this evening. Here is what I think is a brand new varsity jacket from Holloway. It's a wide 2XL scarlet and white jacket ready for some custom patches. The buttons are clean and the leather is solid AF. Retail price for this baby is $225 on their website including the %10 deal they are offering at the moment. This is made in America! U! S! A! #varistyjacket #2XL#madeinusa #scarlet #mens #shingypop",
//   price: 106.99,
//   img_url: 'https://dl.dropboxusercontent.com/u/1344889/bartering/jacket.jpeg'
// }];
export default Ember.Route.extend({
  model() {
    // return items;
    return this.store.findAll('listing');
  }
});
