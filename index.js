// Code your solutions in this file

function printBadges(array){
  for(let i = 0, i < array.length; i++){
    console.log('Welcome ${array[i]}! You are employee ${i + 1}.' )
  }
  return array
}


tailsNeverFails(){
  let x = 0
  while( Math.random() >= 0.5){
    console.log("tails")
    x ++
  }
  return "You got ${x} tails in a row!"
}
