export function initialize(application) {
  application.store = application.lookup("service:store");
  window.App = application;  // or window.Whatever
}

export default {
  name: 'global',
  initialize: initialize
};