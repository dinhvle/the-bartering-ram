import Ember from 'ember';

export default Ember.Component.extend({
  model(){
    return {
      item_name:null,
      item_desc:null,
      price:null,
      img_url:null
    }
  },

  actions: {
    onSubmit: function(item_name,item_desc,price,img_url){
      return Ember.$.ajax({
        url:'http://127.0.0.1:3000/api/v1/listings',
        method:'POST',
        data:{
          user_id:1,
          item_name:item_name,
          item_desc:item_desc,
          price:price,
          img_url:img_url
        }
      }).then( info => {
        console.log('Test.');
      })
    }
  }
});
