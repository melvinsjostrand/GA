let request = {
    method: "PUT",
    headers:{
        "Authorization": localStorage.getItem("GUID"),
        
    },
    body:{
        
    }
}
function init(){
    roll();
    async function roll(){
            let rol = "https://omsorgapi.azurewebsites.net/Login/management";
            let response = await fetch(rol, request);
            
            console.log(response);

        }
    
}
window.onload = init; 