import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  discount: DS.attr('number'),
  published: DS.hasMany('book', { async: true })  
});