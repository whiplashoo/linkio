Meteor.startup(function () {
    // code to run on server at startup
    if (!Websites.findOne()){
    	console.log("No websites yet. Creating starter data.");
    	Websites.insert({
    		title:"Create Custom Map | mapchart", 
    		url:"http://mapchart.net", 
    		description:"Create your own free custom Map of World, Europe, Asia, United States and others in 3 easy steps. Download it for free and use it for a great visual representation.", 
    		createdOn:new Date(),
    		upvotes : 0,
    		downvotes : 0
    	});
    	Websites.insert({
    		title:"Match the color", 
    		url:"http://matchthecolor.meteor.com/", 
    		description:"Match-the-color game featuring a high score leaderboard and live updating.", 
    		createdOn:new Date(),
    		upvotes : 0,
    		downvotes : 0
    	});
    	Websites.insert({
    		title:"Google", 
    		url:"https://google.com/", 
    		description:"Popular search engine.", 
    		createdOn:new Date(),
    		upvotes : 0,
    		downvotes : 0
    	});
    	Websites.insert({
    		title:"Goldsmiths Computing Department", 
    		url:"http://www.gold.ac.uk/computing/", 
    		description:"This is where this course was developed.", 
    		createdOn:new Date(),
    		upvotes : 0,
    		downvotes : 0
    	});
    	Websites.insert({
    		title:"University of London", 
    		url:"http://www.londoninternational.ac.uk/courses/undergraduate/goldsmiths/bsc-creative-computing-bsc-diploma-work-entry-route", 
    		description:"University of London International Programme.", 
    		createdOn:new Date(),
    		upvotes : 0,
    		downvotes : 0
    	});
    	Websites.insert({
    		title:"Coursera", 
    		url:"http://www.coursera.org", 
    		description:"Universal access to the world’s best education.", 
    		createdOn:new Date(),
    		upvotes : 0,
    		downvotes : 0
    	});
    	Websites.insert({
    		title:"whiDev", 
    		url:"http://www.whidev.com", 
    		description:"Freelance Developer site", 
    		createdOn:new Date(),
    		upvotes : 0,
    		downvotes : 0
    	});
    	
    }
});