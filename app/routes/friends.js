import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		save:function(){
			console.log("+--- save action propagated to friends routes");
			return true;
		}
	}
	 
});
