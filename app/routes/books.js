import Ember from 'ember';

export default Ember.Route.extend({
  
  model() {
    return this.store.findAll('book');
  },
  
  actions: {
    
    openCheckoutModal(book) {
      this.controllerFor('application').set('showingModal', true);
      return this.render('modal', {
        outlet: 'modal',
        into: 'application',
        controller: 'application',
        model: this.store.findRecord('book', book.id, { reload: true })
      });
    },

    closeCheckoutModal() {
      this.controllerFor('application').set('showingModal', false);
      return this.disconnectOutlet({
        outlet: 'modal',
        controller: 'application',
        parentView: 'application'
      });
    }
    
  }
  
});
