function init() {
    let li = document.getElementById("account");
    console.log(li);

    if (localStorage.getItem("GUID")) {
        createLink(li, "Logga ut", "logout.html");
    } else {
        createLink(li, "Logga in", "account.html");
    }
}

window.onload = init;

function createLink(li, text, href) {
    let a = document.createElement("a");
    a.innerText = text;
    a.href = href;
    li.innerHTML = "";
    li.appendChild(a);
}