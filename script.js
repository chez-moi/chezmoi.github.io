console.log('toto');

var myArray = ['1'];


for(var i = 0; i < 10000000000; i++ ) {
  for(var i = 0; i < myArray.length; i++ ) {
    myArray.push(i);
    console.log('countsssss' + i);
  }
}
