// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para carregar:
//  - A lista de filmes
//  - A introdução de cada filme, quando ele for clicado
var romanNumbers = { 1:'I', 2:'II', 3:'III', 4:'IV', 5:'V', 6:'VI', 7:'VII' };

$.ajax({
	url: 'https://swapi.co/api/films/',
	dataType: 'json',
	success: response => {
		console.log(response);
		let sortedMovies = response.results.sort(byEpisode);
		sortedMovies.forEach(movie => {
			add(movie);
		});
	}
});
function byEpisode(p, q){
	return p.episode_id - q.episode_id;
}
function add(movie){
	$('#movies ul')
		.append($('<li>Episode ' + romanNumbers[movie.episode_id] +': '+ movie.title +'</li>')
			.attr('data-episode-url', movie.url)
			.click(event => { changeIntro(event)}));
}
function changeIntro(event){
	$.ajax({
		url: event.currentTarget.getAttribute('data-episode-url'),
		dataType: 'json',
		success: movie => {
			$('.reading-animation')
				.html('Episode ' + romanNumbers[movie.episode_id] + '\n' + movie.title.toUpperCase() + '\n\n' + movie.opening_crawl);
		}
	});
}
