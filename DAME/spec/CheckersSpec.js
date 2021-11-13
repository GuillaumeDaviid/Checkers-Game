let simulateClick = function(elem) {
  let event = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
    });
    let canceled = !elem.dispatchEvent(event);
};

describe("Start CheckersGame", function() {

  let box;

  function numberBox(){
    let boxWhite = document.getElementsByClassName('white case').length;
    let boxBlack = document.getElementsByClassName('black case').length;
    return box = boxBlack + boxWhite;
  }

    it("should properly calculate blackPawn start", function() {
      expect(blackPawn).toEqual(20);
    });

    it("should properly calculate whitePawn start", function () {
      expect(whitePawn).toEqual(20);
    });

    it("should properly calculate box", function () {
      numberBox();
      expect(box).toEqual(100);
    });

    it("should properly calculate lap", function () {
      expect(lap).toEqual(2);
    });

    it("should no pawns selected", function () {
      expect(selected).toBe(false);
    });

    it("should no box selected", function () {
      expect(selecCase).toBe(false);
    });

    it("should show player lap", function () {
      if (lap%2 != 0){
        expect(whoLap.textContent).toEqual("tour noir");
      }
      else{
        expect(whoLap.textContent).toEqual("tour blanc");
      }
    });

    it("should all black pawns on black box", function () {
      for (let i = 1; i<21; i++){
        expect(document.getElementById('PB'+ i).parentNode.className).toEqual('black case');
      }
    });

    it("should all white pawns on black box", function () {
      for (let i = 1; i<21; i++){
        expect(document.getElementById('PW'+ i).parentNode.className).toEqual('black case');
      }
    });
});

describe("Simulate move CheckersGame", function() {

let lapCount = 2;


async function nbrLap(){
  return lapCount ++;
}

  it("should box selected", function () {
    return nbrLap().then(function (result) {
      console.log(result);
      if (result == 2){
        expect(result).toEqual(2);
        simulateClick(document.getElementById('PW2'));
        simulateClick(document.getElementById('PW1'));
        expect(selected).toEqual('PW1');
        simulateClick(document.getElementById('C2'));
        expect(document.getElementById('C2').lastChild.id).toEqual('PW1');
      }
    });
  });

  it("black pawn selected", function () {
    return nbrLap().then(function (result) {
      console.log(result);
      if (result == 3){
        expect(result).toEqual(3);
        simulateClick(document.getElementById('PB1'));
        expect(selected).toEqual('PB1');
        simulateClick(document.getElementById('B9'));
        expect(selecCase).toEqual('B9');
      }
    });
  });

  it("not return previous box and eliminted pawn", function () {
    return nbrLap().then(function (result) {
      console.log(result);
      if (result == 4){
        expect(result).toEqual(4);
        simulateClick(document.getElementById('PW1'));
        simulateClick(document.getElementById('B1'));
        expect(document.getElementById('B1').lastChild.id).not.toEqual('PW1');

        document.getElementById('F5').appendChild(document.getElementById('PB5'));
        document.getElementById('G4').appendChild(document.getElementById('PW5'));
        simulateClick(document.getElementById('PW5'));
        simulateClick(document.getElementById('F5'));
        expect(document.getElementById('E6').lastChild.id).toEqual('PW5');
        expect(blackPawn).toEqual(19);
      }
    });
  });
});


describe("Simulate DAME CheckersGame", function() {

beforeEach(function() {
  lap = 5;
});

document.getElementById('A2').appendChild(document.getElementById('PB4'));
document.getElementById('C2').appendChild(document.getElementById('PW1'));

  it("transformed to 'DAME' ", function () {
    simulateClick(document.getElementById('PB4'));
    simulateClick(document.getElementById('B1'));
    expect(document.getElementById('PB4').className).toEqual('pawn__Black dame');
  });

  it("selected 'DAME' ", function () {
    simulateClick(document.getElementById('PB4'));
    expect(selected).toEqual('PB4');
  });
});


describe("Simulate eliminated DAME", function() {
  beforeEach(function() {
    lap = 5;
  });

  document.getElementById('B1').appendChild(document.getElementById('PB4'));
  document.getElementById('PB4').className = 'pawn__Black dame';
  document.getElementById('C2').appendChild(document.getElementById('PW1'));

  it("eliminated pawn with DAME", function () {
    simulateClick(document.getElementById('PB4'));
    simulateClick(document.getElementById('C2'));
    document.getElementById('C2').appendChild(document.getElementById('PW1'));
    expect(document.getElementById('D3').lastChild.id).toEqual('PB4');
  });

  it("", function () {
  });

  it("", function () {
  });

});
