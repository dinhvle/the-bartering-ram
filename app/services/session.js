import Ember from 'ember';

export default Ember.Service.extend({
  access_token:null,
  user_id:null,
  username:null,
  isAuth:false,
  authenticate(log, pass){
    return Ember.$.ajax({
      method:'POST',
      url:'https://q3api.herokuapp.com/api/v1/auth/login',
      data:{username:log, password:pass}
    }).then( info => {
      this.set('access_token',info.access_token);
      if (this.access_token === "Have you a token."){
        this.set('username', info.username);
        this.set('user_id',info.user_id);
        this.isAuth = true;
      }
    });
  }
});
