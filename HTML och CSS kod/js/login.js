let form;

function init(){

    form = document.querySelector("form");

    form.addEventListener("submit", event=>{
        login();
        //location.href = backurl;
        event.preventDefault();
    })
    if(localStorage.getItem("GUID") === "")
    {
        //Logga in
        location.href= "account.html";

    }
    createA("Logga ut");
}
window.onload = init;


async function login(){
    const error = document.getElementById("error");
    let account = form.elements.account.value;
    let password = form.elements.password.value;

    let path = "https://omsorgapi.azurewebsites.net/Login";
    const response = await fetch(path ,{
        method:"GET",
        mode:"cors",
        headers:{
          Authorization: "Basic: " + btoa(account+":"+password)
        }
    })

    console.log(response.status);
    if(response.status === 200){
        let key = await response.text();
        //inloggad
        localStorage.setItem("GUID" , key)
        location.href = "./index.html";
    } else if (response.status === 400) {
        //error lösenord/mail fel
        console.log("error");
        error.innerHTML = "-Felaktig mail/telefon/lösenord";
    } else{
        error.innerHTML = "-Det gick inte att logga in";
    }
}


