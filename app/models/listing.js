import DS from 'ember-data';

export default DS.Model.extend({
  user_id: DS.attr(),
  item_name: DS.attr(),
  item_desc: DS.attr(),
  price: DS.attr(),
  img_url: DS.attr()
});
