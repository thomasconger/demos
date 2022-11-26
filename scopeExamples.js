// "let" and "const" declare a variable within "block" scope

// Block scope flows down, allowing alpha and beta to be defined outside a function and then used within the function, provided the function is within the same block

let alpha = "alpha"
const beta = "beta"

function printAlphaAndBeta() {
  console.log(alpha);
  console.log(beta);
}

printAlphaAndBeta()

// But, block scope doesn't extend to outside the block in which a variable is declared

// While above, alpha and beta were printed to the console, below, gamma would not be printed because gamma is undefined

function declareGamma() {
  let gamma = "gamma"
  return gamma
}

function printGamma() {
  console.log(gamma)
}

//This code would be angry! What error would it throw?
// printGamma();


// only when gamma is declared and initialized in the outer scope will it be accessible within the print gamma function

let gamma = "Now this gamma value can be read.";

printGamma()
