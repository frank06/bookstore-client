import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('books', { path: '/' });
  this.route('author', { path: '/author/:author_id' });
});

export default Router;
