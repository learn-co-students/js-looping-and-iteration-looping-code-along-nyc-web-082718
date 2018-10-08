// Code your solutions in this file
function printBadges(name) {
  for (let i = 0; i < name.length; i++) {
    console.log(`Welcome ${name[i]}! You are employee #${i + 1}.`)
  }
  return name;
};

let i = 0;
function tailsNeverFails() {
  let randomNumber = Math.random()
  while (randomNumber >= 0.5) {
    i += 1;
    tailsNeverFails();
  };
  return `You got ${i} tails in a row!`
}
