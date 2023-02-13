let days = document.getElementById("month");
let section = document.createElement("section");
let paragraph = document.createElement("p");
let text = paragraph.createTextmode("day");
paragraph.appendChild(text);
section.appendChild(paragraph);
days.appendChild(paragraph);
days.appendChild(section);

paragraph.className= "paragraph";

let cauntdays = 31;
let month = 3;
let counter;
let month = ("January", "February", "March","April","May","June","July","August","September","October","November","December");

function init(){
    days = 1;
    counter = 0; 
    createheader(month[month-1]);
}

    console.log(createheader[0]);

windows.onload = init;

function createSection(cont, mon) {
    let day = cont + "1" + mon;
    let section;
    let paragraph;
    let text;
}

section.addEventListener("click"); {
    location.href="...";
}

function createheader(Text){
    let headers = getElementByTasName("h2");
    headers[0].innerHTML = text;
}

// let section = document.createElement(“section”);
// let paragraph = document.createElement(“p”)
// let text = paragraph.createTextmode(“day”)
// paragraph.apppendChild(Text)
// section.appendchild(paragraph)M
// days,appendchild(section);
