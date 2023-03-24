let json =[
    {
        "date": "230324",
        "day": "fredag",
        "activities": 
        [
            {
                "actId": "int",
                "orgId": "int",
                "org": "Fritid",
                "act": "bowlings",
                "info": "informationadasdgeargartadfgawerfasdfag",
                "place": "location",
                "start": 
                {
                    "date": "2303245",
                    "time": "13.00"
                },
                "end": 
                {
                    "date": "string",
                    "time": "string"
                }
            }
        ]
    }
]


// Json={            
//     "place":location,
//     "act":act,
//     "info":upload_information,
//     "start":{
//         "date":st[0],
//         "time":st[1]
//     },
let Jsonactivity = json;

function init(){
    activities();


}

function activities(){

    for(let i=0;i<Jsonactivity.length;i++){
        let element = Jsonactivity[i];
        daycalendar(element);
    }
}

window.onload = init;

// function day(element){

// }

function daycalendar(element)  {
    let calendar = document.getElementsByClassName("Dag-Infokalender");
    let paragraph = document.createElement("p");
    let orgplustime = element.time + " " + element.org;
    console.log(orgplustime);
    orgplustime.appendChild(paragraph);
    calendar.appendChild(paragraph);
    console.log(calendar);
}








// function createSection(element){

//     let position = document.getElementsByClassName("gridsection2");
//     let section = document.createElement("section");
//     console.log(section);

//     let title = document.createElement("h3");
//     title = element.org;
//     position.appendChild(title);
   

//     let paragraph = document.createElement("p");
//     let t = el.tid + " " + el.info;
//     let text = document.createTextNode(t);
//     paragraph.appendChild(text);
//     console.log(paragraph);
//     section.appendChild(paragraph);
//     console.log(section);

//     sections[0].appendChild(section);
//     }

// async function getFetch(path){
//     const response = await fetch(path);
//     const json = await response.json();
//     return json
// }