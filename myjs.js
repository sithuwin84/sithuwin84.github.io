//declare a variable

var name;
var age;
var hungry;
var tired;


name = "fred"; //string

age = 30;  // number

hungry = true ; //boolean - not, and, or
tired = true ; //boolean - not, and, or
var timeToLeave = hungry || tired;

//timeToLeave == true 
if (timeToLeave) {
    console.log(">>>>> yes") 
} else {
    console.log(">>>>> no")
}

console.log('hungry && tired: '+ (hungry && tired));
//console.log('hungry || tired: '+ (hungry || tired));
console.log('hungry || tired: '+ timeToLeave );
console.log('not hungry && not tired: '+ (!hungry && !tired));

//alert('hello '+ name );xx`x`
//str + str -> concatenation
//console.log('name = ' + name);
