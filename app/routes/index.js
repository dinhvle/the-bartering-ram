import Ember from 'ember';

export default Ember.Route.extend({
  auth:false,
  newMessage:false,
  newListing:false,
  model() {
    return Ember.$.ajax({
      url:'https://q3api.herokuapp.com/api/v1/listings',
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
