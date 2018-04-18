import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  title: attr(),
  price: attr('number'),
  author: belongsTo('author', { inverse: 'books' }),
  publisher: belongsTo('publisher', { polymorphic: true, inverse: 'published' })
});