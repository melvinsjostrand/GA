let organisation = document.getElementsByTagName("main")[0];
let OrganizationList = document.getElementsByTagName("ul")[0];
let uppload = document.getElementById("upploadbutton");
let orgInfo = document.getElementsByTagName("section");
let orgId;
// let json = [
   
//     {
//         "orgId": "1",
//         "org": "Onsfritid",
//         "image": "bass64"
//     },
//     {
//         "orgId": "2",
//         "org": "Onsfritid",
//         "image": "bass64"
//     },
//     {
//         "orgId": "3",
//         "org": "Onsdagis",
//         "image": "bass64"
//     },
//     {
//         "orgId": "4",
//         "org": "Onsfritid",
//         "image": "bass64"
//     },
//     {
//         "orgId": "5",
//         "org": "Onsfritid",
//         "image": "bass64"
//     },
//     {
//         "orgId": "6",
//         "org": "Onsdagis",
//         "image": "bass64"
//     },
//     {
//         "orgId": "7",
//         "org": "Onsfritid",
//         "image": "bass64"
//     },
//     {
//         "orgId": "8",
//         "org": "Onsfritid",
//         "image": "bass64"
//     },
//     {
//         "orgId": "9",
//         "org": "Onsdagis",
//         "image": "bass64"
//     },
//     {
//         "orgId": "10",
//         "org": "Onsfritid",
//         "image": "bass64"
//     }
// ]
    let jsonOrg = [];
    
    //get ids
    var response = jsonOrg;
    var dataIds = response;
    dataIds.forEach(element => console.log(element.orgId));


function init(){
    getOrg();
    
    
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    orgId = Number(urlParams.get("Id"));
    
    

    uppload.addEventListener("click",event=> {
        location.href = "createorg.html";
    });
}
window.onload = init;


async function getOrg(){

    let path = "https://omsorgapi.azurewebsites.net/Organization/user";

    // jsonOrg = await getOrgFetch(path);
    for(let i=0;i<jsonOrg.length;i++){
        let element = jsonOrg[i];
        orgSection(element);
        CreateOrgList(element);
    }
}

function CreateOrgList(element){
        let Orglist = document.createElement("li");
        let OrgName = document.createTextNode(element.org);
        Orglist.appendChild(OrgName);
        OrganizationList.appendChild(Orglist);

        Orglist.addEventListener("click", event=>{
            location.href = "organisation.html?Id="+ element.orgId;
        });
}

function orgSection(element){
        let Section = document.createElement("section");
        let Title = document.createElement("p");
        let OrgName = document.createTextNode(element.org);
        Title.appendChild(OrgName);
        Section.appendChild(Title);
        organisation.appendChild(Section);

        Section.addEventListener("click", event=>{
            location.href = "organisation.html?Id="+ element.orgId;
        });
}

async function getOrgFetch(path){
    let response = await fetch(path);
    let json = await response.json();
    return json;
}



