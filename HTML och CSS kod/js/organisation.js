let creatact = document.getElementById("createact");
creatact.addEventListener("click",event=> {
    location.href = "uploadinformation.html";
})
 
let activities;

let json = {
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
}

function init() {
    activities = document.getElementById("text");
    getjson();

}
window.onload = init;



function getjson() {
    getName();

    json.activities.forEach(element=>{
        createActivity(element);
    })
    
}


function getName() {
    let Orgpos = document.getElementById("organisation-name");
    let Orgpos1 = document.getElementById("Organisation-description");
    let OrgNameTag = document.getElementsByTagName("h2");
    let OrgName = document.createTextNode(json.org);
    OrgNameTag[0].appendChild(OrgName);
    Orgpos.appendChild(OrgNameTag[0]);
    console.log(Orgpos);

    OrgName = document.createTextNode(json.org);
    OrgNameTag[1].appendChild(OrgName);
    Orgpos1.appendChild(OrgNameTag[1]);
}

function createActivity(el){
    let paragraph = document.createElement("p");
    let text = el.start.date + " " + el.info; 
    let tN = document.createTextNode(text);
    paragraph.appendChild(tN);
    activities.appendChild(paragraph);
}



