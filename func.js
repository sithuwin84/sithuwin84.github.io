console.log("func.js is loaded");

var name = 'fred';

var person = {
    name : 'fred',
    tel: '123456'
}


/*
var greet = function (name, phone){
     console.log("Hello ", name);
     console.log("\tcall me ", phone);
}
*/

//rec is a formal function
var greet = function (rec) {
    console.log ("Hello ", rec['name']);
    console.log ("\tcall me ", rec['tel']);
}

var mkGreet = function(rec){
    return ("Hello " + rec['name']+ "\tcall me " + rec['tel']);
}
/*
var person = {
    name: 'fred'
}

var greet = function (name){
    console.log("Hello ", name);
}
// greet (person['name'], person['tel']);
//greet(person);
greet('fred');
*/
//actual parameter
greet({name: 'barney'});

console.log('typeof name = ', typeof name);
console.log('typeof greet = ', typeof greet);