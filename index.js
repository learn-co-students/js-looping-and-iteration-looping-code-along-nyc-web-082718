// Code your solutions in this file

function printBadges(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`Welcome ${array[i]}! You are employee #${i + 1}.`)
  }
  return array
}


function tailsNeverFails() {
let coin
let amountOfTails = 0


  while (coin !== "Heads") {
    if (Math.random() < 0.5) {
      coin = "Heads"
    } else {
      coin = "Tails"
      amountOfTails++
    }
  }
  return `You got ${amountOfTails} tails in a row!`
}
