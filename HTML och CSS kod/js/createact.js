let form;
//const backurl = "https://omsapp.te-vxo.se/index.html";

function init(){

    form = document.querySelector("form");

    form.addEventListener("submit", event=>{
        getFormData();
        event.preventDefault();
    })
}

window.onload = init;

function getFormData(){
    let location = form.elements.location.value;
    //230301T12:20"
    //let description = form.elements.desc.value;
    //let image = form.elements.filename.files;

    console.log(location);

    let json = {
        "org":org,
        "description":description,
        "image":image
    }
}
