
let orgId;
let jsonAct = [];

function init(){
    getActivities();

}
window.onload = init;

async function getActivities(){

    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    let month = Number(urlParams.get("m"));
    let day = Number(urlParams.get("d"));
    let orgId = Number(urlParams.get("Id"))

    let path = "https://omsorgapi.azurewebsites.net/Activity/org/"+ orgId + "/";
    console.log(path);
    jsonAct = await getactFetch(path);
    jsonAct.activities.forEach(element =>{
        daycalendar(element);
        createSection(element);
    })
}

function daycalendar(element)  {
    let calendar = document.getElementsByClassName("Dag-Infokalender");
    let paragraph = document.createElement("p");
    let orgplustime = element.start.time + " " + element.org;
    let tN = document.createTextNode(orgplustime);
    paragraph.appendChild(tN);
    calendar[0].appendChild(paragraph);
}

function createSection(element){
    let position = document.getElementsByClassName("gridsection2");
    let section = document.createElement("section");
    let main = document.getElementById("main");
    

    let title = document.createElement("h3");
    let TN = document.createTextNode(element.org);
    title.appendChild(TN);


    let paragraph = document.createElement("p");
    let t = element.start.time + " " + element.info + " " + element.start.date;
    let infoN = document.createTextNode(t);
    paragraph.appendChild(infoN);

    main.appendChild(position[0]);
    position[0].appendChild(section);
    section.appendChild(title);
    section.appendChild(paragraph);
}

async function getactFetch(path){
    console.log(localStorage.getItem("GUID"));
    let response = await fetch(path, {
        headers:{
            "Authorization": localStorage.getItem("GUID")
        }
    });
    let json = await response.json();
    return json;
}
