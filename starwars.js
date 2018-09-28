// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para carregar:
//  - A lista de filmes
//  - A introdução de cada filme, quando ele for clicado
$.ajax({
	url: 'https://swapi.co/api/films/',
	dataType: 'json',
	success: function(response) {
		console.log(response);
		response.results.forEach(movie => {
			add(movie);
		});
	}
});

function add(movie){
	$('#movies ul')
		.append($('<li>Episode ' + movie.episode_id +': '+ movie.title +'</li>')
		.data('data-episode-url' , movie.url));
}