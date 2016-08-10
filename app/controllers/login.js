import Ember from 'ember';

export default Ember.controller.extend({
  username: null,
  password: null,
  session: Ember.inject.service(),
  actions:{
    authenticate(){
      this.get('sessions').authenticate(this.get('username'), this.get('password '))
        .then( () => {
          this.transitionToRoute('index');
        }, err => {
          alert(err.responseText);
          err
        })
    }
  }
});
