let form;
let srcdata;
const backurl = "https://omsapp.te-vxo.se/index.html";

function init(){

    form = document.querySelector("form");

    form.addEventListener("submit", event=>{
        getFormData();
        //location.href = backurl;
        event.preventDefault();
    })

    let li = document.getElementById("account");
    console.log(li);

    if (localStorage.getItem("GUID")) {
        createLink(li, "Logga ut", "logout.html");
    } else {
        createLink(li, "Logga in", "account.html");
    }

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
            "image":srcdata,
        }

        console.log(Json);
    
        let status = await postFetch(Json);

        console.log(status);
        if(status === 201){
			console.log("Organisationen skapad");
			location.href = "index.html";
		}else{
			console.log("Det gick inte att skapa organisationen");
		}

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
        headers:{
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

function createLink(li, text, href) {
    let a = document.createElement("a");
    a.innerText = text;
    a.href = href;
    li.innerHTML = "";
    li.appendChild(a);
}