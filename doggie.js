// only greet dogs!

var greetDogs = function(message){
  if (message.indexOf('dog') !== -1){
    console.log('Hey doggie!');
  }
}

console.log('----------------------');
greetDogs('Is saw 3 dogs');
console.log('----------------------');
greetDogs('Is saw 7 cats');
console.log('======================');
