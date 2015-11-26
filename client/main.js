Comments.ui.config({
	template: 'bootstrap' 
});
Accounts.ui.config({
	passwordSignupFields: 'USERNAME_AND_EMAIL'
});
Meteor.subscribe("websites");

/////
// template helpers 
/////

// helper function that returns all available websites
Template.website_list.helpers({
	websites:function(){
		return Websites.find({}, {sort : { upvotes: -1 }});
	},
	WebsitesIndex: function () {
		return WebsitesIndex;
	},
	resultsCount: function () {
		var count = WebsitesIndex.getComponentDict().get('count');
		var str = count == 1 ? 'result' : 'results';
		return count + ' ' + str;
	},
	inputAttributes: function () {
		return { 'class': 'easy-search-input form-control', 'placeholder': 'Search for a site...' };
	},
	loadMoreAttributes: function () {
		return { 'class': 'btn btn-block btn-primary' };
	}
});

Template.website_item.helpers({
	isUpvoted: function() {
		if (Meteor.user())
			return Meteor.user().profile.upvoted.indexOf(this._id) !== -1;
	},
	isDownvoted: function() {
		if (Meteor.user())
			return Meteor.user().profile.downvoted.indexOf(this._id) !== -1;
	}
});

Template.single.helpers({
	isUpvoted: function() {
		if (Meteor.user())
			return Meteor.user().profile.upvoted.indexOf(this._id) !== -1;
	},
	isDownvoted: function() {
		if (Meteor.user())
			return Meteor.user().profile.downvoted.indexOf(this._id) !== -1;
	}
});

/////
// template events 
/////

Template.website_item.events({
	"click .js-upvote":function(event){
		var website_id = this._id;
		Meteor.call("upvote",website_id);
		return false;
	}, 
	"click .js-downvote":function(event){
		var website_id = this._id;
		Meteor.call("downvote",website_id);
		return false;
	}
});

Template.single.events({
	"click .js-upvote":function(event){
		var website_id = this._id;
		Meteor.call("upvote",website_id);
		return false;
	}, 
	"click .js-downvote":function(event){
		var website_id = this._id;
		Meteor.call("downvote",website_id);
		return false;
	}
})

Template.website_form.events({
	"click .js-toggle-website-form":function(event){
		$("#website_form").toggle('slow');
	}, 
	"submit .js-save-website-form":function(event){
		var url = event.target.url.value;
		var title = event.target.title.value;
		var description = event.target.description.value;
		if ( url !== "" && title !== "" && description !== ""){
			Meteor.call('addSite',title,url,description);
			$("#website_form").toggle('slow');
			return false;
		}
		else {
			Meteor.call('httpreq', url, function(err, data){
				var title = data.title;
				var description = data.description;
				if (title !== undefined && description !== undefined){
					Meteor.call('addSite',title,url,description);
					$("#website_form").toggle('slow');
				}
				else {
					$(".custom_div").toggle('slow');
				}
			})
		}
		return false;
	}
});