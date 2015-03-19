;(function( exports ) {
	'use strict';

	Backbone.ClorRouter = Backbone.Router.extend({
		initialize: function() {

			Backbone.history.start();
		},
		routes: {
			'blog': 'blog',
			'*default': 'home'
		},
		home: function() {
			console.log('hi');
		},
		blog: function() {
			console.log('blog');
		}
	});

})( typeof module === 'object' ? module.exports: window );