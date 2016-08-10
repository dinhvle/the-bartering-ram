import Ember from 'ember';

export default Ember.Service.extend({
  token:null,
  authenticate(log, pass){
    return Ember.$.ajax({
      method:'POST',
      url:'http://localhost:3000/api/v1/auth/login',
      data:{username:log, password:pass}
    }).then( info => {
      this.set('token',info.access_token);
    })
  }
});
