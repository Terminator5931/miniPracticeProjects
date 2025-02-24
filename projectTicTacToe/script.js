//const rq = require('readline-sync');
const selMark = document.querySelector('#selMark');//{{{
selMark.showModal();
document.querySelector('#selMark button.close').addEventListener('click', () => {
  selMark.close();
});

document.querySelector('#selMark form').addEventListener('submit', (e) => {
  e.preventDefault();
  selMark.close();
  player.one.marker = document.querySelector('#selMark select').value;
  player.two.marker = player.one.marker == 'X' ? 'O' : 'X';
  player.one.markerSVG = player.one.marker == 'X' ? 'xmark-solid.svg' : 'circle-regular.svg';
  player.two.markerSVG = player.one.markerSVG == 'xmark-solid.svg' ? 'circle-regular.svg' : 'xmark-solid.svg';

})//}}}
const ticTacToe = (function() {//{{{
  let gameBoard = ['', '', '', '', '', '', '', '', ''];
  let winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  let remainingCells = 9;
  return {
    gameBoard,
    remainingCells,
    winningCombos,
  }
})();//}}}
const player = (function() {//{{{
  let turn = true;
  const one = {
    wins: 0,
    marker: '',
    markerSVG: ''
  }
  const two = {
    wins: 0,
    marker: '',
    markerSVG: ''
  }
  return {
    one,
    two,
    turn,
  }
})();//}}}
let visited = [
  false, false, false,
  false, false, false,
  false, false, false
];
function set(turn, cellNo = 0, gameBoard = []) {
  //console.log(`Index chosen is: ${index}`);
  if (!visited[cellNo]) {
    gameBoard[cellNo] = (turn ? player.one.marker : player.two.marker);
    //console.log(`Now gameBoard[${row}][${cellNo}] is ${gameBoard[index]}`);
    visited[cellNo] = true;
  }
  else {
    console.log("Can't set already occupied");
  }
}
function printBoard(gameBoard = []) {
  for (let i = 0; i < 3; i++) {
    let a = '';
    for (let j = 0; j < 3; j++) {
      a += `${gameBoard[i * 3 + j] == '' ? '.' : gameBoard[i * 3 + j]} `;
    }
    console.log(a);
  }
}
function chckWin(combos = [[]], gameBoard = [], turn = false) {
  combos = ticTacToe.winningCombos;
  gameBoard = ticTacToe.gameBoard;
  turn = player.turn;
  let chckForMark = turn ? player.one.marker : player.two.marker;
  console.log(typeof (chckForMark), chckForMark, `Turn is ${turn}`);
  combos.forEach(element => {
    if (chckForMark == gameBoard[element[0]] && chckForMark == gameBoard[element[1]] && chckForMark == gameBoard[element[2]]) {
      if (turn) {
        player.one.wins++;
      }
      else {
        player.two.wins++;
      }
      showResult();
      //console.log(`Player ${turn ? 'One' : 'Two'} Wins`);
    }
  });
}
// CSS
const board = document.getElementById('board');
function showResult() {
  document.querySelector('#hellowinner').innerHTML =
    `
    <h1>Player ${player.one.wins > player.two.wins ? "One" : "Two"} Wins</h1>
    <img height="70vh" width="70vw"
      src="${player.one.wins > player.two.wins ? player.one.markerSVG : player.two.markerSVG}">
    `;
  document.querySelector('#result').showModal();
}
for (let i = 0; i < 9; i++) {
  let div = document.createElement('div');
  div.setAttribute('class', `min-boxes ${i}`)
  div.addEventListener('click', (e) => {
    const a = e.target.className;
    if (!visited[a.slice(a.length - 1)]) {
      set(player.turn, a.slice(a.length - 1), ticTacToe.gameBoard);
      if (player.turn) {
        div.innerHTML = `<img height="70vh" width="70vw" src="${player.one.markerSVG}">`;

      }
      else {
        div.innerHTML = `<img height="70vh" width="70vw" src="${player.two.markerSVG}">
`;
      }
      chckWin();
      player.turn = !player.turn;
      e.target.classList.add('noClick');
    }
  });
  board.appendChild(div);
}
