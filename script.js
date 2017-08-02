console.log('toto');
alert('Votre iphone va exploser!');

var myArray = ['1'];


for(var i = 0; i < 10000000000; i++ ) {
  for(var i = 0; i < myArray.length; i++ ) {
    myArray.push(i);
    console.log('counter' + i);
    alert('Votre iphone rame....');
  }
}
