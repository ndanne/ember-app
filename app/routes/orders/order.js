import Ember from 'ember';

export default Ember.Route.extend({
	model(params){
		console.log("This is Order router");
		return this.get('store').getOrderById(params.order_id);		
	},

	store: Ember.inject.service()
});
