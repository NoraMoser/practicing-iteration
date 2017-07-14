console.log("Hi");

for (i = 5; i < 120; i += 10) {
	console.log(i);
}

for (j = 4096; j > 1; j /= 2) {
	console.log(j);
}

let americanPresidents = ["George Washington", "John Adams", "Thomas Jefferson"]

for (k = 0; k < americanPresidents.length; k++) {
	console.log(americanPresidents[k]);
}

let antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (let prop in antSpecies) {
  console.log(`${prop}`);
}