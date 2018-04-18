import Route from '@ember/routing/route';

export default Route.extend({
  
  actions: {
    blurBackground(blur) {
      this.controllerFor('application').set('blur', blur);
    }
  }
  
});
