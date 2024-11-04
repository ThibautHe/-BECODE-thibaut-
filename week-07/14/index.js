const winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const board = document.querySelector(".board");
const restart = document.querySelector(".restart");
const message = document.querySelector(".message");

restart.addEventListener("click", () => reset());

let playedCellsX = [];
let playedCellsO = [];
let movesPlayed = 0;

let isplaying = true;

let winner = "";

for (let i = 0; i < 9; i++) {
  let cell = document.createElement("div");
  board.appendChild(cell);
  cell.classList.add("cell");
  cell.addEventListener("click", () => placeXorO(cell, i));
}

function placeXorO(cell, id) {
  console.log(isplaying);
  if (
    cell.classList.contains("X") ||
    cell.classList.contains("O") ||
    !isplaying
  ) {
    return;
  }
  console.log(movesPlayed);

  movesPlayed % 2 === 0 ? cell.classList.add("X") : cell.classList.add("O");
  movesPlayed % 2 === 0 ? playedCellsX.push(id) : playedCellsO.push(id);

  checkIfWon();

  movesPlayed++;
}

function checkIfWon() {
  if (playedCellsO.length < 3 && playedCellsX.length < 3) {
    return;
  }
  console.log(playedCellsO);
  console.log(playedCellsX);

  for (let combination of winCombinations) {
    const iswinning = combination.every((cell) => playedCellsO.includes(cell));
    if (iswinning) {
      winner = "O";
      isplaying = false;
      message.innerText = winner;
      return;
    }
  }
  for (const combination of winCombinations) {
    const iswinning = combination.every((cell) => playedCellsX.includes(cell));
    if (iswinning) {
      winner = "X";
      isplaying = false;
      message.innerText = winner;

      return;
    }
  }

  if (playedCellsO.length + playedCellsX.length >= 9) {
    winner = "Draw";
    isplaying = false;
    message.innerText = winner;
  }
}

function reset() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.classList.remove("X", "O");
  });
  isplaying = true;
  movesPlayed = 0;
  winner = "";
  playedCellsO = [];
  playedCellsX = [];
  message.innerText = winner;
}

/* ********************************* */

// const array2d = [
//     [null, null, null],
//     [null, null, null],
//     [null, null, null]
// ];
// let counter = 0;
// const player1 = 'O'; // O pour Player 1
// const player2 = 'X'; // X pour Player 2
// let currentPlayer = player1;

// // Acces
// const bodi = document.querySelector('body');
// const title = document.querySelector('.title');
// const gridContainer = document.querySelector('.board');
// const msg = document.querySelector('.message');
// const restart = document.querySelector('.restart');

// // Création de la grille dans le DOM et initialisation du player
// msg.innerText = 'Player 1';

// // Fonction pour créer la grille
// function createGrid() {
//     gridContainer.innerHTML = ''; // Vider le conteneur avant de créer la grille
//     for (let i = 0; i < array2d.length; i++) {
//         for (let j = 0; j < array2d[i].length; j++) {
//             const cell = document.createElement('div');
//             cell.className = 'cell'; 
//             cell.style.width = '50px'; 
//             cell.style.height = '50px'; 
//             cell.style.border = '1px solid black';
//             cell.style.display = 'flex'; 
//             cell.style.alignItems = 'center'; 
//             cell.style.justifyContent = 'center'; 
//             cell.style.cursor = 'pointer';
//             cell.style.backgroundColor = 'lightgray';
//             cell.style.borderRadius = '10px';
//             cell.style.fontSize = '40px';
//             cell.style.fontWeight = '900';
//             cell.style.boxShadow = '5px 4px 5px 5px rgba(0,0,0,0.75)';

//             // Ajouter un écouteur d'événements
//             cell.addEventListener('click', () => {
//                 markCell(i, j, cell);
//                 counter++;
//                 updateMessage();
//             });

//             gridContainer.appendChild(cell); 
//         }
//     }
// }

// // Appel initial pour créer la grille
// createGrid();

// // Mise à jour du message affiché
// function updateMessage() {
//     msg.innerHTML = ''; // Vider le contenu
//     msg.innerText = (counter % 2 === 0) ? 'Player 1' : 'Player 2';
//     currentPlayer = (counter % 2 === 0) ? player1 : player2;
// }

// // Marquer une case comme 'cliquée' par X ou O
// function markCell(row, col, cell) {
//     if (array2d[row][col] === null) {
//         array2d[row][col] = currentPlayer; // Utilise le joueur courant
//         cell.innerText = currentPlayer; // Affiche le joueur dans la cellule
        
//         // Changer la couleur du texte en fonction du joueur
//         cell.style.color = (currentPlayer === player1) ? '#38a26d' : '#009dd2';
       
//         if (checkWin()) {
//             disableBoard();
//         }
//     } else {
//         msg.textContent = `Case ${row}, ${col} déjà cliquée.`;
//     }
// }

// // Fonction pour désactiver la grille après une victoire
// function disableBoard() {
//     const cells = document.querySelectorAll('.cell');
//     cells.forEach(cell => {
//         cell.style.pointerEvents = 'none'; // Désactiver tous les clics
//     });
// }

// // Vérification des conditions de victoire
// function checkWin() {
//     // Vérification des lignes et colonnes
//     for (let i = 0; i < array2d.length; i++) {
//         if (array2d[i].every(cell => cell === player1)) {
//             alert(`Victoire de Player 1: toutes les cases de la ligne ${i} sont des "O" !`);
//             return true;
//         } else if (array2d[i].every(cell => cell === player2)){
//             alert(`Victoire Player 2: toutes les cases de la ligne ${i} sont des "X" !`);
//             return true;
//         }
//     }

//     for (let j = 0; j < array2d[0].length; j++) {
//         if (array2d.every(row => row[j] === player1)) {
//             alert(`Victoire de Player 1: toutes les cases de la colonne ${j} sont des "O" !`);
//             return true;
//         } else if (array2d.every(row => row[j] === player2)) {
//             alert(`Victoire Player 2: toutes les cases de la colonne ${j} sont des "X" !`);
//             return true;
//         }
//     }

//     // Vérification des diagonales
//     const diagonal1 = array2d.every((row, i) => row[i] === player1);
//     const diagonal2 = array2d.every((row, i) => row[array2d.length - 1 - i] === player1);
//     if (diagonal1 || diagonal2) {
//         alert('Victoire de Player 1!');
//         return true;
//     }

//     const diagonal1X = array2d.every((row, i) => row[i] === player2);
//     const diagonal2X = array2d.every((row, i) => row[array2d.length - 1 - i] === player2);
//     if (diagonal1X || diagonal2X) {
//         alert('Victoire de Player 2!');
//         return true;
//     }

//     return false; 
// }

// // Fonction de redémarrage
// restart.addEventListener('click', () => {
//     // Réinitialiser le tableau
//     for (let i = 0; i < array2d.length; i++) {
//         for (let j = 0; j < array2d[i].length; j++) {
//             array2d[i][j] = null; // Remettre toutes les cases à null
//         }
//     }
//     counter = 0; // Réinitialiser le compteur
//     currentPlayer = player1; // Réinitialiser le joueur courant
//     msg.innerText = 'Player 1'; // Remettre le message du joueur
//     createGrid(); // Recréer la grille
// });

// // Styles
// bodi.style.display = 'grid';
// bodi.style.height = '100vh';
// bodi.style.placeItems = 'center';
// bodi.style.background = 'linear-gradient(236.56deg, #1C3D65 0.35%, #102F22 100%)';
// bodi.style.color = 'white';
// title.style.fontSize = '40px';
// title.style.textDecoration = 'underline';
// gridContainer.style.display = 'flex';
// gridContainer.style.flexWrap = 'wrap';
// gridContainer.style.gap = '10px';
// gridContainer.style.width = '175px';
// gridContainer.style.color = 'black';
// restart.style.background = 'orange';
// restart.style.fontSize = '16px';
// restart.style.fontWeight = '600';
// restart.style.color = 'white';
// restart.style.padding = '5px 30px';
// restart.style.borderRadius = '10px';

/*
curieux et jaime apprendre
Vite distrait & manque de confiance & procrastine du mal a demander de laide

*/