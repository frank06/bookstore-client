import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  price: DS.attr('number'),
  author: DS.belongsTo('author', { inverse: 'books' }),
  publisher: DS.belongsTo('publisher', { polymorphic: true, inverse: 'published' })
});
