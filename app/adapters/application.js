import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host:'https://127.0.0.1:3000',
  namespace:'api/v1',
  session:Ember.service.inject(),
  headers:Ember.computed('session.token',() => {
    return {
      'Authorization':`Bearer ${this.get('session.access_token')}`
    };
  })
});
