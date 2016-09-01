import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		//console.log("This is Orders router");
		//this.debug('Hello from the application rout Order.');
		 const store = this.get('store');
		 return store.getOrders();
	},

	store: Ember.inject.service()
});
