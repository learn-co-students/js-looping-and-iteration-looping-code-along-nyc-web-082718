// Code your solutions in this file
function printBadges(namesArr) {
  for (let i = 0; i < namesArr.length; i++) {
    console.log(`Welcome ${namesArr[i]}! You are employee #${i + 1}.`)
  }

  return namesArr
}

function coinFlip() {
  return Math.random() >= 0.5
}

function tailsNeverFails() {
  let tailsCount = 0;

  while (Math.random() >= 0.5) {
    tailsCount++;
  }
  return `You got ${tailsCount} tails in a row!`;
}
