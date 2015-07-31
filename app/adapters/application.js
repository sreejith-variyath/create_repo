import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
	host: 'http://www.google.com',
	 namespace: 'api'
});
