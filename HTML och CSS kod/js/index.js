let organisation;


let json = [
    {
        "orgId": "",
        "org": "OmsFritid",
        "image": "",
        "favorite": ""
    }
]


function unit(){
    createOrg();
}
// window.onload = init;



async function getOrg(){
    organisation = document.getElementById("organisation")

    let path = "https://omsorgapiapi.azure-api.net/Organization" + org ;

    createorg = await getOrgFetch(path);
    console.log(createorg);
}

function createOrg(cont) {
    let Section = document.createElement("section");
    let Title = document.createElement("em");

    createorg[cont+1].Organization.foreach(element=>{
        let Title = document.createElement("em");
        let OrgName = document.createTextNode(element.org);
        Title.appendChild(OrgName);
        Section.appendChild(Title);
    })
}

async function getOrgFetch(path){
    let response = await fetch(path);
    let json = await response.json();
    return json;
}



let uppload = document.getElementById("upploadbutton");
uppload.addEventListener("click",event=> {
    location.href = "createorg.html";
})