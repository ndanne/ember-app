import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		console.log("This is Polls router");
		this.debug('Hello from the router poll.');
		return this.get('store').getPolls();
	},
	
	store: Ember.inject.service()
});
