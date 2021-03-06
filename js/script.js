var argButtonName, buttonPaper, buttonRock, buttonScissors, buttonTest, kamie_C5_84, no_C5_BCyce, papier, x;

buttonScissors = document.getElementById('button-scissors');
buttonPaper = document.getElementById('button-paper');
buttonRock = document.getElementById('button-rock');
buttonTest = document.getElementById('button-test');
/**
 * Describe this function...
 */
function buttonClicked(argButtonName, kamie_C5_84, papier, no_C5_BCyce) {
  printMessage(kamie_C5_84 + papier + no_C5_BCyce + argButtonName + ' został kliknięty');
  console.log(argButtonName + papier + no_C5_BCyce + kamie_C5_84 + ' został kliknięty');
}

var and, argComputerMove, argMoveId, argPlayerMove, computerMove, playerInput, playerMove, randomNumber;

/**
 * Describe this function...
 */
function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
}

/**
 * Describe this function...
 */
function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == computerMove) {
    printMessage('Remis!');
  } else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}
playerMove = argButtonName;
console.log('ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);

buttonTest.addEventListener('click', function(){ buttonClicked('Guzik TEST', '', '', ''); });
buttonRock.addEventListener('click', function(){ buttonClicked('', 'Guzik kamień', '', ''); });
buttonPaper.addEventListener('click', function(){ buttonClicked('', '', 'Guzik papier', ''); });
buttonScissors.addEventListener('click', function(){ buttonClicked('', '', '', 'Guzik nożyce'); });