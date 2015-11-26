Meteor.publish("websites", function () {
	return Websites.find();
});
Meteor.methods({
	httpreq: function(url) {
			//synchronous GET
			var res = extractMeta(url);
			return res;
		},
		addSite: function(title,url,description){
			if (Meteor.user()){	
				Websites.insert({ 
					title : title,
					url : url,
					description : description,
					createdOn : new Date(),
					createdBy : Meteor.userId(),
					upvotes : 0,
					downvotes : 0
				});
			}
		},
		upvote: function(website_id){
			if (Meteor.user()){
				// If user has not already upvoted this site..
				if (Meteor.user().profile.upvoted.indexOf(website_id) === -1){
					Websites.update({_id:website_id}, {$inc: {upvotes : 1}});
					Meteor.users.update({_id: Meteor.userId()}, {$push: {"profile.upvoted": website_id}});
					// If user has downvoted this site..
					if (Meteor.user().profile.downvoted.indexOf(website_id) !== -1) {
						Meteor.users.update({_id: Meteor.userId()}, {$pull: {"profile.downvoted": website_id}});
						Websites.update({_id:website_id}, {$inc: {downvotes : -1}});
					}
				}
			}
		},
		downvote: function(website_id){
			if (Meteor.user()){
				// If user has not already downvoted this site..
				if (Meteor.user().profile.downvoted.indexOf(website_id) === -1){
					Websites.update({_id:website_id}, {$inc: {downvotes : 1}});
					Meteor.users.update({_id: Meteor.userId()}, {$push: {"profile.downvoted": website_id}});
					// If user has upvoted this site..
					if (Meteor.user().profile.upvoted.indexOf(website_id) !== -1) {
						Meteor.users.update({_id: Meteor.userId()}, {$pull: {"profile.upvoted": website_id}});
						Websites.update({_id:website_id}, {$inc: {upvotes : -1}});
					}			
				}
			}
		}
	});
Accounts.onCreateUser(function(options, user) {
	  // We still want the default hook's 'profile' behavior.
	  if (user.profile == undefined) user.profile = {};
	  user.profile.upvoted = [];
	  user.profile.downvoted = [];
	  return user;
	});