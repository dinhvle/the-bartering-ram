import Ember from 'ember';
import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({
  host:'http://localhost:3000',
  namespace:'api/v1',
  session:Ember.service.inject(),
  headers:Ember.computed('session.token',() => {
    return {
      'Authorization':`Bearer ${this.get('session.token')}`
    };
  })
});
