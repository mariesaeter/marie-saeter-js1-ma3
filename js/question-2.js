// API-key: 02ae988af89b487da9d508caa00883b7

const key = "02ae988af89b487da9d508caa00883b7";

const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${key}`;

const gamesContainer = document.querySelector(".gamesContainer");

async function getGames() {
  const response = await fetch(url);
  const games = await response.json();
  console.log(games);

  const results = games.results;

  gamesContainer.innerHTML = "";

  for (let i = 0; i < results.length; i++) {
    if (i === 8) {
      break;
    }

    let name = results[i].name;
    let rating = results[i].rating;
    let tags = results[i].tags.length;

    gamesContainer.innerHTML += `<ul class = "game"><li class="name">${name}</li> <li>Rating: ${rating}</li> <li>Number of tags: ${tags}</li></ul>`;
  }
}
getGames();
