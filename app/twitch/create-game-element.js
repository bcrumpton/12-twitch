export default function createGameItem(game) {
  const gameItem = document.createElement('div');
  gameItem.classList.add('game-item');

  const gameName = document.createElement('h3');
  gameName.classList.add('game-item__name');
  gameItem.appendChild(gameName);

  gameName.innerText = game.name;

  const gamePop = document.createElement('h4');
  gamePop.classList.add('game-item__popularity');
  gameItem.appendChild(gamePop);

  gamePop.innerText = game.popularity + ' Viewers';

  const gameImg = document.createElement('img');
  gameImg.classList.add('game-item__pic');
  gameItem.appendChild(gameImg);

  gameImg.src = game.box.large;
  gameImg.alt = game.name;


  return gameItem;
};
