Websites = new Mongo.Collection("websites");

WebsitesIndex = new EasySearch.Index({
	collection: Websites,
	fields: ['title', 'description'],
	engine: new EasySearch.Minimongo()
});
