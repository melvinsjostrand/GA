let form;
let srcdata;
const backurl = "https://omsapp.te-vxo.se/index.html";

function init(){

    form = document.querySelector("form");

    form.addEventListener("submit", event=>{
        getFormData();
        location.href = backurl;
        event.preventDefault();
    })

}

window.onload = init;

async function getFormData(){
    let org = form.elements.createorg.value;
    let description = form.elements.desc.value;
    //let image = form.elements.fileinput.files;

        console.log(description);
        console.log(org);
        console.log(srcdata);
        Json={            
            "org":org,
            "description":description,
            "image":""
        }

        console.log(Json);
    
        let status = await postFetch(Json);

        console.log(status);

}



const fileInput = document.getElementById("fileinput");

fileInput.addEventListener("change", e =>{
    console.log(e);
    const file = fileInput.files[0];
    const reader = new FileReader();

        reader.addEventListener("load", () => {
        console.log(reader.result);
        srcdata = reader.result;

    });

        reader.readAsDataURL(file);
});


async function postFetch(json){
    let path = "https://omsorgapi.azurewebsites.net/Organization";
    console.log( localStorage.getItem("GUID"));
    const response = await fetch(path ,{
        method:"POST",
        mode:"cors",
        Headers:{
            "content-type":"application/json",
            "authorization":  localStorage.getItem("GUID")
        },
        body:JSON.stringify(json)
    })

   return response.status;
    
}

async function GetOrgFetch(path){
    console.log(localStorage.getItem("GUID"));
    let response = await fetch(path, {
        headers:{
            "Authorization": localStorage.getItem("GUID")
        }
    });
    let json = await response.json();
    return json;
}

