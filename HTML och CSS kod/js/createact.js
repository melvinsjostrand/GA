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
    let act = form.elements.act.value;
    //let image = form.elements.fileinput.files;

const st = start_time.split("T")
const et = end_time.split("T")


        console.log(act);
        console.log(location);
        console.log(st[0]);
        console.log(st[1]);
        console.log(et[0]);
        console.log(et[1]);
        console.log(upload_information);
       // console.log(start_time);
      //  console.log(end_time);

        Json={            
            "place":location,
            "act":act,
            "info":upload_information,
            "start":{
                "date":st[0],
                "time":st[1]
            },
            "end":{
                "date":et[0],
                "time":et[1]
            }
        }

        console.log(Json);
    
        let status = await postFetch(Json);

        console.log(status);

}




async function postFetch(json){
    let path = "https://omsorgapi.azurewebsites.net/Activity";
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

async function GetActFetch(path){
    console.log(localStorage.getItem("GUID"));
    let response = await fetch(path, {
        headers:{
            "Authorization": localStorage.getItem("GUID")
        }
    });
    let json = await response.json();
    return json;
}
