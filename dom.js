console.log("dom.js is loaded")


//search it by using querySelector - #title, h1 .myclass
var title = document.querySelector("#title");

//title['innerText']='the current time is'+ new Date();

title.innerText = 'The current time is '+ new Date();

console.log("title = ", title);

/*
document.getElementById("item0").innerHTML = "ONE";
document.getElementById("item1").innerHTML = "TWO";
document.getElementById("item2").innerHTML = "THREE";
*/

var text = ['ONE','TWO', 'THREE'];

for (var i=0; i< text.length; i+=1 ) {
    var li = document.querySelector('#item'+ (i+5));
    li.innerHTML =text[i];
    //li['innerText']= text[i];
}


for (var i = 0; i < text.length ; i ++ ){
    var li = document.createElement('li');
    li.innerHTML=text[i];
    document.querySelector('#mylist').appendChild(li);
}