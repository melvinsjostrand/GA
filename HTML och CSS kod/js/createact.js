const formEl = document.querySelector('.form');

formEl.addEventListener('submit', event => {
    event.preventDefault();

    const formdata = new FormData(formEl);
    const data = new URLSearchParams(formdata)
    
    fetch('api', {
        method: 'POST',
        body: data
    }).then(res => res.json())
    .then (data => console.log(data))
    .catch(error => console.log(error))

});

let form;
//const backurl = "https://omsapp.te-vxo.se/index.html";
const serverurl = "";

async function postFetch(path, token , JSON){
    const response = await fetch(path ,{
    method: "post",
    mode:"cors",
    headers:{
    "content-type":application,
    "authorization":token
    },
    body:JSON.stringify(JSON)
    });
    return response.status;
}

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
