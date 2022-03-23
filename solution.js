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
    let count = [];
    let mostFrequent; 

    

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
            mostFrequent += arr[i];
        }
    }
     
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
function selectNewsHeadline(){
    let newsContent = ["On Sunday, the Saskatchewan Health Authority informed Prairie Spirit School Division of a case of COVID-19 in an individual at Warman Community Middle School. The school division says those affected have been notified.", "Hamilton Public Health reported 74 new COVID-19 cases on the weekend and five more deaths involving four long-term care (LTC) homes plus one in the community.", "The spirit of giving is coming a little earlier this year as volunteers gather at Place Émilie-Gamelin in Montreal on Sunday to distribute food to the homeless.", "RCMP in Lake Louise are warning of hefty fines if residents do not adhere mandatory COVID-19 rules. In a statement, the detachment said anyone who is found breaking a mandatory measure implemented by the province can face a fine of up to $1,000.", "Alberta Premier Jason Kenney calls an attempt by the Michigan government to shutdown the Enbridge Line 5 pipeline very concerning and a continued effort to landlock Canadian energy."];
    
    let headlines = document.getElementsByName("headline")[0].selectedIndex;

    let displayNews = document.getElementById("news");
    
    return displayNews.innerText = newsContent[headlines];

}

//////////////Solution 7//////////////////////
function CalculateRoots(){
    let A = document.getElementById("a").value;
    let B = document.getElementById("b").value;
    let C = document.getElementById("c").value;
    
    let printResult = document.getElementById("soln");

    // Check if values are valid: 
    if (A < -99 || A > 99){
        document.getElementById("a").style.borderColor = "red";
    } else if (A === 0){
        console.error("Value Can't be 0");
    }
    else if (B < -99 || B > 99){
        document.getElementById("b").style.borderColor = "red"
    }
    else if (C < -99 || C > 99){
        document.getElementById("c").style.borderColor = "red"
    } 
    else {
        //Calculation 
        let b_squared = B * B;
        let secondSection = 4 * A * C;
        let sqr_root = Math.sqrt(b_squared - secondSection);
        let denominator = 2 * A; 
        let root1 = (-B + sqr_root) / denominator;
        let root2 = (-B - sqr_root) / denominator;
    
        if(b_squared < secondSection){
            printResult.innerHTML = "Solution: x's roots are imaginary";
        } else if (b_squared === secondSection){
            printResult.innerHTML = "Solution: x = single-root";
        } else {
            printResult.innerHTML = `Solution: x= ${root1.toFixed(3)}, x= ${root2.toFixed(3)}`;
        }
    }   
}
//Ex: -5, 5, 5 = -0.618 and 1.618