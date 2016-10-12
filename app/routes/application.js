import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    blurBackground(blur) {
     this.controllerFor('application').set('blur', blur);
    }
  }

});
