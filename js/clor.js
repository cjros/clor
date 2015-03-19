;(function( exports ) {
	'use strict';

	Backbone.ClorRouter = Backbone.Router.extend({
		initialize: function() {

			// this.header = document.querySelector( 'header' );
			// this.headerRender = z( Backbone.HeaderComponent );
			// this.footer = document.querySelector( 'footer' );
			// this.footerRender = z( Backbone.FooterComponent );

			// React.render( this.headerRender, this.header );
			// React.render( this.footerRender, this.footer );

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

	
	Backbone.HeaderComponent = React.createClass({
		display: 'HeaderComponent',
		render: function() {
			return z( 'nav.social', [
				z( 'ul', [
					z( 'a.me[href=#]', [
						z( 'img[src=../images/me.png]' )
					]),
					z( Backbone.AboutComponent ),
					z( 'a[href=http://twitter.com/@cjros7][target=_blank]', [
						z( 'i.fa.fa-twitter' )
					]),
					z( 'a[href=http://github.com/cjros][target=_blank]', [
						z( 'i.fa.fa-github')
					]),
					z( 'a[href=http://medium.com/@chrisonthe7][target=_blank]', [
						z( 'i.fa.fa-medium' )
					]),
					z( 'a[href=http://linkedin.com/pub/chris-lor][target=_blank]', [
						z( 'i.fa.fa-linkedin-square' )
					])
				])
			])
		}
	});

	Backbone.FooterComponent = React.createClass({
		display: 'FooterComponent',
		render: function() {
			return z( 'nav.links', [
				z( 'ul', [
					z( 'a[href=#works]', [
						z( 'li.works', 'Works' )
					]),
					/*z( 'a[href=#blog]', [
						z( 'li', 'Blog')
					]),*/
					z( 'a[href=mailto:clor09@gmail.com][target=_blank]', [
						z( 'li.contact', 'Contact')
					])
				])
			])
		}
	});

	Backbone.AboutComponent = React.createClass({
		display: 'AboutComponent',
		render: function() {
			return z('div.info', [
				z( 'h2', 'Chris Lor' ),
				z( 'h4', 'Frontend Web Developer'),
				z( 'h6', '#HTML5 #CSS3 #JavaScript' ),
				z( 'p.statement', 'Not just here for coffee. Not just here for hip culture. I\'m here for the coding, the problem-solving, the solutions and technologies')
				])
		}
	})


})( typeof module === 'object' ? module.exports: window );