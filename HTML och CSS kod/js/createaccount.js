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
    
    let email = form.elements.createaccemail.value;
    
    let phonenumber = form.elements.createaccphonenumber.value;

  
    console.log(email);
    console.log(phonenumber);


    Json = {
    "mail":email,
    "phone":phonenumber
    }


            console.log(Json);
        
            let status = await postFetch(Json);

            console.log(status);

    }


async function postFetch(json, /*token*/){
    let path = "https://omsorgapiapi.azure-api.net/Login";
    let password = form.elements.createaccpassword.value;
    let username = form.elements.createaccusername.value;
    console.log(username);
    console.log(password);
    const response = await fetch(path ,{
        method:"post",
        mode:"cors",
        Headers:{
            "content-type":"application/json"
          "Authorization": "Basic: " + btoa(username+":"+password)
        },
        body:JSON.stringify(json)
    })

   return response.status;
    
}
