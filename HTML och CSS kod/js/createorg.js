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
    let image = form.elements.filename.files;
    let url = form.elements.url.value;

    console.log(description);
    console.log(org);
    console.log(image);

    let json = {
        "org":org,
        "description":description,
        "image":image,
        "url":url
    }
}

/*async function postFetch(getFormData , token , json){
    const reponse = await fetch(getFormData ,{
        method:"post",
        mode:"cors",
        Headers:{
            "content-type":application,
            "authorazation":token
        },
        body:json.string(json)
    })
    return Response.status;
}
*/