import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('books');
  this.route('authors');
  this.route('publishing-houses');
});

export default Router;
