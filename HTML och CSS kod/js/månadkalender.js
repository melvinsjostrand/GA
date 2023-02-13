let Month = document.getElementById("Month");
let section = document.createElement("section");
let paragraph = document.createElement("p");
let text = paragraph.createTextNode("day");
paragraph.appendChild(text);
section.appendChild(paragraph);
Month .appendChild(section);

// paragraph.className= "paragraph";

let cauntdays = 31;
let counter;
let month = ("January", "February", "March","April","May","June","July","August","September","October","November","December");

function init(){
    days = 1;
    counter = 0; 
    createheader(month[month-1]);
}

    console.log();


    console.log(createheader[0]);

windows.onload = init;

function createSection(cont, mon) {
    let day = cont + "1" + mon;
    let section = cont + "1" + mon;
    let paragraph = cont + "1" + mon;
    let text = cont + "1" + mon;
}

section.addEventListener("click"); {
    location.href="...";
}   

function createheader(Text){
    let headers = getElementByTasName("h2");
    headers[0].innerHTML = text;
}

