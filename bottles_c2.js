console.log("bootles.js is loaded")

var imgSrc = '../images/bottle.png';

function generateImage() {
  var img = document.createElement('img')
  img.src = imgSrc; 
  img.height = 45;
  img.width = 16; 
  return img;
}

/*
for ( var i = 4; i > 0; i-- ) {
var bottleImg = document.createElement('img')
bottleImg.src = '../images/bottle.png'
bottleImg.width = 13
bottleImg.height = 45
document.body.appendChild(bottleImg)
 }
 */

 for (var j = 99; j >0 ; j-- ){
    var div1 = document.createElement('div');
    for ( var i = j; i > 0; i-- ) {
        document.querySelector('#song').appendChild(generateImage());
    }
    div1.id = 'div1'
    document.querySelector('#song').appendChild(div1);

    var div3 = document.createElement('div');
    div3.innerHTML= '<br />' + j +' bottles of beer on the wall, ' + j + ' bottles of beer.' + '<br />Take one down and pass it around, ' + (j-1) + ' bottles of beer on the wall.';	
    document.querySelector('#song').appendChild(div3);

    var div2 = document.createElement('div');
    div2.innerHTML= '<br />-------------------------------------------------------------------------------------------------------------------------'
    document.querySelector('#song').appendChild(div2);
}
