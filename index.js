//Write a function that accepts an array of strings and console.logs each element using a for loop.
let arr = (["Hello", "Ada", "What", "is", "that", "shirt"]); 

for (let x of arr) { 
    console. log(x. toString()) } 
     let myFunction = (x) => x

//Write a JavaScript function that takes a string as input and reverses it using a while loop. The function should return the reversed string. 

     function reverseString(str) {
        let reversed = '';
        let y = str.length - 1;
        while (y >= 0) {
            reversed += str[y];
            y--;
        }
        return reversed;
    }
    
    // Example usage
    let firstString = "Glory, Joy!";
    let reversedString = reverseString(firstString);
    console.log(reversedString); 

//Write a function that takes in a an array of strings and use a continue statement when the item is at the second index:  let fruits= ['apple','plum','banana','strawberries','kiwi']
    function takeFruits(fruits) {
        for (let a = 0; a < fruits.length; a++) {
            if (a === 2) {
                continue; 
            }
            console.log(fruits[a]);
        }
    }
    
   
    let fruits = ['apple', 'plum', 'banana', 'strawberries', 'kiwi'];
    takeFruits(fruits);


//Write a program that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];
let arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let f = 0;

while (f < arrNumbers.length) {
    if (f === 4) {
        break; 
    }
    console.log(arrNumbers[f]);
    f++;
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
