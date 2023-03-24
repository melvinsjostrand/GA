const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');


registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});



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
    createaccpassword =password;
    createaccusername = username;

    console.log(createaccemail);
    console.log(createaccpassword);
    console.log(createaccusername);


Json = {
"mail":createaccemail
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
