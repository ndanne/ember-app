import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  //this.route('orders', {path: '/orders'}); 
  this.route('orders');
  this.route('orders', function(){
      this.route('order', {path: '/:order_id'});
  });
  this.route('user');
  this.route('post');
  this.route('polls');
  this.route('polls', function(){
     this.route('poll', {path: '/:poll_id'});
  });
});

export default Router;
