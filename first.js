console.log("Har");
// alert("firts");
//document.write("write to document");

console.log("Hello world");
// document.write("THis is write");

// variables
var n1 = 34;
var n2= 56;
console.log(n1+n2);

//Data Types in js
var str = "My String";
var str2 = 'single quotes string';

var num1 = 34.5;
var num2 = 56.4;

//objects
var name = {
    harshit: "Garg",
    satish: "chand"
}

console.log(name);

var a = true;
var b = false;
console.log(a, b);

//undefined //null
//both different

var myArr = [1,2,3,4,5];

console.log(myArr)


function avg(a,b) {
    temp=4;
    return (a+b)/2;
}

console.log(avg(2,4));
console.log(temp);


click = document.getElementById("click")

$('#click').on('click',() => {console.log("I am a button jquery")})

click.addEventListener('click',() => {console.log("I am a button")})



clr = setInterval(()=>console.log("set interval"), 2000);

tout = setTimeout(()=>{console.log("set timeout");clearInterval(clr);}, 6000);

// clearTimeout(tout)


//localStorage
//setItem, removeItem, clear

obj = {name: "harry", size: 1}

jso = JSON.stringify(obj)

console.log(jso);

parsed = JSON.parse(jso)

console.log("Parsed: ", parsed);


//Template literals backtick ``

console.log(`Harshit ka JSON ${jso}`);



// console.clear();