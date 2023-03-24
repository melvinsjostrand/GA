let month;
let datum;
let year;
  
// let json=[
//     {
//         "date": "230301",
//         "day": "Onsdag",
//         "activities": [
//             {
//                 "actId": "",
//                 "orgId": "",
//                 "org": "OmsFritid",
//                 "act": "Bowling med Alexandru",
//                 "info": "Bowlinghallen",
//                 "place": "Bowlinghallen",
//                 "start": {
//                     "date": "230301",
//                     "time": "16:00"
//                 },
//                 "end": {
//                     "date": "230301",
//                     "time": "18:00"
//                 }
//             }
//         ]
//     },
//     {
//         "date": "230302",
//         "day": "Torsdag",
//         "activities": [
//             {
//                 "actId": "",
//                 "orgId": "",
//                 "org": "OmsFritid",
//                 "act": "Pizza med Melvin",
//                 "info": "Pizza på pizzerian",
//                 "place": "Pizzerian",
//                 "start": {
//                     "date": "230302",
//                     "time": "19:00"
//                 },
//                 "end": {
//                     "date": "230302",
//                     "time": "20:00"
//                 }
//             }
//         ]
//     }
// ]
 
const m = ["Januari","Februari","Mars","April","May","Juni","Juli","Augusti","September","Oktober","November","December"];
let monthInfo=[];

function init(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    month = Number(urlParams.get("m"));
    year = Number(urlParams.get("y"));
    if(month === 0){
        let day = new Date();
        month = day.getMonth() + 1;
        year = Number(day.getFullYear().toString().substring(2,4));
        console.log(year);
    }
   
    console.log(month);
    getMonth();

    let rA = document.getElementById("rightArrow");
    rA.addEventListener("click", event=>{
        month++;
        if(month>12){
            month = 1;
            year++;
        } 
         
        location.href = "month.html?y=" + year+ "&m=" + month;   
        
        
    }) 

    let lA = document.getElementById("leftArrow");
    lA.addEventListener("click", event=>{
        month--;
        if(month<1){
            month = 12;
            year--;
        } 

        console.log(month);
        console.log(year);

        location.href = "month.html?y=" + year+ "&m=" + month;
    })  
}
 window.onload = init;

 async function getMonth(){
    datum = document.getElementById("date");

    console.log(month);
    console.log(year);

    let path = "https://omsorgapiapi.azure-api.net/Activity/"+ year +"/" + month;

    monthInfo = await getMonthFetch(path);

    //month = Number(json[0].date.substring(2,4));
    console.log(monthInfo);
    //days = m[month-1].days;
    //console.log(days);
    //counter = 0; 
    createHeader();
    for(let i=0;i<monthInfo.length;i++){
        createSection(i+1);
    }
 }

 function createSection(cont) {
    let section = document.createElement("section");
    let paragraph = document.createElement("p");
    let date = cont + "/" + month
    let text = document.createTextNode(date);
    paragraph.appendChild(text);
    section.appendChild(paragraph);
    
    monthInfo[cont-1].activities.forEach(element=>{
        paragraph = document.createElement("p");
        text = document.createTextNode(element.org);
        paragraph.appendChild(text);
        section.appendChild(paragraph);
    })
    
    datum.appendChild(section);
    section.style.cursor = "pointer";
    section.addEventListener("click",event=> {
        location.href="information.html?m="+month+"&d="+cont;
    })
}
function createHeader(Text){
    let headers = document.getElementsByTagName("h2");
    headers[0].innerHTML = m[month-1];
}

async function getMonthFetch(path){
    console.log(localStorage.getItem("GUID"));
    let response = await fetch(path, {
        headers:{
            "Authorization": localStorage.getItem("GUID")
        }
    });
    let json = await response.json();
    return json;
}

