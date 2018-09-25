// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para carregar:
//  - A lista de filmes
//  - A introdução de cada filme, quando ele for clicado


// let requisicao = new XMLHttpRequest();
// requisicao.onreadystatechange = callbackSWFilms;
// requisicao.responseType = 'json';
// requisicao.open('GET', '/swapi.co/api/films/');
// requisicao.send();

// function callbackSWFilms() {
//   if (requisicao.readyState === 4) {  // 4: DONE (resp. recebida)
//     if (requisicao.status === 200) {  // 200: código Ok do HTTP
//       // a resposta chegou e foi um arquivo
//       // .json com um array de tweets:
//       let novosTweets = requisicao.response.arrayComNovosTweets;
//       novosTweets.forEach(colocaTweetNaPagina);
//     } else {
//       console.log('Erro ao carregar mais tweets. Código HTTP: '
//         + requisicao.status);
//     }
//   }
// }

$.ajax({
	url: 'https://swapi.co/api/films/',
	dataType: 'json',
	success: function(resposta) {

	  // resposta.results.forEach(adiciona);
	  console.log(resposta);
	}
});


function adiciona(ep){
	let $li = $('<div></div>').appendTo(document.body.nav.ul);
	$li.innerHTML = ep.title;
}