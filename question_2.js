// Question 2 -- decodeString(s): Given an encoded string, return
// its corresponding decoded string.

// The encoding rule is: k[encoded_string], where the 
// endcoded_string inside the square brackets is repeated exactly 
// k times. Note: k is guaranteed to be a positive integer.

// For s = '4[ab]', the output should be decodedString(s) = 
// 'abababab'. For s = '2[b3[a]]', the output should be decodedString
// (s) = 'baaabaaa'

function findBracket(str) {
// find the first level of brackets and return just the content
// without the outermost brackets
  let bracket = 0;
  let end = 0;
  for (let i = 0; i < str.length; i++) {

    // for each '[', add one, ']', subtract one
    if (str[i] == '[') {
      bracket += 1;
    } else if (str[i] == ']') {
      bracket -= 1;
      // if the bracket count hits 0, we have found a complete set
      if (bracket == 0) {
        end = i;
        break
      }
    }
  }

  return str.slice(1, end);
}

function splitType(str) {
// takes in a string and returns an array contianing a letter
// prefix, a number (mulitplier), and an array (everything in
// the following brackets)
  let arr = [];
  let num = '';
  let letter = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] != '[') {
      // if the index is a 0, add 0 to num
      if (parseInt(str[i]) == 0) {
        num += '0';
      // if the index is another integer, add it to num
      } else if (parseInt(str[i]) > 0) {
        num += str[i];
      // else it is not an integer, add the letter to letter
      } else {
        letter += str[i];
      }
    // if the index is a [, push all the results into arr
    // for the return statement
    } else {
      arr.push(letter);
      arr.push(parseInt(num));
      arr.push(str.substring([i]));
      break;
    }
  }
  return arr;
}

function decodeString(str) {
  let result = '';

  // split the first number from outer brackets, return an array
  // of letter, number, contents of following brackets
  let splitStr = splitType(str);
  let letter = splitStr[0];
  let num = splitStr[1];

  // return the string within the inner array
  let innerResult = findBracket(splitStr[2]);
  for (let i = 0; i < num; i++) {
    // if the result has more brackets, keep running the same
    // code
    if (innerResult.includes('[')) {
      result += decodeString(innerResult);
    // else, in the innermost array return the result
    } else {
    result += innerResult;
    }
  }
  return letter + result;
}

let s = '4[ab]';
let s2 = '2[b3[a]]';
console.log(decodeString(s)); // 'abababab'
console.log(decodeString(s2)); // 'baaabaaa'
