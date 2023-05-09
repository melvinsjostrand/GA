function init(){
    form = document.querySelector("form");

    form.addEventListener("submit", event=>{
        roll();
        event.preventDefault();
    })
    

   
    
}
window.onload = init;  
    
async function roll(){
    let userId = Number(form.elements.userId.value);
    let role = Number(form.elements.role.value);

    let json= {
        "userId": userId,
        "role": role
    }

    console.log(json);
    console.log(localStorage.getItem("GUID"));

    let rol = "https://omsorgapi.azurewebsites.net/Login/management";
    let response = await fetch(rol, {
        method: "PUT",
        mode:"cors",
        headers:{
            "content-type":"application/json",
            "Authorization": localStorage.getItem("GUID"),
            
        },
        body: JSON.stringify(json)
    });
    console.log(response.status);
    
    if(response.status === 200){
        location.href = "index.html";
}
}