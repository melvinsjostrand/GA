let sendfirstsite = document.getElementById("send");

let form;

function init(){

    form = document.querySelector("form");

    if(localStorage.getItem("GUID")===""){
        //Du måste vara inloggad
        location.href = "./account.html";
    }

    joinOrganization();
}
window.onload = init;


async function joinOrganization(){
    const error = document.getElementById("error");
   

    let role = await verify();

    if(role !=="Vanlig"){
        error.innerHTML = " - Du saknar behörighet";
    }else{
        form.addEventListener("submit", event=>{
            getForm();
            //location.href = backurl;
            event.preventDefault();
        })
    }


}

async function getForm(){
    let favorit;
    let account = form.elements.account.value;
    let password = form.elements.password.value;
    console.log("Hej");

    let path = "https://omsorgapi.azurewebsites.net/Organization/user";
        //console.log(username);

    if(password === "yes"){
        favorit = true;
    }

    else{
        favorit = false;
    }

    

    let json={
        "orgCode":account,
        "favorit":favorit
    }
    console.log(json);
    
    const response = await fetch(path ,{
        method:"POST",
        mode:"cors",
        headers:{
            "Content-Type":"application/json",
            "Authorization": localStorage.getItem("GUID")
        },
        body:JSON.stringify(json)
    });

    if(response.status === 201){
            location.href = "index.html";
    }

    console.log(response.status);

    /*if(response.status === 200){
        let key = await response.text();
        //inloggad
        localStorage.setItem("GUID" , key)
        location.href = "./index.html";
    } else if (response.status === 400) {
        //error lösenord/mail fel
        console.log("error");
        error.innerHTML = "-Felaktig mail/telefon/lösenord";
    } else{
        error.innerHTML = "Det gick inte att logga in";
    }*/
}
    


async function verify(){
    let path = "https://omsorgapi.azurewebsites.net/Login/verify";

    const response = await fetch(path, {
        headers:{
            "Authorization": localStorage.getItem("GUID") 
        }
    });
    
    let role = await response.text();
    console.log(role);
    return role;
}
