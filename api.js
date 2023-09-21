async function apijs() {
    const url = 'https://rawg-video-games-database.p.rapidapi.com/games';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bb72b8974amsh185e8995e5f31dbp1f741ajsnff6647acb9c3',
		'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}
