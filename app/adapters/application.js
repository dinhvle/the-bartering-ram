import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host:'https://q3api.herokuapp.com/',
  namespace:'api/v1',
  session:Ember.service.inject(),
  headers:Ember.computed('session.token',() => {
    return {
      'Authorization':`Bearer ${this.get('session.access_token')}`
    };
  })
});
