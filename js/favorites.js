function list(array) {
	var i = 0;
	for(i; i < array.length; i += 1) {
		console.log("My #" + (i+1) + " favorite part of the cow is the " + array[i]+ ".");
	}
}


var favArray = ["ribeye", "strip", "tenderloin", "shortrib", "milk"];
list(favArray);


// My #1 favorite baseball team is the New York Mets.
// My #2 favorite baseball team is the San Francisco Giants.
