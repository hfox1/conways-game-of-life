const prompt = require('prompt-sync')({ sigint: true });
const Turn = require('./turn');

const demoBoard = () => {
  console.log(
    '[[0, 1, 1, 1, 1],[0, 0, 0, 0, 0],[0, 1, 1, 1, 0],[0, 0, 0, 0, 0],[1, 1, 1, 1, 1]]'
  );
};

const startingBoardPrompt = () => {
  prompt(
    'Please enter a starting board in above format - you may increase the dimensions as you wish \n'
  );
};

const startingBoardConfirm = () => {
  console.log('Your starting board will be: \n', startingBoard);
};

demoBoard();
let startingBoard = startingBoardPrompt();
startingBoardConfirm();

exports.demoBoard = demoBoard;
exports.startingBoardPrompt = startingBoardPrompt;

// let input = prompt('Evolve? (Y/N)');
// until (input == 'N') {
//     let turn = new Turn(board);
//     board = turn.next();
//     input = prompt('Evolve? (Y/N)');
//   };
