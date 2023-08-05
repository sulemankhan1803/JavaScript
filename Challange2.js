// 01

// Function to calculate the average of numbers in an array
const avgf = (arr) => {
    let sum = 0;

    // Loop through the array to calculate the sum of all numbers
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i]; // Add the current element to the sum
    }
    // Calculate the average by dividing the sum by the number of elements
    let avg = sum / arr.length;
    return avg; // Return the calculated average
  };

  let arr = [1, 2, 3, 4, 5, 6, 8, 9, 10];
  let avg = avgf(arr); //function call to calculate the average
  console.log(avg);

// 02 

 // Function to filter out and return an array containing only positive numbers
 const positivenumbers = (numbers) => {
    const positiveNumbers = []; // Initialize an empty array to store the positive numbers

    // Loop through each element of the input array
    for (let i = 0; i < numbers.length; i++) {
        // Check if the current element is greater than zero (positive)
      if (numbers[i] > 0) {
        positiveNumbers.push(numbers[i]); // Add the positive number to the positiveNumbers array
      }
    }

    return positiveNumbers; // Return the array containing only positive numbers
  };

  let numbers = [1, 2, 3, -1, -2, -3];
  console.log(positivenumbers(numbers));

//  03
 // Function to find the maximum number in an array of numbers 
 const maxNumber = (n) => {
    // Initialize max with the first element of the array
    let max = n[0];
    // Loop through the array starting from the second element
    for (let i = 1; i < n.length; i++) {
      // Compare the current element with the current max  
      if (n[i] > max) {
        // If the current element is greater, update the max
        max = n[i];
      }
    }
    // Return the final maximum value
    return max;
  };
  
  // Calling the maxNumber function to find the maximum number in the array
  let numbersarr = [1, 2, 3, 4, 20, 100, 50, 10];
  let maximumNumber = maxNumber(numbersarr);
  console.log(maximumNumber);

// 04
// Function to generate Fibonacci numbers up to 'n'
 // Function to generate Fibonacci numbers up to 'n'
 const fibonacciSeries = (n) => {
    let n1 = 0; // Initialize the first Fibonacci number as 0
    let n2 = 1; // Initialize the second Fibonacci number as 1
    let n3; // Variable to store the next Fibonacci number

    // Print the first two Fibonacci numbers: 0 and 1
    console.log(n1);
    console.log(n2);

    // Loop to generate and print the next 'n-2' Fibonacci numbers (since the first two were already printed)
    for (let i = 2; i < n; i++) {
      // Calculate the next Fibonacci number by adding the previous two numbers
      n3 = n1 + n2;

      // Print the current Fibonacci number
      console.log(n3);

      // Update 'n1' and 'n2' for the next iteration
      n1 = n2;
      n2 = n3;
    }
  };

  
  let range = 10;
  // Calling the  function
  fibonacciSeries(range);


// 05
function fibonacciRecursive(n, n1 = 0, n2 = 1) {
    // Base case: If n is 0, return n1 (0th Fibonacci number)
    if (n === 0) {
      return n1;
    }

    // Base case: If n is 1, return n2 (1st Fibonacci number)
      if (n === 1) {
        return n2;
      }

    // Calculate the next Fibonacci number by adding the previous two numbers
    const n3 = n1 + n2;

    // Call the function recursively with 'n-1', 'n2' as 'n1', and 'n3' as 'n2' for the next iteration
    return fibonacciRecursive(n - 1, n2, n3);
  }

  // Prompt the user to enter a number
  let n = prompt("Enter number");
  // Convert the input to an integer
  n = Number.parseInt(n);

  // Calling function to find the nth Fibonacci number
  let nthFibonacciNumber = fibonacciRecursive(n);

  console.log(`The ${n}th Fibonacci number is: ${nthFibonacciNumber}`);

// 06

 // Function to check if a number is prime
 const isPrime = (n) => {
    // If the number is less than 2, it is not prime
    if (n < 2) {
      return false;
    }

    // Check for divisibility from 2 up to the square root of the number 
    for (let i = 2; i * i <= n; i++) {
      // If the number is divisible by any i, it is not prime
      if (n % i === 0) {
        return false;
      }
    }

    // If no divisors found, the number is prime
    return true;
  };

  // Prompt the user to enter a number
  let number = prompt("Enter a number");

  // Convert the input to an integer
  number = Number.parseInt(number);

  // Calling the function to check if the entered number is prime
  let checkPrime = isPrime(number);
  console.log(checkPrime);

// 07

// Function to calculate the sum of the digits of a positive integer number
function sumOfInteger(n) {
    let sum = 0;

    // Check if the number is positive 
    if (n > 0) {
        // Convert the number to a string to access individual digits
        n = n.toString(); 

      // Loop through each character in the number string
      for (let i = 0; i < n.length; i++) {
        // Convert the digit character back to a number and add it to 'sum'
        sum += Number(n[i]);
      }
    }

    return sum;
  }

  let integer = 123;
  // Calling the function to calculate the sum of digits
  let sum = sumOfInteger(integer);
  console.log(`The sum of ${integer} is: ` + sum);

// 08

// Function to check if a number is prime
function isPrime(number) {
    if (number < 2) {
      return false;
    }
    for (let i = 2; i * i <= number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }

  // Function to print the first 'n' prime numbers
  function first100primes(n) {
    let count = 0;
    // Start checking for prime numbers from 2
    let i = 2;

    // Loop until 'n' prime numbers are found
    while (count < n) {
      // Check if 'i' is a prime number using the 'isPrime' function
      if (isPrime(i)) {
        // Print the prime number
        console.log(i); 
        count++;
      }
      i++;
    }
  }

  let range1 = 100; 
  // Calling the 'first100primes' function 
  first100primes(range1);

// 09

// Function to check if a number is prime
const isPrime = (number) => {
    if (number < 2) {
      return false;
    }
    for (let i = 2; i * i <= number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  };

  // Function to find 'n' prime numbers greater than 'startAt'
  function findPrimesGreaterthan(startAt, n) {
    // Array to store the prime numbers
    let primes = [];
    // Start checking numbers greater than 'startAt'
    let currentPrime = startAt ;

    // Loop until 'n' prime numbers are found
    while (primes.length < n) {
      // Check if currentPrime is prime using isPrime function
      if (isPrime(currentPrime)) {
        // Add 'currentPrime' to the 'primes' array
        primes.push(currentPrime);
      }
      currentPrime++;
    }

    return primes;
  }
  // Define the number greater than which we want to find prime numbers
  let startingnumber = 10;
  // Define the number of prime numbers we want to find
  let range2 = 5;
  // Calling the function
  let primeArray = findPrimesGreaterthan(startingnumber, range2);
  console.log(primeArray);

// 10

function rotateLeftByPositions(arr, positions) {
    const rotations = positions % arr.length; // Effective number of rotations (handles cases where positions > array length)
    for (let i = 0; i < rotations; i++) {
      const firstElement = arr.shift(); // Remove the first element from the array
      arr.push(firstElement); // Add the first element to the end of the array
    }
    return arr;
  }

  // Example usage:
  let originalArray = [1, 2, 3, 4, 5];
  let positionsToRotate = 1;
  let rotatedArray = rotateLeftByPositions(originalArray,positionsToRotate);
  console.log(rotatedArray); 



