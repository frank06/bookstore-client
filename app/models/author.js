import Publisher from './publisher';
import { hasMany } from 'ember-data/relationships';

export default Publisher.extend({
  books: hasMany('book', { async: true })
});