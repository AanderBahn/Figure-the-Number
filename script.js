'use strict';



//Get Secret number for game. Set limit to 47.
var sNumber = Math.trunc(Math.random() * 47) + 1;
//var sNumber = Math.trunc(Math.random() * 3) + 1;

//Set Score counter
let score = 20;

//Set intial High Score
var higherScore = 0;


//FUNction for displaying message text
const displayMessage = function (message) {
	document.querySelector('.message').textContent = message;
}

//FUNction to change the number display size
const valueSize = function (size) {
	document.querySelector('.number').style.width = size;
}

const changeBGColor = function (color) {
	document.querySelector('body').style.backgroundColor = color;
}

//TESTING display SNumber. Delete after done testing.
//document.querySelector('.number').textContent = sNumber;



//Look through DOM for class Check. Add listner Clcik
document.querySelector('.check').addEventListener('click', function(){
	//once clicked look through the DOM and grab class Guess's value, turn into number from string
	const guessimate = Number(document.querySelector('.guess').value);
	//log the input and describe type of
	console.log(guessimate, typeof guessimate);

	//for situion 0: no input
	//if no value for input
	if (!guessimate) {
		displayMessage("No Number selected FOOL!");


	  //if the input is the exace same
	} else if (guessimate === sNumber) {
		displayMessage("Congrads! You got it!");
		//Change Background color
		changeBGColor('#60b347');
		//Change the width of number display
		valueSize('30rem')

		//Check to see if the current score is higher then last highscore
		if (score > higherScore) {
			higherScore = score;
			document.querySelector('.highscore').textContent = higherScore;
		}

	  //if guess different then answer
	} else if (guessimate !== sNumber) {
		if (score > 0) {
		//send the message of too high and lower score
		displayMessage(guessimate > sNumber ? "Too High" : "Too Low");
		score--;
		document.querySelector('.score').textContent = score;
	    } else {
	    	//If score reaches 0
	    	displayMessage("You Loose!");
	    }//en
	} 

});


//Set up the Play Again Button
document.querySelector('.again').addEventListener('click', function(){
	//Reset the Score
    document.querySelector('.score').textContent = "20";
    score = 20;
    //Reset Secret Number
    sNumber = Math.trunc(Math.random() * 47) + 1;
    document.querySelector('.number').textContent = sNumber;
    //Reset the message
    //document.querySelector('.message').textContent = "Start guessing...";
    displayMessage("Start guessing...");
    //Reset the input
    document.querySelector('.guess').value = "";
	//Reset Background color
    changeBGColor('#222');
    //Reset Width of display
    valueSize('15rem')
});



/*


document.querySelector('.again').addEventListener('click', function(){
	//Reset Background color
    document.querySelector('body').style.backgroundColor = '#222';
    //Reset the message
    document.querySelector('.message').textContent = "Start guessing...";
    //Reset the Score
    document.querySelector('.score').textContent = "20";
    score = 20;
    //Reset the input
    document.querySelector('.guess').value = "";
    //Reset Width of display
    document.querySelector('.number').style.width = '15rem';
    //Reset Secret Number
    sNumber = Math.trunc(Math.random() * 47) + 1;
    document.querySelector('.number').textContent = sNumber;


});


*/