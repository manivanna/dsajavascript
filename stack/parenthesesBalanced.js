"use strict";
const Stack = require("./Stack.js");

function isBalanced(exp) {
  var myStack = new Stack();
  for (var i = 0; i < exp.length; i++) {
    if (exp[i] == "}" || exp[i] == ")" || exp[i] == "]") {
      if (myStack.isEmpty()) {
        return false;
      }
      let output = myStack.pop();
      if (
        (exp[i] == "}" && output != "{") ||
        (exp[i] == ")" && output != "(") ||
        (exp[i] == "]" && output != "[")
      ) {
        return false;
      }
    } else {
      myStack.push(exp[i]);
    }
  }
  //after complete traversal of string exp, if there's any opening parentheses left
  //in stack then also return false.
  if (myStack.isEmpty() == false) {
    return false;
  }
  //At the end return true if you haven't encountered any of the above false conditions.
  return true;
}

var inputString = "{[()]}";
console.log(inputString);
console.log(isBalanced(inputString));

inputString = "{[([({))]}}";
console.log(inputString);
console.log(isBalanced(inputString));
