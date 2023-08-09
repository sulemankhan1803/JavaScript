// 01

// Function for ArrayRotation to right by position 1
function arrRotation(arr) {
    let lastElement = arr.pop();
    // Place the last element at the beginning of the array
    arr.unshift(lastElement);
    return arr;
}
let arr = [1, 2, 3, 4, 5];
let rotatedArray = arrRotation(arr);
console.log(rotatedArray);


// 02

// A function to reverse the order of elements in an array
const reverseArray = (arr) => {
    let reversedArray = arr.reverse(); // Reverse the array
    return reversedArray
};

let array = [1, 2, 3, 4, 5];
let reversedArray = reverseArray(array); // Calling function to reverse the array
console.log(reversedArray);

// 03

// Function to reverse a given string
const reverseString = (str) => {
    let reversedString = "";
    // Iterate through the string in reverse order
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    return reversedString;
};

let name = "Harry";
//   calling function to reverse given string
let reversedName = reverseString(name);
console.log(reversedName);


// 04

// Function to merge two arrays 
const mergeArrays = (arr1, arr2) => {
    // Concatenate the two arrays
    let mergedArray = arr1.concat(arr2);
    return mergedArray;
};

let arr1 = ["Apple", "Mango", "Banana"];
let arr2 = [1, 2, 3, 4, 5];
// Calling function to merge arrays
let newArray = mergeArrays(arr1, arr2);
console.log(newArray);


// 05

// Function to create an array of elements that are present in either arr1 or arr2, but not in both
const exorArray = (arr1, arr2) => {
    let exclusiveArray = [];

    for (let i of arr1) {
        if (!arr2.includes(i)) {
            // Add the element to exclusiveArray if it's not in arr2
            exclusiveArray.push(i);
        }
    }

    for (let i of arr2) {
        if (!arr1.includes(i)) {
            // Add the element to exclusiveArray if it's not in arr1
            exclusiveArray.push(i);
        }
    }

    return exclusiveArray;
};

let numArr1 = [1, 2, 3, 4, 5];
let numArr2 = [3, 4, 5, 6, 7];

// Calling the function to get the exclusive array
let exclusiveArray = exorArray(numArr1, numArr2);
console.log(exclusiveArray);


// 06

// Function to find the elements that are in arr1 but not in arr2
const diffArray = (arr1, arr2) => {
    let newArray = [];

    for (let element of arr1) {
        if (!arr2.includes(element)) {
            // Add the element to newArray if it's not in arr2
            newArray.push(element);
        }
    }
    return newArray;
};

let array1 = [1, 2, 3, 4, 5, 10, 20, 30];
let array2 = [3, 4, 5, 6, 7];
// Calling the function
let newArr = diffArray(arr1, arr2);
console.log(newArr);


// 07

// Function to get an array with distinct elements
const distinctElements = (arr) => {
    // Create a Set to store unique elements
    let uniqueElements = new Set(arr);
    // Convert Set back to an array
    let newArray = Array.from(uniqueElements);
    return newArray;
};

let numberarr = [1, 2, 3, 4, 5, 10, 20, 30, 1, 2, 3, 4];
// Calling the function to get an array with distinct elements
let uniqueElement = distinctElements(arr);
console.log(uniqueElement);



// 08

// Function to check if a number is prime
const isPrime = (number) => {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i * i <= number; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
};

// Function to find the sum of the first n prime numbers
const sumOfFirstNPrimes = (n) => {
    let count = 0; // Count of prime numbers found
    let i = 2;
    let sum = 0;

    while (count < n) {
        // Checking if the number is prime
        if (isPrime(i)) {
            sum += i;
            count++; // Increment the count of found prime numbers
        }
        i++;
    }

    return sum;
};

let n = 100;
let sumOfPrimes = sumOfFirstNPrimes(n);
console.log(sumOfPrimes);


// 09

// Function to check if a number is prime
const isprime = (number) => {
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

// Function to find and print the distance between the prime numbers
const distanceBetweenPrime = (n) => {
    // Counter for the number of prime distances found
    let count = 0;
    let i = 2;
    // To store the previous prime number
    let previousPrime = null;

    // Loop until n prime distances are found
    while (count < n) {
        // Check if i is a prime number
        if (isprime(i)) {
            if (previousPrime != null) {
                // Calculate and display the distance between previousPrime and i
                console.log(`The distance between ${previousPrime} and ${i} is: ` + (i - previousPrime));
            }
            // Update the previous prime
            previousPrime = i;
            // Increase the count on found prime
            count++;
        }
        i++;
    }
};

let range = 100;
distanceBetweenPrime(range);


// 10

// Function to calculate the sum of two positive numbers of indefinite size
function sumOfIndifiniteSizeNums(num1, num2) {
    // Converting input strings to BigInt
    let bigIntNum1 = BigInt(num1);
    let bigIntNum2 = BigInt(num2);

    // Perform the addition using BigInt
    let sum = bigIntNum1 + bigIntNum2;
    // Converting back to String
    let sumString = sum.toString();
    return sumString;
}

let number1 = "12345678901234567890";
let number2 = "98765432109876543210";
// Calling function to calculate string of indefinite size
let sum = sumOfIndifiniteSizeNums(number1, number2);
console.log(sum);