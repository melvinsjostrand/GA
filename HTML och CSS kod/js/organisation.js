let creatact = document.getElementById("createact");
let orgId;
creatact.addEventListener("click",event=> {
    location.href = "uploadinformation.html";
})
 
let activities;
let jsonOrgTag = [];

// let json = {
//     "orgId": "1",
//     "org": "test",
//     "description": "Alla blaakasjdjfaliunvipartbauih vpnautilsef",
//     "image": "string",
//     "url": "string",
//     "orgCode": "string",
//     "activities": [
//         {
//             "actId": "int",
//             "org": "string",
//             "act": "string",
//             "info": "Bowling",
//             "place": "string",
//             "start": {
//                 "date": "21/03",
//                 "time": "13.00"
//             },
//             "end": {
//                 "date": "string",
//                 "time": "string"
//             }
//         },
//         {
//             "actId": "int",
//             "org": "string",
//             "act": "string",
//             "info": "string",
//             "place": "string",
//             "start": {
//                 "date": "string",
//                 "time": "string"
//             },
//             "end": {
//                 "date": "string",
//                 "time": "string"
//             }
//         },
//         {
//             "actId": "int",
//             "org": "string",
//             "act": "string",
//             "info": "string",
//             "place": "string",
//             "start": {
//                 "date": "string",
//                 "time": "string"
//             },
//             "end": {
//                 "date": "string",
//                 "time": "string"
//             }
//         },
//         {
//             "actId": "int",
//             "org": "string",
//             "act": "string",
//             "info": "string",
//             "place": "string",
//             "start": {
//                 "date": "string",
//                 "time": "string"
//             },
//             "end": {
//                 "date": "string",
//                 "time": "string"
//             }
//         },
//         {
//             "actId": "int",
//             "org": "string",
//             "act": "string",
//             "info": "string",
//             "place": "string",
//             "start": {
//                 "date": "string",
//                 "time": "string"
//             },
//             "end": {
//                 "date": "string",
//                 "time": "string"
//             }
//         },
//         {
//             "actId": "int",
//             "org": "string",
//             "act": "string",
//             "info": "string",
//             "place": "string",
//             "start": {
//                 "date": "string",
//                 "time": "string"
//             },
//             "end": {
//                 "date": "string",
//                 "time": "string"
//             }
//         },
//         {
//             "actId": "int",
//             "org": "string",
//             "act": "string",
//             "info": "string",
//             "place": "string",
//             "start": {
//                 "date": "string",
//                 "time": "string"
//             },
//             "end": {
//                 "date": "string",
//                 "time": "string"
//             }
//         },
//         {
//             "actId": "int",
//             "org": "string",
//             "act": "string",
//             "info": "string",
//             "place": "string",
//             "start": {
//                 "date": "string",
//                 "time": "string"
//             },
//             "end": {
//                 "date": "string",
//                 "time": "string"
//             }
//         },
//         {
//             "actId": "int",
//             "org": "string",
//             "act": "string",
//             "info": "string",
//             "place": "string",
//             "start": {
//                 "date": "string",
//                 "time": "string"
//             },
//             "end": {
//                 "date": "string",
//                 "time": "string"
//             }
//         },
//         {
//             "actId": "int",
//             "org": "string",
//             "act": "string",
//             "info": "string",
//             "place": "string",
//             "start": {
//                 "date": "string",
//                 "time": "string"
//             },
//             "end": {
//                 "date": "string",
//                 "time": "string"
//             }
//         },
//         {
//             "actId": "int",
//             "org": "string",
//             "act": "string",
//             "info": "string",
//             "place": "string",
//             "start": {
//                 "date": "string",
//                 "time": "string"
//             },
//             "end": {
//                 "date": "string",
//                 "time": "string"
//             }
//         },
//         {
//             "actId": "int",
//             "org": "string",
//             "act": "string",
//             "info": "string",
//             "place": "string",
//             "start": {
//                 "date": "string",
//                 "time": "string"
//             },
//             "end": {
//                 "date": "string",
//                 "time": "string"
//             }
//         },
//         {
//             "actId": "int",
//             "org": "string",
//             "act": "string",
//             "info": "string",
//             "place": "string",
//             "start": {
//                 "date": "string",
//                 "time": "string"
//             },
//             "end": {
//                 "date": "string",
//                 "time": "string"
//             }
//         },
//         {
//             "actId": "int",
//             "org": "string",
//             "act": "string",
//             "info": "string",
//             "place": "string",
//             "start": {
//                 "date": "string",
//                 "time": "string"
//             },
//             "end": {
//                 "date": "string",
//                 "time": "string"
//             }
//         },
//         {
//             "actId": "int",
//             "org": "string",
//             "act": "string",
//             "info": "string",
//             "place": "string",
//             "start": {
//                 "date": "string",
//                 "time": "string"
//             },
//             "end": {
//                 "date": "string",
//                 "time": "string"
//             }
//         },
//         {
//             "actId": "int",
//             "org": "string",
//             "act": "string",
//             "info": "string",
//             "place": "string",
//             "start": {
//                 "date": "string",
//                 "time": "string"
//             },
//             "end": {
//                 "date": "string",
//                 "time": "string"
//             }
//         }
//     ]
// }

function init() {

    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    orgId = Number(urlParams.get("Id"));

    activities = document.getElementById("text");
    getjson();
}
window.onload = init;



async function getjson(){

    let path = "https://omsorgapi.azurewebsites.net/Activity/org/" + orgId;

    jsonOrgTag = await getOrg(path);

    getName();
    createdescription();
    createlink();
    jsonOrgTag.activities.forEach(element=>{
        createActivity(element);
    })

    function createActivity(element){
    let paragraph = document.createElement("p");
    let text = element.start.date + " " + element.info + " " + element.start.time; 
    let tN = document.createTextNode(text);
    paragraph.appendChild(tN);
    activities.appendChild(paragraph);
    }

    function createlink(){
        let Link = document.getElementById("link").innerHTML = jsonOrgTag.org;

        Link.addEventListener("click", event=>{
            location.href = jsonOrgTag.url;
        });
    }

    function getName() {
        let Orgpos = document.getElementById("organisation-name");
        let OrgNameTag = document.getElementsByTagName("h2");
        let OrgName = document.createTextNode(jsonOrgTag.org);
        OrgNameTag[0].appendChild(OrgName);
        Orgpos.appendChild(OrgNameTag[0]);
        console.log(Orgpos);
    }


    function createdescription(){
        let Orgpos1 = document.getElementById("Organisation-description");
        let OrgDescriptionTag = document.createElement("p");
        let OrgDescription = document.createTextNode(jsonOrgTag.description);
        OrgDescriptionTag.appendChild(OrgDescription);
        Orgpos1.appendChild(OrgDescriptionTag);

        OrgDescriptionTag.addEventListener("click", event=>{
            location.href = "information.html?Id="+ orgId;
        });
    }

}

async function getOrg(path){
    console.log(localStorage.getItem("GUID"));
    let response = await fetch(path, {
        headers:{
            "Authorization": localStorage.getItem("GUID")
        }
    });
    let json = await response.json();
    return json;
}