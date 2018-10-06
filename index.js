function printBadges(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Welcome ${arr[i]}! You are employee #${i + 1}.`);
  }
  return arr;
}

function tailsNeverFails() {
  let result;
  let count = 0;
  while (result !== 'Heads') {
    if (Math.random() < 0.5) {
      result = 'Heads';
    } else {
      result = 'Tails';
      count++
    }
  }
  return `You got ${count} tails in a row!`;
}
