const add = function(first, second) {
	let add;
  add = first + second;
  return add;
};

const subtract = function(third, fourth) {
	let subtract;
  subtract = third - fourth;
  return subtract;
};

const sum = function(fifth) {
  let sum = 0;
  fifth.forEach(item => {
    sum += item;
  });
  return sum;
};

const multiply = function(sixth) {
  let multiply = 1;
  sixth.forEach(item => {
    multiply *= item;
  });
  return multiply;
};

const power = function(seventh, eighth) {
	let power = seventh ** eighth;
  return power;
};

const factorial = function(ninth) {
	let factorial = 1;
  if (ninth > 0){
    for (let i=1; i<=ninth; i++){
      factorial *= i;
    }
  }
  else if (ninth = 0){
    factorial = 1;
  }
return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
