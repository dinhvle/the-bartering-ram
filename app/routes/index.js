import Ember from 'ember';

export default Ember.Route.extend({
  auth:false,
  newMessage:false,
  newListing:false,
  model() {
    return Ember.$.ajax({
      url:'http://127.0.0.1:3000/api/v1/listings',
      method:'GET'
    }).then( list => {
      return {
        items:list,
        isAuth:this.get('session').isAuth,
        showContact:this.newMessage,
        newListing:this.newListing
      };
    });
  },
  session: Ember.inject.service(),
  actions:{
    showContact(){
      console.log('Test.');
      this.set('newMessage', true);
    },
    closeContact(){
      this.set('newMessage', false);
    },
    showListing(){
      this.set('showListing', true);
    },
    closeListing(){
      this.set('showListing', false);
    }
  }
});
