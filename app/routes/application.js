import Ember from 'ember';
export default Ember.Route.extend({
  actions: {
        save: function() {
            console.log("+---- Save action in friend application route");
            return true;
        },
        cancel: function() {
            console.log('+---- cancel action in friends new controller');
            return true;
        }
    }
});