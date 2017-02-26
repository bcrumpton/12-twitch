export default function createGameElement(game) {
  const gameItem = document.createElement('div');
  gameItem.classList.add('game-item');

  gameItem.innerHTML = `
  <h3 class="game-item__name"></h3>
  <h4 class="game-item__popularity"></h4>
  <img src="" alt="" class="game-item__pic" />`;

  gameItem.querySelector('.game-item__name').innerText = game.name;
  gameItem.querySelector('.game-item__popularity').innerText = `${game.popularity} Viewers`;
  gameItem.querySelector('.game-item__pic').src = game.box.large;
  gameItem.querySelector('.game-item__pic').alt = game.name;

  return gameItem;
}
