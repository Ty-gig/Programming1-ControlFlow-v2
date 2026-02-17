// Conditions kata: FizzBuzz-style function that returns an array for 1..n

function fizzBuzz(n = 100) {
  // TODO: write your solution here (replace the line below).
  // Return an array of values for 1..n following FizzBuzz rules.
  // Example: fizzBuzz(5) -> [1, 2, "Fizz", 4, "Buzz","Fizz",7, 8, fizz,buzz...14, fizzbuzz]
  // Explain your logic choices in comments as you code.
  // Purpose: return an array
// n is the limit to the amount of times that this loop will loop

  for(let i = 1; i <= 20; i++){
    if(i % 15 === 0){
      console.log("FizzBuzz")
    } else if(i % 3 === 0){
      console.log("fizz");
    }else if (i % 5 === 0){
      console.log("buzz");
    } else{
      console.log(i)
    }
  }
  

  
}
fizzBuzz(5);

globalThis.__katas = globalThis.__katas || {};
globalThis.__katas.fizzBuzz = fizzBuzz;
