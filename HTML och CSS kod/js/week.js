let week = 5;
let day = 10;
let month = 3;
let days = ["Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag","Söndag"]

let json=[
            {starttid:"09.00",sluttid:"15:00",date:"230312",org:"Omsfritid"},
            {starttid:"09.00",sluttid:"15:00",date:"230314",org:"Omsfritid"}  
        ]

let jDay = [];

function init(){
    for(let i=0;i<json.length;i++){
        jDay[i] = json[i].date.substring(4);
    }
    

    console.log(jDay[0]);

    createH3(week);
    createH5(day,month);

    for(let i=0;i<7;i++){
        if(day+i==jDay[i]){
            console.log(day+i);
            createP(days[i]);
        }
    }

}
window.onload=init;

function createH3(w){
    let headers = document.getElementsByTagName("h3");
    headers[0].innerHTML = "v." + w;
}

function createH5(d,m){
    let headers = document.getElementsByTagName("h5");
   
    for(let i=0;i<7;i++){
        headers[i].innerHTML = (d+i) + "/" + m;
    }
}

function createP(d){
    console.log(d);
    let c = document.getElementById(d).getElementsByTagName("div");
    console.log(c);
    let paragraph = document.createElement("p");
    paragraph.innerHTML = json.org;
    paragraph.innerHTML += json.starttid;

    c[0].appendChild(paragraph);
}