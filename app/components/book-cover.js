import Component from '@ember/component';

export default Component.extend({
  
  actions: {

    open() {
      this.get('book').reload().then(() => {
        this.set('isShowingModal', true);
        this.get('blurBackground')(true);
      });
    },

    close() {
      this.set('isShowingModal', false);
      this.get('blurBackground')(false);
    }

  }
  
});
