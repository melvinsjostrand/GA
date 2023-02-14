let datum;
let img;
/*let section = document.createElement("section");
let paragraph = document.createElement("p");
let text = paragraph.textContent = "day";*/
//paragraph.appendChild(text);
//section.appendChild(paragraph);
//datum.appendChild(section);
let month = 1;   

// paragraph.className= "paragraph";

const m = [{month:"Januari", days:31},{month:"Februari", days:28},{month:"Mars", days:31}]

// let cauntdays = 31;
// let counter;
// let months = ("January", "February", "March","April","May","June","July","August","September","October","November","December");

//    text

function init(){
    datum = document.getElementById("datum");
    days = m[month-1].days;
    console.log(days);
    counter = 0; 
    //let key = "january";
    /*for(let i = 0; i < m.length; i++){
        if(m[i].month == key){
            for(let j = 1; i <= m[i].days; i++ ){
                const section = document.createElement("section");
                const date = document.createElement("p");
                date.textContent = j;
                section.appendChild(date);
                datum.appendChild(section);
            }
        }
    }*/

    createHeader();
    for(let i=0;i<days;i++){
        createSection(i+1);
    }
}
 window.onload = init;


 function createSection(cont) {
//     let day = cont + "1" + mon;
//     let section = cont + "1" + mon;
//     let paragraph = cont + "1" + mon;
//     let text = cont + "1" + mon;
    let section = document.createElement("section");
    let paragraph = document.createElement("p");
    let date = cont + "/" + month
    let text = document.createTextNode(date);
    paragraph.appendChild(text);
    section.appendChild(paragraph);
    datum.appendChild(section);
    section.style.cursor = "pointer";
    section.addEventListener("click",event=> {
            location.href="https://teknikum.se";
    })
}
    // document.getElementsByTagName("img");
    // img.style.cursor = "pointer";


// section.addEventListener("click"); {
//     location.href="...";
// }   

function createHeader(Text){
    let headers = document.getElementsByTagName("h2");
    headers[0].innerHTML = m[month-1].month;
}

