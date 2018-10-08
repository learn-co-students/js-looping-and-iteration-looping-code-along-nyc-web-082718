// Code your solutions in this file

const names = ['Ada', 'Brendan', 'Ali']
function printBadges(array) {
 for (var i = 0; i < array.length; i++) {
   console.log(`Welcome ${array[i]}! You are employee #${i+1}.`)
 }
 return array
};

function tailsNeverFails(){
  let i = 0
  while (Math.random() >= 0.5) {
    i++
  }
  return(`You got ${i} tails in a row!`)
}
