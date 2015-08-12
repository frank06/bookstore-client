import DS from 'ember-data';
import Publisher from './publisher';

export default Publisher.extend({
  books: DS.hasMany('book', { async: true }),
  discount: DS.attr('number'),
  
  loadedAt: function() {
    this.set('loadedAt', new Date());
  }.on('didLoad')
  
});