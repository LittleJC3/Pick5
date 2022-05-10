function pick5() {
	'use strict';
	// Grab value and set it to the randomNumber function
	document.getElementById('result1').value = randomNumber();
	document.getElementById('result2').value = randomNumber();
	document.getElementById('result3').value = randomNumber();
	document.getElementById('result4').value = randomNumber();
	document.getElementById('result5').value = randomNumber();
} 
// Random number function sets a number between 0-9
function randomNumber(){
	return Math.floor(Math.random() * 10);
}
function init() {
	'use strict';
	document.getElementById('generate').onclick = pick5;
} 
window.onload = init;