function printBadges(array) {
  for (i = 1; i < array.length + 1; i++) {
    console.log(`Welcome ${array[i-1]}! You are employee #${i}.`);
    
  }
  return array;
}

function tailsNeverFails() {
  let tails = 0;
  while (Math.random() >= 0.5) {
    tails += 1;
  }
  return `You got ${tails} tails in a row!`
}
