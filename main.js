// A basic tic-tac-toe game!
(function () {

	var width = 10;
	var height = width;
	var numSides = 3;
	var numSquares = numSides * numSides;

	console.log('hello world');

	var a = document.createElement('h2');

	a.innerText = 'What is up';

	document.body.append(a);


  var gridElement = document.getElementById('grid');
  var positionsObj = {};
  var team = 'blue';
  var victory = false;

  // Click handler - select a square
  var fnSelectedSquare = function (i, j) {
    return function () {
      console.log('hello! ' + 'grid-square ' + i + '-' + j);
      var elSquare = document.getElementsByClassName('grid-square-' + i + '-' + j)[0];
      elClasses = elSquare.classList;
      if (elClasses.contains('selected-' + team) === false && victory === false) {
        elSquare.className += ' selected-' + team;
        positionsObj['pos-' + i + '-' + j] = team;

        // Check if winning move, 3 in a row!
        fnCheckWin(team);
        team = (team.toLowerCase() === 'blue') ? 'green' : 'blue';
        console.log(team)
      }
    }
  }

  var fnCheckWin = function (team) {
    console.log('victory?');
    selectedElArray = document.getElementsByClassName('selected-' + team);

    // If there are more then or equal to 3 positions played by a team
    if (selectedElArray.length >= 3) {
      console.log('3 or more placed');
      console.log(positionsObj);
      
      // Check rows
      fnCheckLine('0-0', '0-1', '0-2', team);
      fnCheckLine('1-0', '1-1', '2-2', team);
      fnCheckLine('2-0', '2-1', '2-2', team);

      // Check columns
      fnCheckLine('0-0', '1-0', '2-0', team);
      fnCheckLine('0-1', '1-1', '2-1', team);
      fnCheckLine('0-2', '1-2', '2-2', team);

      // Check diagonals
      fnCheckLine('0-0', '1-1', '2-2', team);
      fnCheckLine('0-2', '1-1', '2-0', team);
      
    }
  }

  var fnCheckLine = function (pos1, pos2, pos3, team) {
    console.log('checking lines', team)

    if (positionsObj['pos-' + pos1] === team && positionsObj['pos-' + pos2] === team && positionsObj['pos-' + pos3] === team) {
      console.log('VICTORY!!!', pos1, pos2, pos3, team);
      victory = true;
      var winnerEl = document.getElementById('winnerId');
      winnerEl.innerText = 'VICTORY TEAM ' + team.toUpperCase();
      return alert('VICTORY TEAM ' + team.toUpperCase());
    }
  }


  // Initialise grid
  for (var i = 0; i < numSides; i++) {

		var row = document.createElement('div');
		row.setAttribute('class', 'grid-row ' + 'grid-row-' + i);

    for (var j = 0; j < numSides; j++) {
      var square = document.createElement('div');
      square.setAttribute('class', 'grid-square ' + 'grid-square-' + i + '-' + j);
      square.onclick = fnSelectedSquare(i, j);

      square.innerText = 'X';
      
      row.appendChild(square);

      positionsObj['pos-' + i + '-' + j] = false;

    }

    gridElement.appendChild(row);

	}

})();