let blackPawn = 20;
let whitePawn = 20;

let selected = false;
let selecCase = false;

let lap = 2;

let whoLap = document.getElementById('lap');
let whoWin = document.getElementById('win');
let blackLap = document.getElementById('blackInfo');
let whiteLap = document.getElementById('whiteInfo');
let pawnBlack = document.getElementById('black-pawn');
let pawnWhite = document.getElementById('white-pawn');

playerLap();


///initialisation des pions noirs
for (let i = 1; i < 21; i++){
  selectedBlack('PB' + i);
}

/// initialisation des pions blancs
for (let i = 1; i < 21; i++){
  selectedWhite('PW' + i);
}


/// initialisation des déplacement pour les pions blanc en mode Dames
chooseCaseWhiteDame('A10', 'B9', 'C8', 'D7', 'E6', 'F5', 'G4', 'H3', 'I2', 'J1', '', '', '', '', '', '', '', '');
chooseCaseWhiteDame('C10', 'B9', 'A8', 'D9', 'E8', 'F7', 'G6', 'H5', 'I4', 'J3', '', '', '', '', '', '', '', '');
chooseCaseWhiteDame('E10', 'F9', 'G8', 'H7', 'I6', 'J5', 'D9', 'C8', 'B7', 'A6', '', '', '', '', '', '', '', '');
chooseCaseWhiteDame('G10', 'F9', 'E8', 'D7', 'C6', 'B5', 'A4', 'H9', 'I8', 'J7', '', '', '', '', '', '', '', '');
chooseCaseWhiteDame('I10', 'J9', 'H9', 'G8', 'F7', 'E6', 'D5', 'C4', 'B3', 'A2', '', '', '', '', '', '', '', '');
chooseCaseWhiteDame('B9', 'A10', 'C10', 'C8', 'A8', 'D7', 'E6', 'F5', 'G4', 'H3', 'I2', 'J1', '', '', '', '', '', '');
chooseCaseWhiteDame('D9', 'C10', 'E10', 'C8' , 'B7', 'A6', 'E8', 'F7', 'G6', 'H5', 'I4', 'J3', '', '', '', '', '', '');
chooseCaseWhiteDame('F9', 'E10', 'G10', 'E8', 'D7', 'C6', 'B5', 'A4', 'G8', 'H7', 'I6', 'J5', '', '', '', '', '', '');
chooseCaseWhiteDame('H9', 'G10', 'I10', 'G8', 'F7', 'E6', 'D5', 'C4', 'B3', 'A2', 'I8', 'J7', '', '', '', '', '', '');
chooseCaseWhiteDame('J9', 'I10', 'I8', 'H7', 'G6', 'F5', 'E4', 'D3', 'C2', 'B1', '', '', '', '', '', '', '', '');
chooseCaseWhiteDame('C8', 'A10', 'B9', 'D9', 'E10', 'B7', 'A6', 'D7', 'E6', 'F5', 'G4', 'H3', 'I2', 'J1', '', '', '', '');
chooseCaseWhiteDame('A8', 'B9', 'C10', 'B7', 'C6', 'D5', 'E4', 'F3', 'G2', 'H1', '', '', '', '', '', '', '', '');
chooseCaseWhiteDame('E8', 'D9', 'C10', 'F9', 'G10', 'D7', 'C6', 'B5', 'A4', 'F7', 'G6', 'H5', 'I4', 'J3', '', '', '', '');
chooseCaseWhiteDame('G8', 'F9', 'E10', 'H9', 'I10', 'F7', 'E6', 'D5', 'C4', 'B3', 'A2', 'H7', 'I6', 'J5', '', '', '', '');
chooseCaseWhiteDame('I8', 'J9', 'H9', 'G10', 'J7', 'H7', 'G6', 'F5', 'E4', 'D3', 'C2', 'B1', '', '', '', '', '', '');
chooseCaseWhiteDame('B7', 'A8', 'C8', 'D9', 'E10', 'A6', 'C6', 'D5', 'E4', 'F3', 'G2', 'H1', '', '', '', '', '', '');
chooseCaseWhiteDame('D7', 'C8', 'B9', 'A10', 'E8', 'F9', 'G10', 'E6', 'F5', 'G4', 'H3', 'I2', 'J1', '', '', '', '', '');
chooseCaseWhiteDame('F7', 'C10', 'D9', 'E8', 'G8', 'H9', 'I10', 'G6', 'H5', 'I4', 'J3', 'E6', 'D5', 'C4', 'B3', 'A2', '', '');
chooseCaseWhiteDame('H7', 'I8', 'J9', 'G8', 'F9', 'E10', 'I6', 'J5', 'G6', 'F5', 'E4', 'D3', 'C2', 'B1', '', '', '', '');
chooseCaseWhiteDame('J7', 'I8', 'H9', 'G10', 'I6', 'H5', 'G4', 'F3', 'E2', 'D1', '', '', '', '', '', '', '', '');
chooseCaseWhiteDame('I6', 'J7', 'H7', 'G8', 'F9', 'E10', 'H5', 'G4', 'F3', 'E2', 'D1', '', '', '', '', '');
chooseCaseWhiteDame('G6', 'H7', 'I8', 'J9', 'F7', 'E8', 'D9', 'C10', 'H5', 'I4', 'J3', 'F5', 'E4', 'D3', 'C2', 'B1', '', '');
chooseCaseWhiteDame('E6', 'F7', 'G8', 'H9', 'I10', 'D7', 'C8', 'B9', 'A10', 'F5', 'G4', 'H3', 'I2', 'J1', '', '', '', '');
chooseCaseWhiteDame('C6', 'B7', 'A8', 'D7', 'E8', 'F9', 'G10', 'B5', 'A4', 'D5', 'E4', 'F3', 'G2', 'H1', '', '', '', '');
chooseCaseWhiteDame('A6', 'B7', 'C8', 'D9', 'E10', 'B5', 'C4', 'D3', 'E2', 'F1', '', '', '', '', '', '', '', '');
chooseCaseWhiteDame('B5', 'A6', 'A4', 'C4', 'D3', 'E2', 'F1', 'C6', 'D7', 'E8', 'F9', 'G10', '', '', '', '', '', '');
chooseCaseWhiteDame('D5', 'C4', 'B3', 'A2', 'C6', 'B7', 'A8', 'E6', 'F7', 'G8', 'H9', 'I10', 'E4', 'F3', 'G2', 'H1', '', '');
chooseCaseWhiteDame('F5', 'G6', 'H7', 'I8', 'J9', 'E6', 'D7', 'C8', 'B9', 'A10', 'E4', 'D3', 'C2', 'B1', 'G4', 'H3', 'I2', 'J1');
chooseCaseWhiteDame('H5', 'I6', 'J7', 'I4', 'J3', 'G6', 'F7', 'E8', 'D9', 'C10', 'G4', 'F3', 'E2', 'D1', '', '', '', '');
chooseCaseWhiteDame('I4', 'J3', 'J5', 'H3', 'G2', 'F1', 'H5', 'G6', 'F7', 'E8', 'D9', 'C10', '', '', '', '', '', '');
chooseCaseWhiteDame('G4', 'H3', 'I2', 'J1', 'F3', 'E2', 'D1', 'H5', 'I6', 'J7', 'F5', 'E6', 'D7', 'C8', 'B9', 'A10', '', '');
chooseCaseWhiteDame('E4', 'D3', 'C2', 'B1', 'F3', 'G2', 'H1', 'F5', 'G6', 'H7', 'I8', 'J9', 'D5', 'C6', 'B7', 'A8', '', '');
chooseCaseWhiteDame('C4', 'B3', 'A2', 'D3', 'E2', 'F1', 'D5', 'E6', 'F7', 'G8', 'H9', 'I10', 'B5', 'A6', '', '', '', '');
chooseCaseWhiteDame('A4', 'B3', 'C2', 'B1', 'B5', 'C6', 'D7', 'E8', 'F9', 'G10', '', '', '', '', '', '', '', '');
chooseCaseWhiteDame('B3', 'A4', 'A2', 'C2', 'D1', 'C4', 'D5', 'E6', 'F7', 'G8', 'H9', 'I10', '', '', '', '', '', '');
chooseCaseWhiteDame('D3', 'C2', 'B1', 'E2', 'F1', 'C4', 'B5', 'A6', 'E4', 'F5', 'G6', 'H7', 'I8', 'J9', '', '', '', '');
chooseCaseWhiteDame('F3', 'G2', 'H1', 'E2', 'D1', 'G4', 'H5', 'I6', 'J7', 'E4', 'D5', 'C6', 'B7', 'A8', '', '', '', '');
chooseCaseWhiteDame('H3', 'I2', 'J1', 'G2', 'F1', 'I4', 'J5', 'G4', 'F5', 'E6', 'D7', 'C8', 'B9', 'A10', '', '', '', '');
chooseCaseWhiteDame('J3', 'I2', 'H1', 'I4', 'H5', 'G6', 'F7', 'E8', 'D9', 'C10', '', '', '', '', '', '', '', '');
chooseCaseWhiteDame('I2', 'J3', 'J1', 'H1', 'H3', 'G4', 'F5', 'E6', 'D7', 'C8', 'B9', 'A10', '', '', '', '', '', '');
chooseCaseWhiteDame('G2', 'H1', 'F1', 'H3', 'I4', 'J5', 'F3', 'E4', 'D5', 'C6', 'B7', 'A8', '', '', '', '', '', '');
chooseCaseWhiteDame('E2', 'F1', 'D1', 'F3', 'G4', 'H5', 'I6', 'J7', 'D3', 'C4', 'B5', 'A6', '', '', '', '', '', '');
chooseCaseWhiteDame('C2', 'B1', 'D1', 'B3', 'A4', 'D3', 'E4', 'F5', 'G6', 'H7', 'I8', 'J9', '', '', '', '', '', '');
chooseCaseWhiteDame('A2', 'B1', 'B3', 'C4', 'D5', 'E6', 'F7', 'G8', 'H9', 'I10', '', '', '', '', '', '', '', '');
chooseCaseWhiteDame('B1', 'A2', 'C2', 'D3', 'E4', 'F5', 'G6', 'H7', 'I8', 'J9', '', '', '', '', '', '', '', '');
chooseCaseWhiteDame('D1', 'C2', 'B3', 'A4', 'E2', 'F3', 'G4', 'H5', 'I6', 'J7', '', '', '', '', '', '', '', '');
chooseCaseWhiteDame('F1', 'E2', 'D3', 'C4', 'B5', 'A6', 'G2', 'H3', 'I4', 'J5', '', '', '', '', '', '', '', '');
chooseCaseWhiteDame('H1', 'I2', 'J3', 'G2', 'F3', 'E4', 'D5', 'C6', 'B7', 'A8', '', '', '', '', '', '', '', '');
chooseCaseWhiteDame('J1', 'I2', 'H3', 'G4', 'F5', 'E6', 'D7', 'C8', 'B9', 'A10', '', '', '', '', '', '', '', '');


/// initialisation des déplacement pour les pions noirs en mode Dames
chooseCaseBlackDame('A10', 'B9', 'C8', 'D7', 'E6', 'F5', 'G4', 'H3', 'I2', 'J1', '', '', '', '', '', '', '', '');
chooseCaseBlackDame('C10', 'B9', 'A8', 'D9', 'E8', 'F7', 'G6', 'H5', 'I4', 'J3', '', '', '', '', '', '', '', '');
chooseCaseBlackDame('E10', 'F9', 'G8', 'H7', 'I6', 'J5', 'D9', 'C8', 'B7', 'A6', '', '', '', '', '', '', '', '');
chooseCaseBlackDame('G10', 'F9', 'E8', 'D7', 'C6', 'B5', 'A4', 'H9', 'I8', 'J7', '', '', '', '', '', '', '', '');
chooseCaseBlackDame('I10', 'J9', 'H9', 'G8', 'F7', 'E6', 'D5', 'C4', 'B3', 'A2', '', '', '', '', '', '', '', '');
chooseCaseBlackDame('B9', 'A10', 'C10', 'C8', 'A8', 'D7', 'E6', 'F5', 'G4', 'H3', 'I2', 'J1', '', '', '', '', '', '');
chooseCaseBlackDame('D9', 'C10', 'E10', 'C8' , 'B7', 'A6', 'E8', 'F7', 'G6', 'H5', 'I4', 'J3', '', '', '', '', '', '');
chooseCaseBlackDame('F9', 'E10', 'G10', 'E8', 'D7', 'C6', 'B5', 'A4', 'G8', 'H7', 'I6', 'J5', '', '', '', '', '', '');
chooseCaseBlackDame('H9', 'G10', 'I10', 'G8', 'F7', 'E6', 'D5', 'C4', 'B3', 'A2', 'I8', 'J7', '', '', '', '', '', '');
chooseCaseBlackDame('J9', 'I10', 'I8', 'H7', 'G6', 'F5', 'E4', 'D3', 'C2', 'B1', '', '', '', '', '', '', '', '');
chooseCaseBlackDame('C8', 'A10', 'B9', 'D9', 'E10', 'B7', 'A6', 'D7', 'E6', 'F5', 'G4', 'H3', 'I2', 'J1', '', '', '', '');
chooseCaseBlackDame('A8', 'B9', 'C10', 'B7', 'C6', 'D5', 'E4', 'F3', 'G2', 'H1', '', '', '', '', '', '', '', '');
chooseCaseBlackDame('E8', 'D9', 'C10', 'F9', 'G10', 'D7', 'C6', 'B5', 'A4', 'F7', 'G6', 'H5', 'I4', 'J3', '', '', '', '');
chooseCaseBlackDame('G8', 'F9', 'E10', 'H9', 'I10', 'F7', 'E6', 'D5', 'C4', 'B3', 'A2', 'H7', 'I6', 'J5', '', '', '', '');
chooseCaseBlackDame('I8', 'J9', 'H9', 'G10', 'J7', 'H7', 'G6', 'F5', 'E4', 'D3', 'C2', 'B1', '', '', '', '', '', '');
chooseCaseBlackDame('B7', 'A8', 'C8', 'D9', 'E10', 'A6', 'C6', 'D5', 'E4', 'F3', 'G2', 'H1', '', '', '', '', '', '');
chooseCaseBlackDame('D7', 'C8', 'B9', 'A10', 'E8', 'F9', 'G10', 'E6', 'F5', 'G4', 'H3', 'I2', 'J1', '', '', '', '', '');
chooseCaseBlackDame('F7', 'C10', 'D9', 'E8', 'G8', 'H9', 'I10', 'G6', 'H5', 'I4', 'J3', 'E6', 'D5', 'C4', 'B3', 'A2', '', '');
chooseCaseBlackDame('H7', 'I8', 'J9', 'G8', 'F9', 'E10', 'I6', 'J5', 'G6', 'F5', 'E4', 'D3', 'C2', 'B1', '', '', '', '');
chooseCaseBlackDame('J7', 'I8', 'H9', 'G10', 'I6', 'H5', 'G4', 'F3', 'E2', 'D1', '', '', '', '', '', '', '', '');
chooseCaseBlackDame('I6', 'J7', 'H7', 'G8', 'F9', 'E10', 'H5', 'G4', 'F3', 'E2', 'D1', '', '', '', '', '');
chooseCaseBlackDame('G6', 'H7', 'I8', 'J9', 'F7', 'E8', 'D9', 'C10', 'H5', 'I4', 'J3', 'F5', 'E4', 'D3', 'C2', 'B1', '', '');
chooseCaseBlackDame('E6', 'F7', 'G8', 'H9', 'I10', 'D7', 'C8', 'B9', 'A10', 'F5', 'G4', 'H3', 'I2', 'J1', '', '', '', '');
chooseCaseBlackDame('C6', 'B7', 'A8', 'D7', 'E8', 'F9', 'G10', 'B5', 'A4', 'D5', 'E4', 'F3', 'G2', 'H1', '', '', '', '');
chooseCaseBlackDame('A6', 'B7', 'C8', 'D9', 'E10', 'B5', 'C4', 'D3', 'E2', 'F1', '', '', '', '', '', '', '', '');
chooseCaseBlackDame('B5', 'A6', 'A4', 'C4', 'D3', 'E2', 'F1', 'C6', 'D7', 'E8', 'F9', 'G10', '', '', '', '', '', '');
chooseCaseBlackDame('D5', 'C4', 'B3', 'A2', 'C6', 'B7', 'A8', 'E6', 'F7', 'G8', 'H9', 'I10', 'E4', 'F3', 'G2', 'H1', '', '');
chooseCaseBlackDame('F5', 'G6', 'H7', 'I8', 'J9', 'E6', 'D7', 'C8', 'B9', 'A10', 'E4', 'D3', 'C2', 'B1', 'G4', 'H3', 'I2', 'J1');
chooseCaseBlackDame('H5', 'I6', 'J7', 'I4', 'J3', 'G6', 'F7', 'E8', 'D9', 'C10', 'G4', 'F3', 'E2', 'D1', '', '', '', '');
chooseCaseBlackDame('I4', 'J3', 'J5', 'H3', 'G2', 'F1', 'H5', 'G6', 'F7', 'E8', 'D9', 'C10', '', '', '', '', '', '');
chooseCaseBlackDame('G4', 'H3', 'I2', 'J1', 'F3', 'E2', 'D1', 'H5', 'I6', 'J7', 'F5', 'E6', 'D7', 'C8', 'B9', 'A10', '', '');
chooseCaseBlackDame('E4', 'D3', 'C2', 'B1', 'F3', 'G2', 'H1', 'F5', 'G6', 'H7', 'I8', 'J9', 'D5', 'C6', 'B7', 'A8', '', '');
chooseCaseBlackDame('C4', 'B3', 'A2', 'D3', 'E2', 'F1', 'D5', 'E6', 'F7', 'G8', 'H9', 'I10', 'B5', 'A6', '', '', '', '');
chooseCaseBlackDame('A4', 'B3', 'C2', 'B1', 'B5', 'C6', 'D7', 'E8', 'F9', 'G10', '', '', '', '', '', '', '', '');
chooseCaseBlackDame('B3', 'A4', 'A2', 'C2', 'D1', 'C4', 'D5', 'E6', 'F7', 'G8', 'H9', 'I10', '', '', '', '', '', '');
chooseCaseBlackDame('D3', 'C2', 'B1', 'E2', 'F1', 'C4', 'B5', 'A6', 'E4', 'F5', 'G6', 'H7', 'I8', 'J9', '', '', '', '');
chooseCaseBlackDame('F3', 'G2', 'H1', 'E2', 'D1', 'G4', 'H5', 'I6', 'J7', 'E4', 'D5', 'C6', 'B7', 'A8', '', '', '', '');
chooseCaseBlackDame('H3', 'I2', 'J1', 'G2', 'F1', 'I4', 'J5', 'G4', 'F5', 'E6', 'D7', 'C8', 'B9', 'A10', '', '', '', '');
chooseCaseBlackDame('J3', 'I2', 'H1', 'I4', 'H5', 'G6', 'F7', 'E8', 'D9', 'C10', '', '', '', '', '', '', '', '');
chooseCaseBlackDame('I2', 'J3', 'J1', 'H1', 'H3', 'G4', 'F5', 'E6', 'D7', 'C8', 'B9', 'A10', '', '', '', '', '', '');
chooseCaseBlackDame('G2', 'H1', 'F1', 'H3', 'I4', 'J5', 'F3', 'E4', 'D5', 'C6', 'B7', 'A8', '', '', '', '', '', '');
chooseCaseBlackDame('E2', 'F1', 'D1', 'F3', 'G4', 'H5', 'I6', 'J7', 'D3', 'C4', 'B5', 'A6', '', '', '', '', '', '');
chooseCaseBlackDame('C2', 'B1', 'D1', 'B3', 'A4', 'D3', 'E4', 'F5', 'G6', 'H7', 'I8', 'J9', '', '', '', '', '', '');
chooseCaseBlackDame('A2', 'B1', 'B3', 'C4', 'D5', 'E6', 'F7', 'G8', 'H9', 'I10', '', '', '', '', '', '', '', '');
chooseCaseBlackDame('B1', 'A2', 'C2', 'D3', 'E4', 'F5', 'G6', 'H7', 'I8', 'J9', '', '', '', '', '', '', '', '');
chooseCaseBlackDame('D1', 'C2', 'B3', 'A4', 'E2', 'F3', 'G4', 'H5', 'I6', 'J7', '', '', '', '', '', '', '', '');
chooseCaseBlackDame('F1', 'E2', 'D3', 'C4', 'B5', 'A6', 'G2', 'H3', 'I4', 'J5', '', '', '', '', '', '', '', '');
chooseCaseBlackDame('H1', 'I2', 'J3', 'G2', 'F3', 'E4', 'D5', 'C6', 'B7', 'A8', '', '', '', '', '', '', '', '');
chooseCaseBlackDame('J1', 'I2', 'H3', 'G4', 'F5', 'E6', 'D7', 'C8', 'B9', 'A10', '', '', '', '', '', '', '', '');


/// initialisation de toutes les cases jouables et des chemins de déplacement pour les pion noirs
  chooseCaseBlack('B9', 'A10', 'C10', 'B9', '');
  chooseCaseBlack('B7', 'A8', 'C8', 'B7', '');
  chooseCaseBlack('B5', 'A6', 'C6', 'B5', '');
  chooseCaseBlack('B3', 'A4', 'C4', 'B3', '');
  chooseCaseBlack('B1', 'A2', 'C2', 'B1', '');
  chooseCaseBlack('A8', 'B9', '', 'A8', '');
  chooseCaseBlack('A6', 'B7', '', 'A6', '');
  chooseCaseBlack('A4', 'B5', '', 'A4', '');
  chooseCaseBlack('A2', 'B3', '', 'A2', '');
  chooseCaseBlack('C8', 'B9', 'D9', 'C8', '');
  chooseCaseBlack('C6', 'B7', 'D7', 'C6', '');
  chooseCaseBlack('C4', 'B5', 'D5', 'C4', '');
  chooseCaseBlack('C2', 'B3', 'D3', 'C2', '');
  chooseCaseBlack('D9', 'C10', 'E10', 'D9', '');
  chooseCaseBlack('D7', 'C8', 'E8', 'D7', '');
  chooseCaseBlack('D5', 'C6', 'E6', 'D5', '');
  chooseCaseBlack('D3', 'C4', 'E4', 'D3', '');
  chooseCaseBlack('D1', 'C2', 'E2', 'D1', '');
  chooseCaseBlack('E8', 'D9', 'F9', 'E8', '');
  chooseCaseBlack('E6', 'D7', 'F7', 'E6', '');
  chooseCaseBlack('E4', 'D5', 'F5', 'E4', '');
  chooseCaseBlack('E2', 'D3', 'F3', 'E2', '');
  chooseCaseBlack('F9', 'E10', 'G10', 'F9', '');
  chooseCaseBlack('F7', 'E8', 'G8', 'F7', '');
  chooseCaseBlack('F5', 'E6', 'G6', 'F5', '');
  chooseCaseBlack('F3', 'E4', 'G4', 'F3', '');
  chooseCaseBlack('F1', 'E2', 'G2', 'F1', '');
  chooseCaseBlack('G8', 'F9', 'H9', 'G8', '');
  chooseCaseBlack('G6', 'F7', 'H7', 'G6', '');
  chooseCaseBlack('G4', 'F5', 'H5', 'G4', '');
  chooseCaseBlack('G2', 'F3', 'H3', 'G2', '');
  chooseCaseBlack('H9', 'G10', 'I10', 'H9', '');
  chooseCaseBlack('H7', 'G8', 'I8', 'H7', '');
  chooseCaseBlack('H5', 'G6', 'I6', 'H5', '');
  chooseCaseBlack('H3', 'G4', 'I4', 'H3', '');
  chooseCaseBlack('H1', 'G2', 'I2', 'H1', '');
  chooseCaseBlack('I8', 'H9', 'J9', 'I8', '');
  chooseCaseBlack('I6', 'H7', 'J7', 'I6', '');
  chooseCaseBlack('I4', 'H5', 'J5', 'I4', '');
  chooseCaseBlack('I2', 'H3', 'J3', 'I2', '');
  chooseCaseBlack('J9', '', 'I10', 'J9', '');
  chooseCaseBlack('J7', '', 'I8', 'J7', '');
  chooseCaseBlack('J5', '', 'I6', 'J5', '');
  chooseCaseBlack('J3', '', 'I4', 'J3', '');
  chooseCaseBlack('J1', '', 'I2', 'J1', '');






/// initialisation de toutes les cases jouables et des chemins de déplacement pour les pion blancs

chooseCase('A2', 'B1', '', 'A2', 'C2');
chooseCase('A4', 'B3', '', 'A4', 'C4');
chooseCase('A6', 'B5', '', 'A6', 'C6');
chooseCase('A8', 'B7', '', 'A8', 'C8');
chooseCase('A10', 'B9', '', 'A10', '');
chooseCase('B1');
chooseCase('B3', 'A2', 'C2', 'B3', '');
chooseCase('B5', 'A4', 'C4', 'B5', '');
chooseCase('B7', 'A6', 'C6', 'B7', '');
chooseCase('B9', 'A8', 'C8', 'B9', '');
chooseCase('C2', 'B1', 'D1', 'C2', '');
chooseCase('C4', 'B3', 'D3', 'C4', '');
chooseCase('C6', 'B5', 'D5', 'C6', '');
chooseCase('C8', 'B7', 'D7', 'C8', '');
chooseCase('C10', 'B9', 'D9', 'C10', '');
chooseCase('D1');
chooseCase('D3', 'C2', 'E2', 'D3', '');
chooseCase('D5', 'C4', 'E4', 'D5', '');
chooseCase('D7', 'C6', 'E6', 'D7', '');
chooseCase('D9', 'C8', 'E8', 'D9', '');
chooseCase('E2', 'D1', 'F1', 'E2', '');
chooseCase('E4', 'D3', 'F3', 'E4', '');
chooseCase('E6', 'D5', 'F5', 'E6', '');
chooseCase('E8', 'D7', 'F7', 'E8', '');
chooseCase('E10', 'D9', 'F9', 'E10', '');
chooseCase('F1');
chooseCase('F3', 'E2', 'G2', 'F3', '');
chooseCase('F5', 'E4', 'G4', 'F5', '');
chooseCase('F7', 'E6', 'G6', 'F7', '');
chooseCase('F9', 'E8', 'G8', 'F9', '');
chooseCase('G2', 'F1', 'H1', 'G2', '');
chooseCase('G4', 'F3', 'H3', 'G4', '');
chooseCase('G6', 'F5', 'H5', 'G6', '');
chooseCase('G8', 'F7', 'H7', 'G8', '');
chooseCase('G10', 'F9', 'H9', 'G10', '');
chooseCase('H1');
chooseCase('H3', 'G2', 'I2', 'H3', '');
chooseCase('H5', 'G4', 'I4', 'H5', '');
chooseCase('H7', 'G6', 'I6', 'H7', '');
chooseCase('H9', 'G8', 'I8', 'H9', '');
chooseCase('I2', 'H1', 'J1', 'I2', '');
chooseCase('I4', 'H3', 'J3', 'I4', '');
chooseCase('I6', 'H5', 'J5', 'I6', '');
chooseCase('I8', 'H7', 'J7', 'I8', '');
chooseCase('I10', 'H9', 'J9', 'I10', '');
chooseCase('J1');
chooseCase('J3', 'I2', '', 'J3', '');
chooseCase('J5', 'I4', '', 'J5', '');
chooseCase('J7', 'I6', '', 'J7', '');
chooseCase('J9', 'I8', '', 'J9', '');
