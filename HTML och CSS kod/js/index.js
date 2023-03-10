let organisation = document.getElementsByTagName("main")[0];
let  OrganizationList = document.getElementsByTagName("ul")[0];


let json = [
    {
        "orgId": "string",
        "org": "Onsfritid",
        "image": "bass64"
    },
    {
        "orgId": "string",
        "org": "Onsdagis",
        "image": "bass64"
    },
    {
        "orgId": "string",
        "org": "Onsfritid",
        "image": "bass64"
    },
    {
        "orgId": "string",
        "org": "Onsfritid",
        "image": "bass64"
    },
    {
        "orgId": "string",
        "org": "Onsdagis",
        "image": "bass64"
    },
    {
        "orgId": "string",
        "org": "Onsfritid",
        "image": "bass64"
    },
    {
        "orgId": "string",
        "org": "Onsfritid",
        "image": "bass64"
    },
    {
        "orgId": "string",
        "org": "Onsdagis",
        "image": "bass64"
    },
    {
        "orgId": "string",
        "org": "Onsfritid",
        "image": "bass64"
    },
    {
        "orgId": "string",
        "org": "Onsfritid",
        "image": "bass64"
    },
    {
        "orgId": "string",
        "org": "Onsdagis",
        "image": "bass64"
    },
    {
        "orgId": "string",
        "org": "Onsfritid",
        "image": "bass64"
    },
    {
        "orgId": "string",
        "org": "Onsfritid",
        "image": "bass64"
    },
    {
        "orgId": "string",
        "org": "Onsdagis",
        "image": "bass64"
    },
    {
        "orgId": "string",
        "org": "Onsfritid",
        "image": "bass64"
    },
    {
        "orgId": "string",
        "org": "Onsfritid",
        "image": "bass64"
    },
    {
        "orgId": "string",
        "org": "Onsdagis",
        "image": "bass64"
    },
    {
        "orgId": "string",
        "org": "Onsfritid",
        "image": "bass64"
    },
    {
        "orgId": "string",
        "org": "Onsfritid",
        "image": "bass64"
    },
    {
        "orgId": "string",
        "org": "Onsfritid",
        "image": "bass64"
    },
    {
        "orgId": "string",
        "org": "Onsdagis",
        "image": "bass64"
    },
    {
        "orgId": "string",
        "org": "Onsfritid",
        "image": "bass64"
    },
    {
        "orgId": "string",
        "org": "Onsfritid",
        "image": "bass64"
    },
    {
        "orgId": "string",
        "org": "Onsdagis",
        "image": "bass64"
    },
    {
        "orgId": "string",
        "org": "Onsfritid",
        "image": "bass64"
    },
    {
        "orgId": "string",
        "org": "Onsfritid",
        "image": "bass64"
    },
    {
        "orgId": "string",
        "org": "Onsdagis",
        "image": "bass64"
    },
    {
        "orgId": "string",
        "org": "Onsfritid",
        "image": "bass64"
    },
    {
        "orgId": "string",
        "org": "Onsfritid",
        "image": "bass64"
    },
    {
        "orgId": "string",
        "org": "Onsdagis",
        "image": "bass64"
    },
    {
        "orgId": "string",
        "org": "Onsfritid",
        "image": "bass64"
    }
]


function init(){
    createOrg(0);
    
}
window.onload = init;
let uppload = document.getElementById("upploadbutton");
uppload.addEventListener("click",event=> {
    location.href = "createorg.html";
})


async function getOrg(){
    let path = "https://omsorgapiapi.azure-api.net/Organization";
    console.log(path);
    createorg = await getOrgFetch(path);
    
}

function CreateOrgList(element){
        let Orglist = document.createElement("li");
        let OrgName = document.createTextNode(element.org);
        Orglist.appendChild(OrgName);
        OrganizationList.appendChild(Orglist);
        console.log(Orglist);
}

function createOrg(cont) {
    json.forEach(element =>{
        orgSection(element);
        CreateOrgList(element);
        console.log(CreateOrgList);
    })
}

function orgSection(element){
    let Section = document.createElement("section");
        let Title = document.createElement("p");
        let OrgName = document.createTextNode(element.org);
        Title.appendChild(OrgName);
        Section.appendChild(Title);
        organisation.appendChild(Section);
}


async function getOrgFetch(path){
    let response = await fetch(path);
    let json = await response.json();
    return json;
}



