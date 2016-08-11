import Ember from 'ember';

export default Ember.Service.extend({
  access_token:null,
  user_id:null,
  isAuth:false,
  authenticate(log, pass){
    return Ember.$.ajax({
      method:'POST',
      url:'http://127.0.0.1:3000/api/v1/auth/login',
      data:{username:log, password:pass}
    }).then( info => {
      this.set('access_token',info.access_token);
      if (this.access_token === "Have you a token."){
        this.isAuth = true;

        //TODO: Store username and ID in the session..
      }
    });
  }
});
