//Write a function that accepts an array of strings and console.logs each element using a for loop.
let arr = (["Hello", "World", "This", "Is", "My", "String"]); 

for (let element of arr) { 
    console. log(element. toString()) } 
     let myFunction = (element) => element

//Write a JavaScript function that takes a string as input and reverses it using a while loop. The function should return the reversed string. 

     function reverseString(str) {
        let reversed = '';
        let i = str.length - 1;
        while (i >= 0) {
            reversed += str[i];
            i--;
        }
        return reversed;
    }
    
    // Example usage
    let originalString = "Hello, World!";
    let reversedString = reverseString(originalString);
    console.log(reversedString); 

//Write a function that takes in a an array of strings and use a continue statement when the item is at the second index:  let fruits= ['apple','plum','banana','strawberries','kiwi']
    function processFruits(fruits) {
        for (let i = 0; i < fruits.length; i++) {
            if (i === 2) {
                continue; // Skips the current iteration when i is at the second index
            }
            console.log(fruits[i]);
        }
    }
    
    // Example usage
    let fruits = ['apple', 'plum', 'banana', 'strawberries', 'kiwi'];
    processFruits(fruits);


//Write a program that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];
let arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let i = 0;

while (i < arrNum.length) {
    if (i === 4) {
        break; // Exit the loop when the item is at the fourth index
    }
    console.log(arrNum[i]);
    i++;
}

//Write a program that takes in an array of numbers and consoles the first four items multiplied by itself  and the last two added by 10. Return the array with the new values
function manipulateArray(numbers) {
    let manipulatedArray = [];

    for (let i = 0; i < numbers.length; i++) {
        if (i < 4) {
            manipulatedArray.push(numbers[i] * numbers[i]); // Multiply the first four items by themselves
        } else if (i >= numbers.length - 2) {
            manipulatedArray.push(numbers[i] + 10); // Add 10 to the last two items
        } else {
            manipulatedArray.push(numbers[i]);
        }
    }

    return manipulatedArray;
}

// Example usage
let numbers = [1, 2, 3, 4, 5, 6, 7];
let resultArray = manipulateArray(numbers);
console.log(resultArray);
