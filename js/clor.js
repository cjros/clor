;(function( exports ) {
	'use strict';

	Backbone.ClorRouter = Backbone.Router.extend({
		initialize: function() {
			this.projectsView = document.querySelector('.allprojects') //for react to catch

			this.rp = $('.allprojects');
			this.more = $('.more');
			this.tech = $('.tech');

			this.projects = 
				[{
					project_name: 'Locusity',
					image: './images/locusity.png',
					description: 'final project for The Iron Yard; uses current location to allow you to chat with others around your area' +
					' and check out meetups the chatroom is interested in.',
					link: 'http://cjros.github.com/locusity-app/',
					gh_link: 'http://github.com/cjros/locusity-app/',
					tools_used: 'backbonejs, react, sass, html5 geolocation API, gmaps API, meetup.com API, pubnub sdk, git'
				}, {
					project_name: 'CoffeeSnob',
					image: './images/coffeesnob.png',
					description: 'gain learning experience communicating with the back-end class (ruby on rails); figure out how to structure API'+
					' and data models to bring a project into the building phase',
					link: 'http://cjros.github.io/yelpee/',
					gh_link: 'http://github.com/cjros/yelpee/',
					tools_used: 'backbonejs, react, custom API, git'
				},
				{
					project_name: 'My own Etsy',
					image: './images/etsy.png',
					description: 'first experience with APIs; pull etsy information to create my own etsy-style website',
					link: 'http://cjros.github.io/etsy/',
					gh_link: 'http://github.com/cjros/etsy/',
					tools_used: 'backbonejs, Etsy API, git'
				}
			];

			Backbone.history.start();
		},
		routes: {
			'projects': 'projects',
			'*default': 'home'
		},
		home: function() {
			//workarounds
			this.rp.hide();
			this.more.show();
			this.tech.show();
			
		},
		projects: function() {
			//workarounds
			this.more.hide();
			this.tech.hide();
			this.rp.show();
			this.view = z(Backbone.ProjectContainer, {projects: this.projects});
			React.render(this.view, this.projectsView);
		}
	});

	Backbone.ProjectContainer = React.createClass({
		display: 'ProjectContainer',
		render: function() {
			// console.log(this.props)
			// debugger;
			return z('div.projects', [
				z('i.fa.fa-server'),
				z('h3.p-title', '{ Projects }'),
				z('div.project-container', [ //pattern here; can create loop but testing projects info
					z(Backbone.aProjectInstance, {key: 'locusity', project: this.props.projects[0]}),
					z(Backbone.aProjectInstance, {key: 'coffeesnob', project: this.props.projects[1]}),
					z(Backbone.aProjectInstance, {key: 'etsy', project: this.props.projects[2]})
				])
			])
		}

	});

	Backbone.aProjectInstance = React.createClass({
		display: 'aProjectInstance',
		render: function() {
			// console.log(this.props)
			var project = this.props.project;
			// debugger;
			return z('div.aProject', [
				
				z('div.info-container', [
					z('img.p-image[src=' + project.image + '][alt=' + project.project_name + ']'),
					z('div.desc-container', [
						z('h3.p-name', project.project_name),
						z('div.desc', 'Description: ' +  project.description),
						z('a[href=' + project.link + '][target=_blank]', '{ View Site }'),
						z('a[href=' + project.gh_link + '][target=_blank]', '{ GitHub Source }'),
						z('div.tools', 'Tools used: ' + project.tools_used)
					])
				])
			])
		}
	});

	

})( typeof module === 'object' ? module.exports: window );