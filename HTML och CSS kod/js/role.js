
function init(){
    roll();
    async function roll(){
            let rol = "https://omsorgapi.azurewebsites.net/Login/management";
            let response = await fetch(rol, {
                headers:{
                    "Authorization": localStorage.getItem("GUID")
                }
            });
            
            console.log(response);

        }
    
}
window.onload = init; 