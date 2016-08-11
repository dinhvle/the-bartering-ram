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
    didUpdate: function(){
      console.log(this.get('session').isAuth, 'Did transition.');
      this.set('isAuth', true)
    }
  }

});
