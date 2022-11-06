## Solvin programing problem test.

# Problem:
Having a string of random characters and random length, create a method that identifies how many substrings of 4 characters appear more than once along the main string. The method’s only argument should be the main string.
It should return the substrings that repeat and how many times they appear in the text in a data structure.

# Required.
- How to interpret and solve a programming problem
- How to improve performance in recurrent tasks
- How to program a basic method

# Solution:
The implemented programing language was JavaScript.
A validation is done in case it is not a string, after this, it was decided to implement the method substring() to divide the main string into substrings of four characters.
Then, the forEach method was implemented since it is the fastest to go through this type of arrays, in order to make a comparison of each element with the rest, and store it in an object that contained the substring as key and the number of repetitions as value.
Finally, the Object.entries method was implemented to transform my object into an array, and filter the elements whose repetition value is greater than 1.

To test the solution you can run Visual Studio Code and put the string inside the test variable, and inside the console run the command:
node technicalTest.js


