// Question 1 -- sortByStrings(s,t): Sort the letters in the string 
// s by the order they occur in the string t. You can assume t will 
// not have repetitive characters. For s = 'weather' and t = 
// 'therapyw', the output should be sortByString(s,t) = 'theeraw'. 
// For s = 'good' and t = 'odg', the output should be 
// sortByString(s, t) = 'oodg.'

function sortByString(str1, str2) {
  result = ''
  // a variable to iterate through the second string
  for (let i = 0; i < str2.length; i++) {
    // a varaiable to iterate through the first string
    for (let x = 0; x < str1.length; x ++) {
      // if the letter in the second string appears, add the letter
      // from the first string to the result
      if (str2[i].toLowerCase() === str1[x].toLowerCase()) {
        result += str1[x];
      }
    }
  }
  return result;
}

let s1 = 'weather';
let t1 = 'therapyw';
let s2 = 'good';
let t2 = 'odg';
console.log(sortByString(s1,t1)); // theeraw
console.log(sortByString(s2,t2)); // oodg