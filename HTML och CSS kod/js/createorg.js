let form;

function init(){

    form = document.querySelector("form");

    form.addEventListener("submit", event=>{
        getFormData();
      // location.href = "https://omsapp.te-vxo.se/index.html";
        event.preventDefault();
    })
}

window.onload = init;

function getFormData(){
    let org = form.elements.createorg.value;
    let description = form.elements.desc.value;
    let image = form.elements.filename.files;

    console.log(description);
    console.log(org);
    console.log(image);

    let json = {
        "org":org,
        "description":description,
        "image":image
    }
}
