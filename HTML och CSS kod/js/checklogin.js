function init(){
    if(localStorage.getItem("GUID"))
    {
        createA("logga in")
        //Logga in
        location.href= "account.html";

    }else{
    createA("Logga ut");
    location.href = "logout.html";
}

}
    window.onload=init;

    function createA(text)
        {
        let li = document.getElementById("account");
        console.log(li);
        let a = document.createElement("a");

        a.innerHTML = text;
        li.appendChild(a);

        }
        async function getWeekFetch(path){
            console.log(localStorage.getItem("GUID"));
            let response = await fetch(path, {
                headers:{
                    "Authorization": localStorage.getItem("GUID")
                }
            });
            let json = await response.json();
            return json;
        }
        