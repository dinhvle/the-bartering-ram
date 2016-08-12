import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.$.ajax({
      url:'https://q3api.herokuapp.com/api/v1/users',
      method:'GET'
    }).then( info => {
      console.log(info);
      return {
        users:info
      };
    });
  }
});
