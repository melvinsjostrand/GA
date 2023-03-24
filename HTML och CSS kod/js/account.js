let form;

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
    let createaccusername = form.elements.createaccusername.value;
    let createaccemail = form.elements.createaccemail.value;
    let createaccpassword = form.elements.createaccpassword.value;
    let createaccphonenumber = form.elements.createaccphonenumber.value;
    createaccpassword =password;
    createaccusername = username;

    console.log(createaccemail);
    console.log(createaccpassword);
    console.log(createaccusername);
    console.log(createaccphonenumber);


Json = {
"mail":createaccemail,
"phone":createaccphonenumber
}


        console.log(Json);
    
        let status = await postFetch(Json);

        console.log(status);

}


async function postFetch(json, /*token*/){
    let path = "https://omsorgapiapi.azure-api.net//User";

    const response = await fetch(path ,{
        method:"post",
        mode:"cors",
        Headers:{
            "content-type":"application/json"
            /*"authorazation":"Basic" + btoa(username:password)*/
        },
        body:JSON.stringify(json)
    })

   return response.status;
    
}
