let username = "JackOfAllTrades";
//let userCheck = /^\D(\D+\d*$|\d\d+$)/i; // Change this line
let userCheck = /^[a-z]([a-z]+[0-9]*$|[0-9][0-9]+$)/i; // Change this line
let result = userCheck.test(username);
