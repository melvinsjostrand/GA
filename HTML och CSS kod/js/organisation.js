let creatact = document.getElementById("createact");
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
    activities = document.getElementById("text");
    getjson();
}
window.onload = init;



async function getjson(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    orgId = Number(urlParams.get("Id"));
    console.log(orgId);

    let path = "https://omsorgapiapi.azure-api.net/Activity/org/" + orgId;
    console.log(path);


    jsonOrgTag = await getOrg(path);

    getName();
    createdescription();
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
        console.log(OrgDescriptionTag);
    }

}



 


async function getOrg(path){
    let response = await fetch(path);
    let json = await response.json();
    return json;
}