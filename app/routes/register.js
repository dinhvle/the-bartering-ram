import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return {
      username:null,
      password:null,
      avatar_url:null,
      location:null
    }
  },

  actions: {
    onSubmit: function(un,pw,au,lc){
      return Ember.$.ajax({
        url:'http://127.0.0.1:3000/api/v1/users',
        method:'POST',
        data:{
          username:un,
          password:pw,
          avatar_url:au,
          location:lc
        }
      }).then(info=>{
        this.transitionTo('index');
      })
    }
  }

});
