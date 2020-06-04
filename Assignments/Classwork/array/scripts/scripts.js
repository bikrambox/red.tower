function myFunction(){

var myArray =[]; //Empty array
var size = 5; //Maximum Array size
for(var i=0; i<size; i++) {
	
	//Taking Input from user
	myArray[i] = prompt('Enter Element ' + (i+1));
}
var secondLargest = myArray.sort(function(a,b){return a - b})[myArray.length-2];
alert("Entered elements are: " + myArray + "  And the Second Largest number is: " + secondLargest);

}