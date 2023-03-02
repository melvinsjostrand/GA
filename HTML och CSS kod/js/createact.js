let form;
//const backurl = "https://omsapp.te-vxo.se/index.html";
const serverurl = "";

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
    let starttime = form.elements.start_time.value;
    let endtime = form.elements.end_time.value;
    let information = form.elements.upload_information.value;

    //230301T12:20"
    console.log(location);
    console.log(starttime);
    console.log(endtime);
    console.log(information)
}

let JSON = {
    "act": "Titel",
    "place": location,
    "info": information,
    "starttime": {
        "date":starttime ,
        "time": starttime
    },
    "endtime": {
        "date": endtime,
        "time": endtime
    }

}

const response = {
    header:{
        method: "POST"
    },
    body : JSON
}

fetch(serverurl,response)
    .then(Response => {
        return Response.json();
    })
    .then(data => {
        console.log(data)
    })