function init(){
    if(localStorage.getItem("GUID") === "")
    {
        //Logga in
        location.href= "account.html";

    }
    createA("Logga ut");
    let week = window.location.search;
}
    window.onload=init;

    function createA(text)
        {
        let li = document.getElementById("account");
        console.log(li);
        let a = document.createElement("a");
        a.href = "logout.html";
        a.innerHTML = text;
        li.appendChild(a);

        }