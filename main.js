// INIT ARRAY

var placeHolder = [];
var spaceBeforeString;
console.log("String value: ",  placeHolder);
var myObject = {};


// INITIAL FUNCTION RAN FROM HTML

function test() {
	console.log("Test was clicked:");
	myObject = {
		height: Number(document.getElementById('height').value),
		character: document.getElementById('character').value
	}
	console.log('Tree below: ', placeHolder);
	tree(myObject.height);
}




// MAIN TREE FUNCTION 

function tree(object) {
	placeHolder[myObject.height] = "Hob";


	for (var i = 0; i < myObject.height; i++) {
		placeHolder[i] = " ";
		
	}

	for (var i = 0; i < myObject.height; i++) {
		
		// console.log(centerTree);
		placeHolder[myObject.height + i] = myObject.character;
		placeHolder[myObject.height - i] = myObject.character;
		var treeMaker = placeHolder.join("");
		console.log(treeMaker);
	}
}
