import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  title: attr('string'),
  price: attr('number'),
  author: belongsTo('author', { async: true, inverse: 'books' }),
  publisher: belongsTo('publisher', { polymorphic: true, async: true, inverse: 'published' })
});