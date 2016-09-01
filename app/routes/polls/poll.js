import Ember from 'ember';

export default Ember.Route.extend({
	model(params){
		console.log("This is Poll router");
		return this.get('store').getPollById(params.poll_id);
	},
	
	store: Ember.inject.service()
});
