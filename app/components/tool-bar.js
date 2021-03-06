import Ember from 'ember';

export default Ember.Component.extend({
  beforeModel: function(){
    if (this.get('session').isAuth){
      this.set('isAuth', true);
    }
  },

  model(){
    return {
      isAuth:this.get('session').isAuth
    }
  },
  session:Ember.inject.service(),
  actions:{
    logout: function(){
      this.get('session').isAuth = false;
      this.redirectTo('index');
    },
    willUpdate: function(){
      // Add observer to isAuth;
    }
  }

});
