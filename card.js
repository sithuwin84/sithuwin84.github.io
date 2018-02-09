
console.log("JS Loaded")

var suits = ["Spade","Diamond","Clubs","Heart"];
var value = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

//var suitIndex = 0;
//var valueIndex = 0;

var fred = {
    name: 'fred',
    phone: '123456',
    email: 'fred@gmail.com'
}

//Hold our cards
var deck = [];

console.log ('-------------------------------------')
for (var i in fred){
    console.log("key: %s, value: %s", i, fred[i])
}
console.log(fred['name']);
console.log(value[1]);

console.log ('\n-------------------------------------')
for (var i in value) {
    console.log("key = %s, value = %s", i , value[i]);
}

/*
for (var i in suits){
    for (var j in value){
        deck.push({
            suits: suits[i],
            value: value[j]
        });
    }
}

/* for loop both outer and inner
for (var suitInde = 0; suitIndex < suits.length; suitIndex +=1){
    for (var valueIndex = 0; valueIndex < value.length; valueIndex +=1){
        eck.push({
                suits: suits[suitIndex],
                value: value[valueIndex]
                })	
    }
}

//while loop with inside for loop
/*


    //Outer look - suits
    while (suitIndex < suits.length){
        for (var valueIndex =0; valueIndex < value.length; valueIndex +=1){
            deck.push({
                suits: suits[suitIndex],
                value: value[valueIndex]
                })	
        }

        // Inner loop with while 
        /*
        valueIndex = 0;
        while (valueIndex < value.length){
            
            //console.log("valueIndex = %d", valueIndex);
            //console.log ("suitIndex = " + suitIndex + ", valueIndex = " + valueIndex);
            //console.log("suitIndex = %d, valueIndex = %d", suitIndex, valueIndex);
            
            deck.push({
                suits: suits[suitIndex],
                value: value[valueIndex]
                })		
            valueIndex +=1;		
        }
        
	suitIndex += 1;
   
}
 */ 
console.log(deck)