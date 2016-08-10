import Ember from 'ember';

export default Ember.Service.extend({
  token:null,
  authenticate(log, pass){
    return Ember.$.ajax({
      method:'POST',
      url:'http://127.0.0.1:3000/api/v1/auth/login',
      data:{username:log, password:pass}
    }).then( info => {
      console.log('Did the thing!');
      this.set('access_token',info.access_token);
    })
  }
});
