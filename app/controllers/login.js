import Ember from 'ember';

export default Ember.Controller.extend({
  test:'Hello',
  username: null,
  password: null,
  session: Ember.inject.service(),
  actions:{
    authenticate(){
      this.get('session').authenticate(this.get('username'), this.get('password'))
        .then( () => {
          this.transitionToRoute('index');
        }, err => {
          console.log('Something fucked up.');
        });
    }
  }
});
