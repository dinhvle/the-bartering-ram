import Ember from 'ember';

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
    });
  },
  session: Ember.inject.service()
});
