let organisation = document.getElementsByTagName("main")[0];
let OrganizationList = document.getElementsByTagName("ul")[0];
let uppload = document.getElementById("upploadbutton");

// let json = [
   
//     {
//         "orgId": "string",
//         "org": "Onsfritid",
//         "image": "bass64"
//     },
//     {
//         "orgId": "string",
//         "org": "Onsfritid",
//         "image": "bass64"
//     },
//     {
//         "orgId": "string",
//         "org": "Onsdagis",
//         "image": "bass64"
//     },
//     {
//         "orgId": "string",
//         "org": "Onsfritid",
//         "image": "bass64"
//     },
//     {
//         "orgId": "string",
//         "org": "Onsfritid",
//         "image": "bass64"
//     },
//     {
//         "orgId": "string",
//         "org": "Onsdagis",
//         "image": "bass64"
//     },
//     {
//         "orgId": "string",
//         "org": "Onsfritid",
//         "image": "bass64"
//     },
//     {
//         "orgId": "string",
//         "org": "Onsfritid",
//         "image": "bass64"
//     },
//     {
//         "orgId": "string",
//         "org": "Onsdagis",
//         "image": "bass64"
//     },
//     {
//         "orgId": "string",
//         "org": "Onsfritid",
//         "image": "bass64"
//     },
//     {
//         "orgId": "string",
//         "org": "Onsfritid",
//         "image": "bass64"
//     },
//     {
//         "orgId": "string",
//         "org": "Onsdagis",
//         "image": "bass64"
//     },
//     {
//         "orgId": "string",
//         "org": "Onsfritid",
//         "image": "bass64"
//     }
// ]
let jsonOrg = [];
function init(){
    getOrg();
    
    
    uppload.addEventListener("click",event=> {
    location.href = "createorg.html";
    })
}
window.onload = init;

async function getOrg(){

    let path = "https://omsorgapiapi.azure-api.net/Organization/User?=";

    jsonOrg = await getOrgFetch(path);
    for(let i=0;i<jsonOrg.length;i++){
        let element = jsonOrg[i];
        orgSection(element);
        CreateOrgList(element);
        
       // createOrg();
    }
}

async function createOrg() {
    jsonOrg.forEach(element =>{
        orgSection(element);
        CreateOrgList(element);
        console.log(orgSection);
        console.log(jsonOrg); 
        
    })    
}

function CreateOrgList(element){
        let Orglist = document.createElement("li");
        let OrgName = document.createTextNode(element.org);
        Orglist.appendChild(OrgName);
        OrganizationList.appendChild(Orglist);
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



