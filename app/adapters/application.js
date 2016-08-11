import Ember from 'ember';
import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({
  host:'https://127.0.0.1:3000',
  namespace:'api/v1',
  session:Ember.service.inject(),
  headers:Ember.computed('session.token',() => {
    return {
      'Authorization':`Bearer ${this.get('session.access_token')}`
    };
  })
});
