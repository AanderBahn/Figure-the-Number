'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'The Right Damn Number';
document.querySelector('.score').textContent = 'We finally going to score';
document.querySelector('.highscore').textContent = 'High Roller!';
document.querySelector('.guess').value = 47;
console.log(document.querySelector('.guess').value);*/

//Get Secret number for game. Set limit to 47.
const sNumber = Math.trunc(Math.random() * 47) + 1;

//Set Score counter
let score = 23;

//TESTING display SNumber. Delete after done testing.
document.querySelector('.number').textContent = sNumber;


//Look through DOM for class Check. Add listner Clcik
document.querySelector('.check').addEventListener('click', function(){
	//once clicked look through the DOM and grab class Guess's value, turn into number from string
	const guessimate = Number(document.querySelector('.guess').value);
	//log the input and describe type of
	console.log(guessimate, typeof guessimate);

	//for situion 0: no input
	//if no value for input
	if (!guessimate) {
		//look through the DOM for Message. Change content to new message

		document.querySelector('.message').textContent = "No Number selected FOOL!";

		//if the input is the exace same
	} else if (guessimate === sNumber) {
		document.querySelector('.message').textContent = "Congrads! You got it!";

		//if the input is larger 
	} else if (guessimate > sNumber) {

		if (score > 0) {
		//send the message of too high and lower score
		document.querySelector('.message').textContent = "Too High";
		score--;
		document.querySelector('.score').textContent = score;
	    } else {
	    	document.querySelector('.message').textContent = "You Loose!"
	    }//end if inside of larger guess

		//if the input is smaller 
	} else if (guessimate < sNumber) {

		if (score > 0) {

		//send message of too low and lower score
		document.querySelector('.message').textContent = "Too Low";
		score--;
		document.querySelector('.score').textContent = score; 
	   } else {
	   	document.querySelector('.message').textContent = "You Loose!"
	   }//End if smaller guess
	}



});