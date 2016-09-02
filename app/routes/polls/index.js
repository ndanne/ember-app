import Ember from 'ember';

export default Ember.Route.extend({
	/*actions: {
		createPoll(vote) {		
			this.get('store').savePoll(vote);
			this.transitionTo('polls.poll', vote);
		}
	},*/
	model(){
		return this.get('store').newPoll();		
	},

	store: Ember.inject.service()
});