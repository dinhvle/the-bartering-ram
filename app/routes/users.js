import Ember from 'ember';

export default Ember.Route.extend({
  showContact:false,
  model(){
    return Ember.$.ajax({
      url:'https://q3api.herokuapp.com/api/v1/users',
      method:'GET'
    }).then( info => {
      console.log(info);
      return {
        users:info,
        showContact:false
      };
    });
  }
});
