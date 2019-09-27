const jokes = new Jokes();
const ui = new UI();

document.addEventListener('DOMContentLoaded', getJokes);
const getRandomJoke = document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes() {
	jokes.getJoke()
		.then(results => {
			ui.paint(results);
		})
		.catch(err => console.log(err));
}