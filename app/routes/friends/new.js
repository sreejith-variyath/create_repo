import Ember from 'ember';

export default Ember.Route.extend({
	 model:function(){
	 	return this.store.createRecord('friend');
	 },
	 actions:{
	 	save:function(){
	 		console.log('+--save action propagated to new friend router');
	 		return false;
	 	}
	 }
});
