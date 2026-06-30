console.log("This is loaded from the external JS file");
var name = "Mary Katlin";
let school = "West Charlotte HighSchool";
var fun_fact = "I love classic cars";

console.log(`Name: ${name}`);
console.log(`School: ${school}`);
console.log(`Fun Fact: ${fun_fact}`);

document.getElementById("name").innerHTML = "<b>Name: </b><i>" + name + "</i>";
document.getElementById("school").innerHTML = "<b>School: </b><i>" + school + "</i>";
document.getElementById("fun_fact").innerHTML = "<b>Fun Fact: </b><i>" + fun_fact + "</i>";
