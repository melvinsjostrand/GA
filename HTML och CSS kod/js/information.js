let orgId;
let jsonAct = [];

function init() {
    getActivities();
    verify();
    async function verify(){
        let userverify = "https://omsorgapi.azurewebsites.net/Login/verify";
        let response = await fetch(userverify, {
            headers:{
                "Authorization": localStorage.getItem("GUID")
            }
        });

        let role = await response.text();
        console.log(role);
    }

}

window.onload = init;

async function getActivities() {
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    let month = Number(urlParams.get("m"));
    let day = Number(urlParams.get("d"));
    let orgId = Number(urlParams.get("Id"));

    let path = "https://omsorgapi.azurewebsites.net/Activity/org/" + orgId + "/";
    console.log(path);
    jsonAct = await getactFetch(path);
    jsonAct.activities.forEach((element) => {
        daycalendar(element);
        createSection(element);
    });

}

function daycalendar(element) {
    let calendar = document.getElementsByClassName("Dag-Infokalender");
    let paragraph = document.createElement("p");
    let orgplustime = element.start.time + " " + element.org;
    let tN = document.createTextNode(orgplustime);
    paragraph.appendChild(tN);
    calendar[0].appendChild(paragraph);
}

function createSection(element) {
    let position = document.getElementsByClassName("gridsection2");
    let section = document.createElement("section");
    let main = document.getElementById("main");

    let title = document.createElement("h3");
    let TN = document.createTextNode(element.org);
    title.appendChild(TN);

    let paragraph = document.createElement("p");
    let t = element.start.time + " " + element.info + " " + element.start.date;
    let infoN = document.createTextNode(t);
    paragraph.appendChild(infoN);

    main.appendChild(position[0]);
    position[0].appendChild(section);
    section.appendChild(title);
    section.appendChild(paragraph);

    title.addEventListener("click", () => {
        if (confirm("Är du säker på att du vill ta bort aktiviteten?")) {
        deleteActivity(element.actId);
        }
    });
}

async function getactFetch(path) {
    console.log(localStorage.getItem("GUID"));
    let response = await fetch(path, {
        headers: {
        Authorization: localStorage.getItem("GUID"),
        },
    });
    let json = await response.json();
    return json;
}

async function deleteActivity(actId) {
    console.log(actId);
    const deleteUrl = "https://omsorgapi.azurewebsites.net/Activity";

    let requestDeleteAct = {
        method: "DELETE",
        headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("GUID"),
        },
        body: JSON.stringify({ actId: actId }),
    };

    try {
        let response = await fetch(deleteUrl, requestDeleteAct);

        if (response.ok) {
        console.log("Aktiviteten borttagen");
        location.reload(); // Uppdatera sidan efter borttagning
        } else {
        console.log("Misslyckades att ta bort aktiviteten.");
        }
    } catch (error) {
        console.log("Ett fel uppstod vid försök att ta bort aktiviteten:", error);
    }
}
