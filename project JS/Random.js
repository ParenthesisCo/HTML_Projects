max = parseFloat(prompt("Enter a maximum digit"));
min = parseFloat(prompt("Enter a minimum digit"));

function getRandom(min, max) {
  return Math.floor(Math.random() * max + min)
};

document.write(getRandom(min, max));
console.log(getRandom(1,10))