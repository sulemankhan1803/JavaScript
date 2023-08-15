//   1 A
// function that counts the number of words in a text
function countOfWords(txt) {
    // Split the input text by spaces
    let words = txt.split(" ");

    // Return the count of words
    return words.length;
}
let text1 = "Hey Iam Good !";
let noOfWords = countOfWords(text1);
console.log(noOfWords);

// B

// function that counts the number of words in a text using regular expressions
function countWords(text) {
    // Split the text by spaces and punctuation marks using a regular expression
    const words = text.split(/\s+|[.,;?!_]/).filter((word) => word.length > 0);

    // Return the length of the filtered words
    return words.length;
}
let text2 = "Hey_Iam_Good !!";
console.log(countWords(text2));


// 2

// Function that capitalizes the first letter of a text
const capitalizeFLetter = (txt) => {
    // Get the first character of the text and capitalize it
    let text = txt.charAt(0).toUpperCase() + txt.slice(1);

    // Return the modified text
    return text;
};
let txt = "hey there";

// Calling the function to capitalize the first letter
let capitalizedText = capitalizeFLetter(txt);
console.log(capitalizedText);


// 03

// Function that calculates the sum of numbers in a comma-delimited string
const sumOfCDString = (str) => {
    // Split the input string into an array of number strings
    let numbers = str.split(",");
    let sum = 0;

    // Iterate through the array and add each number to the sum
    for (let i = 0; i < numbers.length; i++) {
        sum += Number(numbers[i]);
    }
    return sum;
};
let CDString = "10,20,30,40";

// Calling the function to calculate the sum of sum of numbers in a comma-delimited string
let sumOfCDStr = sumOfCDString(CDString);
console.log(sumOfCDStr);


// 04

// Function that converts a text string into an array of words
const convertToArray = (txt) => {
    // Split the input text by spaces to create an array of words
    let text = txt.split(" ");
    return text;
};
let normalText = "Hello everyone Iam in an array";

// Calling the function to convert the text into an array
let array = convertToArray(normalText);
console.log(array);

// 05

// Function to to convert a CSV text to a “bi-dimensional” array
function csvTo2DArray(csvText) {
    // Split the CSV text into rows using newline characters
    let rows = csvText.split("\n");

    // Initialize the two-dimensional array
    let result = [];

    // Iterate through each row and split by commas to create inner arrays
    for (let i = 0; i < rows.length; i++) {
        let columns = rows[i].split(",");
        result.push(columns);
    }
    return result;
}

const csvText = "1,John,Doe\n2,Jane,Smith\n3,Robert,Johnson";
const csvArray = csvTo2DArray(csvText);
console.log(csvArray);


// 06

// Function to convert a string into an array of characters
const stringToArray = (str) => {
    // Split the input string into an array of individual characters
    let array = str.split("");
    // Returns array containing individual characters
    return array;
};

let str = "Hello world";
//  Calling Function
let arrayOfChars = stringToArray(str);
console.log(arrayOfChars);


// 07

// Function to converts a string into an array containing ASCII codes of each character
const getASCIICode = (str) => {
    // Initialize an array to store ASCII codes
    let codeArray = [];

    // Iterate through each character in the string
    for (let i = 0; i < str.length; i++) {
        // Get the ASCII code of the current character
        let code = str.charCodeAt(i);

        // Push the ASCII code into the codeArray
        codeArray.push(code);
    }

    // Return the array containing ASCII codes
    return codeArray;
};
let string = "Hello world";
// Calling the function
const ASCIIcode = getASCIICode(string);
console.log(ASCIIcode);


// 08

// fFunction that converts an array containing ASCII codes into a string
const getString = (arr) => {
    // Empty string
    let str = "";
    // Iterate through each ASCII code in the array
    for (let i = 0; i < arr.length; i++) {
        // convert ASCII code to character and adds to the str
        str += String.fromCharCode(arr[i]);
    }
    // Return the string created from ASCII codes
    return str;
};

let ASCIIArray = [72, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100];
//   Function call
let stringFromASCII = getString(ASCIIArray);
console.log(stringFromASCII);


// 09

// Function that implements the Caesar cipher
function ceaserCipher(txt) {
    let encryptedText = "";

    // Loop through each character in the input text
    for (let i = 0; i < txt.length; i++) {
        let char = txt[i];
        // Check if the character is not a space
        if (char !== " ") {
            // Get the Unicode code point of the character and shift it by 3 positions
            let shiftedCharCode = char.charCodeAt(0) + 3;

            // Convert the shifted character code back to a character
            let encryptedChar = String.fromCharCode(shiftedCharCode);
            // Add the encrypted character to the encrypted text
            encryptedText += encryptedChar;
        } else {
            // Keep spaces unchanged
            encryptedText += " ";
        }
    }

    return encryptedText;
}

const text = "hello world";
const encryptedText = ceaserCipher(text);
console.log(encryptedText);


// 10

// Bubble sort Function
function bubbleSort(arr) {
    const n = arr.length;

    // Outer loo Controls the number of passes
    for (let i = 0; i < n - 1; i++) {
        // Inner loop  Compares adjacent elements and swaps them if needed
        // After each pass, the largest element moves to the end of the array
        for (let j = 0; j < n - i - 1; j++) {
            // Compare adjacent elements
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

const numbers = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(numbers); // Sort the array using bubble sort
console.log("Sorted array:", numbers);