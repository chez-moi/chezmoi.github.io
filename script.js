console.log('toto');

var myArray = ['1'];


for(var i = 0; i < 100; i++ ) {
  for(var i = 0; i < myArray.length; i++ ) {
    myArray.push(i);
    console.log('countsssss' + i);
  }
}
