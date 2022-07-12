//Function

function sum(num1, num2){
    return num1+num2;
}
console.log(sum(4,5))



// program to print a text
// declaring a function
function greet() {
    console.log("Hello there!");
}

// calling the function
greet();


//The syntax to declare a function is:
function sum(num1, num2){
    console.log(4+5);
}
sum();

//Calling a function
function sayThanks(name){
    console.log('Thank you very much!' + " " + name );
}
sayThanks('A');
sayThanks('Brehms');
sayThanks('C');




//Parameters and Arguments

function calculateArea(width, height){
    console.log(width + height)
}
calculateArea(10,10);


//Default Parameters
function greeting(name = 'stranger'){
    console.log(`Hello, ${name}`)
}
greeting('Nick');
greeting();


//Function Return

function monitorCount(rows, columns) {
    return rows * columns;
  }
  
  const numOfMonitors = monitorCount(5, 4);
  
  console.log(numOfMonitors);
  
  