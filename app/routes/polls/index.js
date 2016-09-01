import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		createPoll(poll) {
			console.log("This is Poll index router");
			/*const name = order.get('name');
			alert(name + 'Order saved!');*/
			this.get('store').savePoll(poll);
			this.transitionTo('polls.poll', poll);
		}
	},
	model(){
		return this.get('store').newPoll();		
	},

	store: Ember.inject.service()
});