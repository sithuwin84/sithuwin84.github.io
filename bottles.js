var mkBottle = function (value){
    var div = document.createElement('div');
    for (var i = 0; i < value ; i++ ) {
        var img = document.createElement('img');
            img.src = '../images/bottle.png';
        div.appendChild(img);
    }
    return(div);

}

var mkText = function(text){
    var div = document.createElement('div');
    div.textContent = text;
    //div.classList.remove('bigger');
    div.classList.add('bigger'); // <div class='bigger'></div>
    return(div);

}

var song = document.querySelector('#song');

for (var i= 99;i >=0 ; i --) {
    var bottles = mkBottle(i);
    song.appendChild(bottles);
    var lyrics;
    if (i>1) {
        lyrics =  i + ' bottles of beer on the wall, '+ i+' bottles of beer. ' +
        'Take one down and pass it around, '+ (i-1) +' bottles of beer on the wall.';
    } else if (i==1)     {
        lyrics =  i + ' bottle of beer on the wall, '+ i+' bottle of beer. ' +
        'Take one down and pass it around, no more bottles of beer on the wall.';        
    } else {
        lyrics =  'no more bottles of beer on the wall, no more bottles of beer. ' +
        'Go to the store and buy some more, 99 bottles of beer on the wall.'; 
    }
    var text = mkText(lyrics);
    song.appendChild(text);
}




//song.appendChild(bottles);