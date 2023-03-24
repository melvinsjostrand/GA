let json =[{
    "date": "230324",
    "day": "fredag",
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


let time;

function init(){
    time = document.getElementById("time");
    console.log(time);

    json.forEach(element=>{
        console.log(element);
        time.innerHTML = element.tid + " " + element.org;

        createSection(element);
    })

}

window.onload = init;

function createSection(el){

    let sections = document.getElementsByClassName("gridsection2");
    console.log(sections[0]);

    let section = document.createElement("section");
  
    let h3 = document.createElement("h3");
    h3.innerHTML = el.org;
    console.log(h3);

    section.appendChild(h3);
   

    let paragraph = document.createElement("p");
    let t = el.tid + " " + el.info;
    let text = document.createTextNode(t);
    paragraph.appendChild(text);
    console.log(paragraph);
    section.appendChild(paragraph);
    console.log(section);

    sections[0].appendChild(section);
}

// async function getFetch(path){
//     const response = await fetch(path);
//     const json = await response.json();
//     return json
// }