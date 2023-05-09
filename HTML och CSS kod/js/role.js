function init(){
    form = document.querySelector("form");

    form.addEventListener("submit", event=>{
        roll();
        event.preventDefault();
    })
    

   
    
}
window.onload = init;  
    
async function roll(){
    let userId = form.elements.userId.value;
    let role = form.elements.role.value;

    let rol = "https://omsorgapi.azurewebsites.net/Login/management";
    let response = await fetch(rol, request);
    let request = {
        method: "PUT",
        mode:"cors",
        headers:{
            "Authorization": localStorage.getItem("GUID"),
            
        },
        body:{
            "userId": userId,
            "role": role,
        }
    }
    console.log(response.status);
}