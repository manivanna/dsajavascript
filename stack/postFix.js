"use strict";
const Stack = require("./Stack.js");
/*
1.Scan expression character by character,
2.If character is a number push it in stack
3.If character is operator then pop two elements from stack
perform the operation and put the result back in stack
At the end, Stack will contain result of whole expression.
*/
function evaluatePostfix(exp) {
  let myStack = new Stack();
  var op1, op2;
  for (var i = 0; i < exp.length; i++) {
    if (!isNaN(parseInt(exp[i], 10))) {
      //parseInt parses a string and returns an integer
      myStack.push(parseInt(exp[i], 10));
    } else {
      op1 = myStack.pop();
      op2 = myStack.pop();
      if (exp[i] == "+") {
        myStack.push(op1 + op2);
      } else if (exp[i] == "-") {
        myStack.push(op2 - op1);
      } else if (exp[i] == "*") {
        myStack.push(op1 * op2);
      } else if (exp[i] == "/") {
        myStack.push(op2 / op1);
      }
    }
  }

  return myStack.pop();
}
console.log('expression - "921*-8-4+"');
console.log("Result: " + evaluatePostfix("921*-8-4+"));
