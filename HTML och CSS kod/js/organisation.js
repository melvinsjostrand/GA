let creatact = document.getElementById("createact");
creatact.addEventListener("click",event=> {
    location.href = "uploadinformation.html";
})
 
let json = [{
    "org": "test",
    "description": "Alla blaakasjdjfaliunvipartbauih vpnautilsef",
    "image": "string",
    "url": "string",
    "orgCode": "string",
    "activities": [
        {
            "actId": "int",
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
}]

function init() {
    getjson();

}
window.onload = init;



function getjson() {
    json.forEach(element => {
        getName(element);
    })
}


function getName(element) {
    let Orgpos = document.getElementById("organisation-name");
    let OrgNameTag = document.getElementsByTagName("h2");
    let OrgName = document.createTextNode(element.org);
    OrgNameTag.appendChild(OrgName);
    Orgpos.appendChild(OrgNameTag);
}



