// Routing
Router.configure({
	layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function () {
	this.render('navbar', {
		to:"navbar"
	});
	this.render('website_form', {
		to:"form"
	});
	this.render('website_list', {
		to:"main"
	});
});

Router.route('/website/:_id', function () {
	this.render('navbar', {
		to:"navbar"
	});
	this.render('single', {
		to:"main", 
		data:function(){
			return Websites.findOne({_id:this.params._id});
		}
	});
});