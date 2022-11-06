/**
 * Having a string of random characters and random length, 
 * create a method that identifies how many substrings of 4 
 * characters appear more than once along the main string. 
 * The method’s only argument should be the main string.
 */

const substringCounter = (string) =>{
  /**
   * correct value validation 
   */
  if(typeof(string) !== "string") return "It is not a valid entry"
  let subStrings = []; // save the substrings
  const rep = {}; // save how many times each substrigs appears
  let repsCounter = 0; // count the strings that appear more than once

  /**
   * slice every 4 characters and push them to an array
   */
  for(let i = 0; i < string.length-3; i++){
    subStrings.push(string.substring(i, i+4));
  }
  /**
   * compares each string with the others, and create a new objet where the key is the string and the value is the times it repeats
   */
  subStrings.forEach(e =>  (rep[e] = rep[e] + 1 || 1));
  
  /**
   * Filter the objets that have more than one repetitions
   */
  const result = Object.entries(rep).reduce((prev, cur)=> {
    const [key, value] = cur;
    if(value > 1) prev[key] = value;
    return prev;
  }, {})


  return result;
}

let test = ""

console.log(substringCounter(test));
