function playerLap(){
  if (lap%2 != 0){
    blackLap.style.width = "120px";
    blackLap.style.backgroundColor = "#FFC300";
    whiteLap.style.width = "110px";
    whiteLap.style.backgroundColor = "white";
    pawnBlack.innerHTML = blackPawn;
    pawnWhite.innerHTML = whitePawn;
  }
  else{
    blackLap.style.width = "110px";
    blackLap.style.backgroundColor = "white";
    whiteLap.style.width = "120px";
    whiteLap.style.backgroundColor = "#FFC300";
    pawnBlack.innerHTML = blackPawn;
    pawnWhite.innerHTML = whitePawn;
  }
}

function eliminatedWhite(id, i1){
  if(id[0] == 'C' && i1[0] == 'D'){
    return 'B';
  }
  else if (id[0] == 'C' && i1[0] == 'B'){
    return 'D';
  }
  else if (id[0] == 'B' && i1[0] == 'A'){
    return 'C';
  }
  else if (id[0] == 'B' && i1[0] == 'C'){
    return 'A';
  }
  else if (id[0] == 'D' && i1[0] == 'C'){
    return 'E';
  }
  else if(id[0] == 'D' && i1[0] == 'E'){
    return 'C';
  }
  else if (id[0] == 'E' && i1[0] == 'D'){
    return 'F';
  }
  else if (id[0] == 'E' && i1[0] == 'F'){
    return 'D';
  }
  else if (id[0] == 'F' && i1[0] == 'E'){
    return 'G';
  }
  else if (id[0] == 'F' && i1[0] == 'G'){
    return 'E';
  }
  else if (id[0] == 'G' && i1[0] == 'F'){
    return 'H';
  }
  else if (id[0] == 'G' && i1[0] == 'H'){
    return 'F';
  }
  else if (id[0] == 'H' && i1[0] == 'G'){
    return 'I';
  }
  else if (id[0] == 'H' && i1[0] == 'I'){
    return 'G';
  }
  else if (id[0] == 'I' && i1[0] == 'J'){
    return 'H';
  }
  else if (id[0] == 'I' && i1[0] == 'H'){
    return 'J';
  }
}

function eliminatedDameLetter(id, i1){
  if(id[0] == 'C' && i1[0] == 'D' ||id[0] == 'C' && i1[0] == 'E' ||id[0] == 'C' && i1[0] == 'F' ||id[0] == 'C' && i1[0] == 'G' ||id[0] == 'C' && i1[0] == 'H' ||id[0] == 'C' && i1[0] == 'I' ||id[0] == 'C' && i1[0] == 'J'){
    return 'B';
  }
  else if (id[0] == 'C' && i1[0] == 'B' ||id[0] == 'C' && i1[0]== 'A'){
    return 'D';
  }
  else if (id[0] == 'B' && i1[0] == 'A'){
    return 'C';
  }
  else if (id[0] == 'B' && i1[0] == 'C' ||id[0] == 'B' && i1[0] == 'D' ||id[0] == 'B' && i1[0] == 'E' ||id[0] == 'B' && i1[0] == 'F' ||id[0] == 'B' && i1[0] == 'G' ||id[0] == 'B' && i1[0] == 'H' ||id[0] == 'B' && i1[0] == 'I' ||id[0] == 'B' && i1[0] == 'J'){
    return 'A';
  }
  else if (id[0] == 'D' && i1[0] == 'C' ||id[0] == 'D' && i1[0] == 'B' ||id[0] == 'D' && i1[0] == 'A'){
    return 'E';
  }
  else if(id[0] == 'D' && i1[0] == 'E' ||id[0] == 'D' && i1[0] == 'F' ||id[0] == 'D' && i1[0] == 'G' ||id[0] == 'D' && i1[0] == 'H' ||id[0] == 'D' && i1[0] == 'I' ||id[0] == 'D' && i1[0] == 'J'){
    return 'C';
  }
  else if (id[0] == 'E' && i1[0] == 'D' ||id[0] == 'E' && i1[0] == 'C' ||id[0] == 'E' && i1[0] == 'B' ||id[0] == 'E' && i1[0] == 'A'){
    return 'F';
  }
  else if (id[0] == 'E' && i1[0] == 'F' ||id[0] == 'E' && i1[0] == 'G' ||id[0] == 'E' && i1[0] == 'H' ||id[0] == 'E' && i1[0] == 'I' ||id[0] == 'E' && i1[0] == 'J'){
    return 'D';
  }
  else if (id[0] == 'F' && i1[0] == 'E' ||id[0] == 'F' && i1[0] == 'D' ||id[0] == 'F' && i1[0] == 'C' ||id[0] == 'F' && i1[0] == 'B' ||id[0] == 'F' && i1[0] == 'A'){
    return 'G';
  }
  else if (id[0] == 'F' && i1[0] == 'G' ||id[0] == 'F' && i1[0] == 'H' ||id[0] == 'F' && i1[0] == 'I' ||id[0] == 'F' && i1[0] == 'J'){
    return 'E';
  }
  else if (id[0] == 'G' && i1[0] == 'F' ||id[0] == 'G' && i1[0] == 'E' ||id[0] == 'G' && i1[0] == 'D' ||id[0] == 'G' && i1[0] == 'C' ||id[0] == 'G' && i1[0] == 'B' ||id[0] == 'G' && i1[0] == 'A'){
    return 'H';
  }
  else if (id[0] == 'G' && i1[0] == 'H' ||id[0] == 'G' && i1[0] == 'I' ||id[0] == 'G' && i1[0] == 'J'){
    return 'F';
  }
  else if (id[0] == 'H' && i1[0] == 'G' ||id[0] == 'H' && i1[0] == 'F' ||id[0] == 'H' && i1[0] == 'E' ||id[0] == 'H' && i1[0] == 'D' ||id[0] == 'H' && i1[0] == 'C' ||id[0] == 'H' && i1[0] == 'B' ||id[0] == 'H' && i1[0] == 'A'){
    return 'I';
  }
  else if (id[0] == 'H' && i1[0] == 'I' ||id[0] == 'H' && i1[0] == 'J'){
    return 'G';
  }
  else if (id[0] == 'I' && i1[0] == 'J'){
    return 'H';
  }
  else if (id[0] == 'I' && i1[0] == 'H' ||id[0] == 'I' && i1[0] == 'G' ||id[0] == 'I' && i1[0] == 'F' ||id[0] == 'I' && i1[0] == 'E' ||id[0] == 'I' && i1[0] == 'D' ||id[0] == 'I' && i1[0] == 'C' ||id[0] == 'I' && i1[0] == 'B' ||id[0] == 'I' && i1[0] == 'A'){
    return 'J';
  }
}


function eliminatedBlack(id, i1){
  if (id[0] == 'B' && i1[0] == 'A'){
    return 'C';
  }
  if (id[0] == 'B' && i1[0] == 'C'){
    return 'A';
  }
  if (id[0] == 'C' && i1[0] == 'B'){
    return 'D';
  }
  if (id[0] == 'C' && i1[0] == 'D'){
    return 'B';
  }
  if (id[0] == 'D' && i1[0] == 'C'){
    return 'E';
  }
  if (id[0] == 'D' && i1[0] == "E"){
    return 'C';
  }
  if(id[0] == 'E' && i1[0] == 'D'){
    return 'F';
  }
  if (id[0] == 'E' && i1[0] == 'F'){
    return 'D';
  }
  if (id[0] == 'F' && i1[0] == 'E'){
    return 'G';
  }
  if (id[0] == 'F' && i1[0] == 'G'){
    return 'E';
  }
  if (id[0] == 'G' && i1[0] == 'H'){
    return 'F';
  }
  if (id[0] == 'G' && i1[0] == 'F'){
    return 'H';
  }
  if (id[0] == 'H' && i1[0] == 'I'){
    return 'G';
  }
  if (id[0] == 'H' && i1[0] == 'G'){
    return 'I';
  }
  if (id[0] == 'I' && i1[0] == 'J'){
    return 'H';
  }
  if (id[0] == 'I' && i1[0] == 'H'){
    return 'J';
  }

}

function idDame(selecCase, id){
  if (selecCase[1] < id[1] && selecCase[2] != 0){
    return parseInt(id[1]) + 1;
  }
  else {
    return parseInt(id[1]) - 1;
  }
}



function chooseCase(id, i1, i2, c1, c2){
  document.getElementById(id).addEventListener("click", function(){
    if (selecCase == i1 && document.getElementById(selected).parentNode.id == i1 || selecCase == i2 && document.getElementById(selected).parentNode.id == i2){
      if (id != c1 &&  id != c2){
        console.log('vous ne pouvez pas choisir cette case');
      }
      else{

        if(document.getElementById(id).childNodes.length <= 1){
          selecCase = id;
          document.getElementById(id).appendChild(document.getElementById(selected));

          if (document.getElementById(selected).parentNode.id == 'I10' || document.getElementById(selected).parentNode.id == 'G10' || document.getElementById(selected).parentNode.id == 'E10' ||
        document.getElementById(selected).parentNode.id == 'C10' || document.getElementById(selected).parentNode.id == 'A10'){
            document.getElementById(selected).className = 'pawn__White dame';
          }
          document.getElementById(selected).style.border = "2px solid black";
          selected = false;
          lap++;
          playerLap();
        }
        else if (document.getElementById(id).childNodes.length > 1 && document.getElementById(id).lastChild.className == 'pawn__Black' || document.getElementById(id).lastChild.className == 'pawn__Black dame') {
          let idEliminated = parseInt(id[1]) + 1;
          let letter = eliminatedWhite(id, selecCase);
          if (document.getElementById(letter + idEliminated).childNodes.length <= 1){
            document.getElementById(id).removeChild(document.getElementById(id).lastChild);
            blackPawn -= 1;
            if (blackPawn == 0){
              whoWin.innerHTML = 'FELICITATIONS ! VICTOIRE';
            }
            let letter = eliminatedWhite(id, selecCase);
            document.getElementById(letter + idEliminated).appendChild(document.getElementById(selected)); //on saute la case aprés avoir mangé le pion noir
            if (document.getElementById(selected).parentNode.id == 'I10' || document.getElementById(selected).parentNode.id == 'G10' || document.getElementById(selected).parentNode.id == 'E10' ||
          document.getElementById(selected).parentNode.id == 'C10' || document.getElementById(selected).parentNode.id == 'A10'){
              document.getElementById(selected).className = 'pawn__White dame';
            }
            document.getElementById(selected).style.border = "2px solid black";
            selected = false;
            lap++;
            playerLap();
          }
      }
    }
    }
    selecCase = id;

  });
}

function chooseCaseBlack(id, i1, i2, c1, c2){
  document.getElementById(id).addEventListener("click", function(){
    if (lap%2 != 0){
    if (selecCase == i1 && document.getElementById(selected).parentNode.id == i1 || selecCase == i2 && document.getElementById(selected).parentNode.id == i2){
      if (id != c1 &&  id != c2){
        console.log('vous ne pouvez pas choisir cette case');
      }
      else{

        if(document.getElementById(id).childNodes.length <= 1){
          selecCase = id;
          document.getElementById(id).appendChild(document.getElementById(selected));
          if (document.getElementById(selected).parentNode.id == 'B1' || document.getElementById(selected).parentNode.id == 'D1' || document.getElementById(selected).parentNode.id == 'F1' ||
        document.getElementById(selected).parentNode.id == 'H1' || document.getElementById(selected).parentNode.id == 'J1'){
          document.getElementById(selected).className = 'pawn__Black dame';
          }
          document.getElementById(selected).style.border = "2px solid black";
          selected = false;
          lap++;
          playerLap();
        }

        else if (document.getElementById(id).childNodes.length > 1 && document.getElementById(id).lastChild.className ==  'pawn__White' || document.getElementById(id).lastChild.className == 'pawn__White dame') {
          let idEliminated = parseInt(id[1]) - 1;
          let letter = eliminatedBlack(id, selecCase);
          if (document.getElementById(letter + idEliminated).childNodes.length <= 1){
            document.getElementById(id).removeChild(document.getElementById(id).lastChild);
            whitePawn -= 1;
            if (whitePawn == 0){
              whoWin.innerHTML = 'FELICITATIONS ! VICTOIRE';
            }
            let letter = eliminatedWhite(id, selecCase);
            document.getElementById(letter + idEliminated).appendChild(document.getElementById(selected)); //on saute la case aprés avoir mangé le pion noir
            if (document.getElementById(selected).parentNode.id == 'B1' || document.getElementById(selected).parentNode.id == 'D1' || document.getElementById(selected).parentNode.id == 'F1' ||
          document.getElementById(selected).parentNode.id == 'H1' || document.getElementById(selected).parentNode.id == 'J1'){
            document.getElementById(selected).className = 'pawn__Black dame';
            }
            document.getElementById(selected).style.border = "2px solid black";
            selected = false;
            lap++;
            playerLap();
          }
      }
    }
    }
    selecCase = id;
  }
  });
}


/// fonction de sélection des pions blancs
function selectedWhite(pawn) {
  document.getElementById(pawn).addEventListener("click", function(){
    if (lap%2 != 0){
    }
    else{
      selected = pawn;
    }
    if (selected){
      for(let i = 0 ; i < document.getElementsByClassName('pawn__White').length ; i++ ){
        document.getElementsByClassName('pawn__White')[i].style.border = "2px solid black";
      }
      document.getElementById(selected).style.border = '2px solid red';
    }
  });
}



/// fonction de sélection des pions noirs
function selectedBlack(pawn) {
  document.getElementById(pawn).addEventListener("click", function(){
    if (lap%2 != 0){
      selected = pawn;
      if (selected){
        for(let i = 0 ; i < document.getElementsByClassName('pawn__White').length ; i++ ){
          document.getElementsByClassName('pawn__Black')[i].style.border = "2px solid black";
        }
        document.getElementById(selected).style.border = '2px solid red';
      }
    }
  });
}

function chooseCaseWhiteDame(id, i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14, i15, i16, i17){
  document.getElementById(id).addEventListener("click", function(){
    if (document.getElementById(selected).className == 'pawn__White dame'){
      if (selecCase == i1 && document.getElementById(selected).parentNode.id == i1 || selecCase == i2 && document.getElementById(selected).parentNode.id == i2 || selecCase == i3 && document.getElementById(selected).parentNode.id == i3 ||
    selecCase == i4 && document.getElementById(selected).parentNode.id == i4 || selecCase == i5 && document.getElementById(selected).parentNode.id == i5 || selecCase == i6 && document.getElementById(selected).parentNode.id == i6 ||
  selecCase == i7 && document.getElementById(selected).parentNode.id == i7 || selecCase == i8 && document.getElementById(selected).parentNode.id == i8 || selecCase == i9 && document.getElementById(selected).parentNode.id == i9 ||
selecCase == i10 && document.getElementById(selected).parentNode.id == i10 || selecCase == i11 && document.getElementById(selected).parentNode.id == i11 || selecCase == i12 && document.getElementById(selected).parentNode.id == i12 ||
selecCase == i13 && document.getElementById(selected).parentNode.id == i13 || selecCase == i14 && document.getElementById(selected).parentNode.id == i14 || selecCase == i15 && document.getElementById(selected).parentNode.id == i15 ||
selecCase == i16 && document.getElementById(selected).parentNode.id == i16 || selecCase == i17 && document.getElementById(selected).parentNode.id == i17){
  if(document.getElementById(id).childNodes.length <= 1){
    document.getElementById(id).appendChild(document.getElementById(selected));
    document.getElementById(selected).style.border = "2px solid black";
    lap++;
    playerLap();
  }
  else if (document.getElementById(id).childNodes.length > 1 && document.getElementById(id).lastChild.className ==  'pawn__Black' || document.getElementById(id).lastChild.className == 'pawn__Black dame'){
    let idEliminated = idDame(selecCase, id);
    let letter = eliminatedDameLetter(id, selecCase);
    if (document.getElementById(letter + idEliminated).childNodes.length <= 1){
      document.getElementById(id).removeChild(document.getElementById(id).lastChild);
      blackPawn -= 1;
      if (blackPawn == 0){
        whoWin.innerHTML = 'FELICITATIONS ! VICTOIRE';
      }
      document.getElementById(letter + idEliminated).appendChild(document.getElementById(selected)); //on saute la case aprés avoir mangé le pion noir
      document.getElementById(selected).style.border = "2px solid black";
      selected = false;
      lap++;
      playerLap();
    }
  }
      }
    }
  });
}

function chooseCaseBlackDame(id, i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14, i15, i16, i17){
  document.getElementById(id).addEventListener("click", function(){
    if (document.getElementById(selected).className == 'pawn__Black dame'){
      if (selecCase == i1 && document.getElementById(selected).parentNode.id == i1 || selecCase == i2 && document.getElementById(selected).parentNode.id == i2 || selecCase == i3 && document.getElementById(selected).parentNode.id == i3 ||
    selecCase == i4 && document.getElementById(selected).parentNode.id == i4 || selecCase == i5 && document.getElementById(selected).parentNode.id == i5 || selecCase == i6 && document.getElementById(selected).parentNode.id == i6 ||
  selecCase == i7 && document.getElementById(selected).parentNode.id == i7 || selecCase == i8 && document.getElementById(selected).parentNode.id == i8 || selecCase == i9 && document.getElementById(selected).parentNode.id == i9 ||
selecCase == i10 && document.getElementById(selected).parentNode.id == i10 || selecCase == i11 && document.getElementById(selected).parentNode.id == i11 || selecCase == i12 && document.getElementById(selected).parentNode.id == i12 ||
selecCase == i13 && document.getElementById(selected).parentNode.id == i13 || selecCase == i14 && document.getElementById(selected).parentNode.id == i14 || selecCase == i15 && document.getElementById(selected).parentNode.id == i15 ||
selecCase == i16 && document.getElementById(selected).parentNode.id == i16 || selecCase == i17 && document.getElementById(selected).parentNode.id == i17){
  if(document.getElementById(id).childNodes.length <= 1){
    document.getElementById(id).appendChild(document.getElementById(selected));
    document.getElementById(selected).style.border = "2px solid black";
    lap++;
    playerLap();
  }
  else if (document.getElementById(id).childNodes.length > 1 && document.getElementById(id).lastChild.className ==  'pawn__White' || document.getElementById(id).lastChild.className == 'pawn__White dame'){
    let idEliminated = idDame(selecCase, id);
    let letter = eliminatedDameLetter(id, selecCase);
    if (document.getElementById(letter + idEliminated).childNodes.length <= 1){
      document.getElementById(id).removeChild(document.getElementById(id).lastChild);
      whitePawn -= 1;
      if (whitePawn == 0){
        whoWin.innerHTML = 'FELICITATIONS ! VICTOIRE';
      }
      document.getElementById(letter + idEliminated).appendChild(document.getElementById(selected)); //on saute la case aprés avoir mangé le pion noir
      document.getElementById(selected).style.border = "2px solid black";
      selected = false;
      lap++;
      playerLap();
    }
  }
      }
    }
  });
}
