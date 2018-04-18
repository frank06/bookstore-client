import Route from '@ember/routing/route';

export default Route.extend({
  
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
      this.transitionTo({ queryParams: { limit: total }});
    }

  }
  
});
