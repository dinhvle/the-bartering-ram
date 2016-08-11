import Ember from 'ember';

// let items = [{
//   id: 1,
//   user_id: 1,
//   item_name: 'BDG shorts',
//   item_desc: "BDG urban outfitters light wash high rise shorts with holes// retail for around 50. great condition. marked a size 28. I have a high waisted bathing suit bottom underneath so it made them look like they are more fitted. cheeky if you're above 5'5. super cute and go with anything, I don't have exact measurements currently but I would recommend a 26 for a less fitted fit-petite 28!",
//   item_price: 15,
//   item_image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
// }, {
//   id: 2,
//   user_id: 2,
//   item_name: 'Authentic Louis Buitton Shoes',
//   item_desc: 'Mens all black slip ons😺👽💀😎 #grunge #vans #shoes #mensfootwear #menswear #skateboarding #skateboardfashion #skaterat #skateshoes #classics #red #trending #trendy #footwear #urbanwear #shoes #mens #urbanfashion #urban #alternativefashion #alternative #punky #punkrock #grey',
//   item_price: 38,
//   item_image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
// }, {
//   id: 3,
//   user_id: 1,
//   item_name: 'T-Shirt',
//   item_desc: '🌭 Vintage 90s The Hot Dog - Where 8 inches is just average t shirt. Good condition. Chest: 40" Waist: 40" Length: 28" medium - please check measurements. ⚡️FREE US SHIPPING!⚡️',
//   item_price: 20,
//   item_image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
// }, {
//   id: 4,
//   user_id: 2,
//   item_name: 'silky ruffle sleeve shirt',
//   item_desc: 'pretty lil vintage black silky ruffle sleeve shirt// no marked size but fits like a m/l or an oversized small',
//   item_price: 100,
//   item_image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
// }, {
//   id: 5,
//   user_id: 1,
//   item_name: 'Ecote',
//   item_desc: "ecote from urban outfitters rosey LBD! so dainty and cute. marked a medium but can easily fit a small. I am 5'5. perfect to throw an oversized denim jacket over for the fall!",
//   item_price: 15.99,
//   item_image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
// }, {
//   id: 6,
//   user_id: 2,
//   item_name: 'Authentic Louis Vuitton Tikal Shoulder',
//   item_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//   item_price: 330,
//   item_image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
// }, {
//   id: 7,
//   user_id: 1,
//   item_name: 'V Jacket',
//   item_desc: "Found the best spot to take photos on my way home this evening. Here is what I think is a brand new varsity jacket from Holloway. It's a wide 2XL scarlet and white jacket ready for some custom patches. The buttons are clean and the leather is solid AF. Retail price for this baby is $225 on their website including the %10 deal they are offering at the moment. This is made in America! U! S! A! #varistyjacket #2XL#madeinusa #scarlet #mens #shingypop",
//   item_price: 106.99,
//   item_image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
// }];

export default Ember.Route.extend({
  auth:false,
  model() {
    return Ember.$.ajax({
      url:'http://127.0.0.1:3000/api/v1/listings',
      method:'GET'
    }).then( list => {
      return {
        items:list,
        isAuth:this.get('session').isAuth
      };
    })

  },
  session: Ember.inject.service(),
  actions: {
    // Do the thing.
  }
});
