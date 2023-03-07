let form;
const backurl = "https://omsapp.te-vxo.se/index.html";

function init(){

    form = document.querySelector("form");

    form.addEventListener("submit", event=>{
        getFormData();
        //location.href = backurl;
        event.preventDefault();
    })

}

window.onload = init;

async function getFormData(){
    let location = form.elements.location.value;
    let start_time = form.elements.start_time.value;
    let upload_information = form.elements.upload_information.value;
    let end_time = form.elements.end_time.value;
    //let image = form.elements.fileinput.files;

        console.log(start_time);
        console.log(end_time);
        console.log(location);
        console.log(upload_information);
        Json={            
            "location":location,
            "start_time":start_time,

        }

        console.log(Json);
    
        let status = await postFetch(Json);

        console.log(status);

}


async function postFetch(json, /*token*/){
    let path = "https://omsorgapiapi.azure-api.net/Activity";

    const response = await fetch(path ,{
        method:"post",
        mode:"cors",
        Headers:{
            "content-type":"application/json"
            /*"authorazation":token*/
        },
        body:JSON.stringify(json)
    })

   return response.status;
    
}
