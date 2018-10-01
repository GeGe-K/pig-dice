//Business Logic

	//players
	var player1 = ""
	var player2 =""

	//dice logic
	var rollDice = function(){
	return Math.floor(6*Math.random())+1
}

	//player object
	function Player(turn) {
  this.rollDice = 0;
  this.sessionScore = 0;
  this.totalScore = 0;
  this.turn = turn;
  this.playerName;
	}

	//1 dice roll
	Player.prototype.rollone = function() {
  if (this.rollDice === 1) {
    this.sessionScore = 0;
    alert("Sorry " + this.playerName + ", you rolled a 1! Your turn is over!")

  	} else {
    this.sessionScore += this.rollDice;
  	}
	}

	// hold buttons
	Player.prototype.hold = function() {
  this.totalScore += this.sessionScore;
  this.sessionScore = 0;
  alert(this.playerName + ", your turn is over, pass the dice!");
		}
	// check 100 dice roll
	Player.prototype.winnerCheck = function() {
  if (this.totalcore >= 100) {
    alert(this.playerName + " You are the winner!");
  	}
	}
	//clear player's values
	var clearValues = function() {
		$("#player1").val("");
		$("#player2").val("");
	}

	//User Interface
	$(document).ready(function(){
  $("button#gameOn").click(function(event){
    player1 = new Player();
    player2 = new Player();

    var p1name = $(".p1name").val();
    $("#p1name").text(p1name);

    var p2name = $(".p2name").val();
    $("#p2name").text(p2name);

    player1.playerName = p1name;
    player2.playerName = p2name;
  });

  //New Game Button
  $("button#new-game").click(function(event){
    clearValues();
    player1.newGame();
    player2.newGame();
    $("#round-score-1").empty();
    $("#total-score-1").empty();
    $("#die-roll-1").empty();
    $("#round-score-2").empty();
    $("#total-score-2").empty();
    $("#die-roll-2").empty();
  });

  //Player 1 Dice Roll
  $("button#roll-die-button-1").click(function(event){
    player1.roll = rollDice();
    $("#die-roll-1").text(player1.rollDice);
    player1.rollone();
    $("#round-score-1").text(player1.sessionScore);
  });

  //Player 2 Dice Roll
  $("button#roll-die-button-2").click(function(event){
    player2.roll = rollDice();
    $("#die-roll-2").text(player2.rollDice);
    player2.rollone();
    $("#round-score-2").text(player2.sessionScore);
  });

  //Player 1 Hold
  $("button#hold-button-1").click(function(event){
    player1.hold();
    $("#total-score-1").text(player1.totalScore);
    $("#round-total-1").empty();
    $("#die-roll-1").empty();
    player1.winnerCheck();
  });

  $("button#hold-button-2").click(function(event){
    player2.hold();
    $("#total-score-2").text(player2.totalscore);
    $("#round-score-2").empty();
    $("#die-roll-2").empty();
    player2.winnerCheck();
  });

})
