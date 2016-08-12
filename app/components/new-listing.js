import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  model(){
    return{
      user_id:null, //this.get('session').user_id
      item_name:null,
      item_desc:null,
      img_url:null
    }
  },
  actions:{
    newPost(user,title,body,price,image){
      Ember.$.ajax({
        url:'http://127.0.0.1:3000/api/v1/listings',
        method:'POST',
        data:{
          user_id:user,
          item_name:title,
          item_desc:body,
          price:price,
          img_url:image
        }
      }).then( () => {
        console.log('New listing added.');
      })
    }
  }
});
