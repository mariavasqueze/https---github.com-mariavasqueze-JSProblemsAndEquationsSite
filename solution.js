//////////////Solution 1//////////////////////
// Function to calculate the tip amount that most be paid: 

// if you don't add an onclick on the html element, must add this:
// document.getElementById("calculate-tip").addEventListener("click", tips);

function tips(){

    let totalBill = document.getElementById("amount").value;
    let result = document.getElementById("result");
    let tips = totalBill * 0.2;

    return result.innerHTML = ("Tip on $" + totalBill + " is: $" + tips.toFixed(2)); 
}

//////////////Solution 2//////////////////////
// Change background color of document when the button is pressed, based on color value (parameter)

function changeColor(color){
    let body = document.querySelector("body");
    body.style.backgroundColor = color;
}

//////////////Solution 3//////////////////////
// Convert F to C by using promot and alert methods

// let fahrenheit = prompt("Script Prompt: \nEnter Fahrenheit temperature ");
// let celsius = (fahrenheit - 32) * 0.5556;

// alert("Fahrenheit temperature is " + fahrenheit + "\nCelsius temperature is " + Math.round(celsius));



//////////////Solution 4//////////////////////
let x = 0;
let arr = [];

// Add to array button function
function addToArray(){
    arr[x]= document.getElementById("arrayElement").value;
    x++;
    console.log(arr); //to check 
}

// Display button function  
function displayResult(){
    
    //sort and find which elements are equal, which repeat the most, 
    let count = {};
    let mostFrequent; 

    function findMostFrequent(){
        for (let i = 0; i < arr.length; i++){
            let input = array[i];

            if(count[input] === 0){
                count[input] = 1;
            }
            else {
                count[input] = count[input] +1;
            }
            if(count[input] > x){
                x = count[input];
                mostFrequent = arr[i];
            }
        }
        return mostFrequent;
    }
     //https://amjustsam.medium.com/how-to-find-most-frequent-item-of-an-array-12015df68c65
     
    document.getElementById("result4a").innerHTML = `The Array is: ${arr}`;
    document.getElementById("result4b").innerHTML = `The element ${mostFrequent} appears ${count} times.`;
    return arr;

    
    console.log(displayResult()); //to check
}


//////////////Solution 5//////////////////////
let image = document.querySelector("img");

function mouseOver(){
    image.src = "/images/blue.jpg";
}
function mouseOut(){
    image.src = "/images/green.jpg";
}
function mouseEnter(){
    image.src = "/images/orange.jpg";
}
function mouseLeave(){
    image.src = "/images/pink.jpg";
}

//////////////Solution 6//////////////////////


//////////////Solution 7//////////////////////



