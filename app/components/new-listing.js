import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  canPost:false,
  model(){
    return{
      user_id:this.get('session').username, //this.get('session').user_id
      item_name:null,
      item_desc:null,
      img_url:null
    }
  },
  actions:{
    newPost(user,title,body,price,image){
      Ember.$.ajax({
        url:'https://q3api.herokuapp.com/api/v1/listings',
        method:'POST',
        data:{
          user_id:user,
          item_name:title,
          item_desc:body,
          price:price,
          img_url:image
        }
      }).then( () => {
        this.set('canPost',false);
      })
    },
    showPost(){
      this.set('canPost', true);
    },

    cancel(){
      this.set('canPost', false);
    }
  }
});
