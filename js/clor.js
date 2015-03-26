;(function( exports ) {
	'use strict';

	Backbone.ClorRouter = Backbone.Router.extend({
		initialize: function() {

			// this.collection = {
			// 	[{
			// 		project_name: 
			// 		image:
			// 		description:
			// 		link:
			// 		tools_used:
			// 	}, {
			// 		project_name: 
			// 		image:
			// 		description:
			// 		link:
			// 		tools_used:
			// 	}, {
			// 		project_name: 
			// 		image:
			// 		description:
			// 		link:
			// 		tools_used:
			// 	}
			// ]}

			Backbone.history.start();
		},
		routes: {
			'projects': 'projects',
			'*default': 'home'
		},
		home: function() {
			console.log('hi');
		},
		projects: function() {
			console.log('projects');
		}
	});

})( typeof module === 'object' ? module.exports: window );