let month = 1;
  
let json=[
    {
        "date": "string (yyMMdd)",
        "day": "string",
        "activities": [
            {
                "actId": "int",
                "orgId": "int",
                "org": "string",
                "act": "string",
                "info": "string",
                "place": "string",
                "start": {
                    "date": "string",
                    "time": "string"
                },
                "end": {
                    "date": "string",
                    "time": "string"
                }
            }
        ]
    }
]
 
const m = [{month:"Januari", days:31},{month:"Februari", days:28},{month:"Mars", days:31}]
function init(){
    datum = document.getElementById("date");
    days = m[month-1].days;
    console.log(days);
    counter = 0; 
    createHeader();
    for(let i=0;i<days;i++){
        createSection(i+1);
    }
}
 window.onload = init;


 function createSection(cont) {
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
function createHeader(Text){
    let headers = document.getElementsByTagName("h2");
    headers[0].innerHTML = m[month-1].month;
}

