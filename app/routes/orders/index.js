import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		createOrder(order) {
			console.log("This is Order index router");
			/*const name = order.get('name');
			alert(name + 'Order saved!');*/
			this.get('store').saveOrder(order);
			this.transitionTo('orders.order', order);
		}
	},
	model(){
		return this.get('store').newOrder();		
	},

	store: Ember.inject.service()
});
