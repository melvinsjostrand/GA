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
    verify();

    async function verify(){
        let userverify = "https://omsorgapi.azurewebsites.net/Login/verify";
        let response = await fetch(userverify, {
            headers:{
                "Authorization": localStorage.getItem("GUID")
            }
        });
    
        let role = await response.text();
        console.log(role);
    
        if(role==="Vanlig"){
            document.getElementById("createact").style.display = "none";
        }
        else if(role==="Organisation", "Admin"){  
            document.getElementById("createact").style.display = "block";
        }
        return role;
    }
}
window.onload = init;



async function getjson(){

    let path = "https://omsorgapi.azurewebsites.net/Activity/org/" + orgId;

    jsonOrgTag = await getOrg(path);
    console.log(jsonOrgTag.orgCode);
    getName();
    getcode();
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

    paragraph.addEventListener("click", event=>{
        location.href = "information.html?Id="+ orgId;
    });
    }

    function createlink(){
        let Link = document.getElementById("link");
        let orgLink = document.createTextNode(jsonOrgTag.url);
        console.log(orgLink)
        Link.appendChild(orgLink);
        Link.href = jsonOrgTag.url;

    }

    function getcode(){
        let Codetext = document.getElementById("code");
        let Orgkey = document.createTextNode(jsonOrgTag.orgCode);
        Codetext.appendChild(Orgkey);

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