const array = ["|", "/", "-", "\\"]
let delay = 100;
for (let rotations = 0; rotations < 3; rotations += 1) {
  for (const element of array) {
    setTimeout(() => {
      process.stdout.write(`\r${element}    `); 
    }, delay);
    delay += 200;
  }
}
