module.exports = function(server) {
	
	server.get('/', function(request, response) {
		response.render('home/index.html', {
			'title': 'Home Page' 
		});
	});
}