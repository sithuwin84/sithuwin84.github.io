console.log("day2a.js is loaded");

var car = {
    make:'Honda',
    'first name' : "fred",
    "last-name" : 'flintstone',
    drive: '4W',
    price: 100000,
    validDrives : [ 'fred', 'wilma']
}

var fred = {
    name:'fred',
    email: 'fred@gmail.com'
}

var wilma = {
    name : 'wilma',
    email : 'wilma@gmail.com'

}

var flintstones = [fred, wilma];

//print out the email addresses of the flintstones

console.log(">> flintstones: ", flintstones);

var i = 0;
while (i<flintstones.length) { 
   console.log("email: " + flintstones[i]['email']);
   i++;

}



console.log("car make = ", car['make'])
console.log("car make = ", car['first name'])
