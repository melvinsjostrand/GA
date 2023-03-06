let form;
const backurl = "https://omsapp.te-vxo.se/index.html";

function init(){

    form = document.querySelector("form");

    form.addEventListener("submit", event=>{
        getFormData();
     //   location.href = backurl;
        event.preventDefault();
    })

}

window.onload = init;

function getFormData(){
    let org = form.elements.createorg.value;
    let description = form.elements.desc.value;
    let image = form.elements.fileinput.files;

        console.log(description);
        console.log(org);
        console.log(image);
}



const fileInput = document.getElementById("fileinput");

fileInput.addEventListener("change", e =>{
    console.log(e);
    const file = fileInput.files[0];
    const reader = new FileReader();

        reader.addEventListener("load", () => {
        console.log(reader.result);

    });

        reader.readAsDataURL(file);
});


async function postFetch(getFormData , token , json){
    const reponse = await fetch(getFormData ,{
        method:"post",
        mode:"cors",
        Headers:{
            "content-type":application,
            "authorazation":token
        },
        body:json.stringify({
        Image:"string : base64",
        org:"orgdata",
        description:"descriptiondata"
        })
    })
    const json = await return respone.json();
    
}
