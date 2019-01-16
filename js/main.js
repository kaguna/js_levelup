/*
Code Structure in javascript
Statements, semicolons and comments are some of the 
buliding blocks js code. 
*/
alert(`This code implements statements 
        in the code structure.`);
// The statement above highlights some building blocks.

/*
Code Style:-Syntax
*/
function pow(x, n) { // space between parameters and curly bracket on the same line after space.
	let result = 1 //identation of 2 spaces
	
	for (let i = 0; i < n; i++) {// space after for/if/while & other loops and a semicolon is mandatory at the end.
	result *= x;
	}
	
	return result;
}

let x = prompt("x?", "");
let n = prompt("n?", "");
// An empty line between logical blocks
if (n < 0) {
    alert(`Power ${n} is not supported, please 
        enter an integer number, greater then 0`);// short lines(80 to 100 chars)
} else {//else without a line break.
	alert( pow(x,n) );//spaces around a nested call. 
}
