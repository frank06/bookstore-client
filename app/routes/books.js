import Ember from 'ember';

export default Ember.Route.extend({
  
  queryParams: {
     limit: {
       refreshModel: true
     }
   },

   model(params) {
     return this.store.query('book', params);
   },
  
  actions: {
    
    showAll() {
      const total = this.controllerFor('books').get('total');
      this.transitionTo({ queryParams: { limit: total }}); // total?
    },
    
    blurBackground(blur) {
      this.controllerFor('application').set('blur', blur);
    }
  }
  
});
