console.log("day2.js is loaded");

var flintstones = ["fred","barney","wilma","pebbles","betty","bambam"];
//var flintstones = [];
//var flintstones = ["fred", "wilma","pebbles" ];

// Task 1
//use while statement to print out the elements of the array
//one on each line
//it should work with array of *ANY* length;
 
// Task 2 
// filter out 'tiger' from the array

// Task 3
// Only print out the flintstones 
 
var i = 0;

console.log("FlintStone is " , flintstones);

while (i<flintstones.length){
    // if ("tiger"!= flintstones[i]) {
    if (flintstones[i]!="tiger"){
     console.log( i + " >>>> "+flintstones[i]);
    }
    i++;
    
}