let week = 1;
let day = Number(10);
let month = 3;
let days = ["mandag","tisdag","onsdag","torsdag","fredag","lordag","sondag"]
let lA;
let rA;



let json=[
            {starttid:"09.00",sluttid:"15:00",date:"230312",org:"Omsfritid"},
            {starttid:"09.00",sluttid:"15:00",date:"230314",org:"Omsfritid"},
            {starttid:"10.00",sluttid:"15:00",date:"230314",org:"Omsfritid"},
            {starttid:"12.00",sluttid:"15:00",date:"230314",org:"Omsfritid"},
            {starttid:"15.00",sluttid:"15:00",date:"230314",org:"Omsfritid"},
            {starttid:"21.00",sluttid:"15:00",date:"230314",org:"Omsfritid"},
            {starttid:"11.00",sluttid:"15:00",date:"230311",org:"Omsfritid"},            
            {starttid:"12.00",sluttid:"15:00",date:"230310",org:"Omsfritid"},
            {starttid:"11.00",sluttid:"15:00",date:"230315",org:"Omsfritid"},
            {starttid:"09.00",sluttid:"15:00",date:"230316",org:"Omsfritid"},            
            {starttid:"17.00",sluttid:"15:00",date:"230315",org:"Omsfritid"},
            {starttid:"22.00",sluttid:"15:00",date:"230315",org:"Omsfritid"},
            {starttid:"14.00",sluttid:"15:00",date:"230316",org:"Omsfritid"},
            {starttid:"16.00",sluttid:"15:00",date:"230311",org:"Omsfritid"},
            {starttid:"16.00",sluttid:"15:00",date:"230310",org:"Omsfritid"},
            {starttid:"19.00",sluttid:"15:00",date:"230311",org:"Omsfritid"},
            {starttid:"21.00",sluttid:"15:00",date:"230311",org:"Omsfritid"},
            {starttid:"20.00",sluttid:"15:00",date:"230310",org:"Omsfritid"},
            {starttid:"23.00",sluttid:"15:00",date:"230310",org:"Omsfritid"},
            {starttid:"17.00",sluttid:"15:00",date:"230316",org:"Omsfritid"},
            {starttid:"15.00",sluttid:"15:00",date:"230312",org:"Omsfritid"},
            {starttid:"10.00",sluttid:"15:00",date:"230313",org:"Omsfritid"},
            {starttid:"19.00",sluttid:"15:00",date:"230312",org:"Omsfritid"},
            {starttid:"22.00",sluttid:"15:00",date:"230312",org:"Omsfritid"},
            {starttid:"14.00",sluttid:"15:00",date:"230313",org:"Omsfritid"},
            {starttid:"16.00",sluttid:"15:00",date:"230313",org:"Omsfritid"},
            {starttid:"19.00",sluttid:"15:00",date:"230313",org:"Omsfritid"},
            {starttid:"19.00",sluttid:"15:00",date:"230316",org:"Omsfritid"}


        ]

let jDay = [];

function init(){
    let week = window.location.search;
    const urlParams = new URLSearchParams(week);
    week = Number(urlParams.get("week"));
    console.log(week);

    if(week==0){
        week=9;
    }

    lA = document.getElementById("leftArrow");
    rA = document.getElementById("rightArrow");
    
    lA.addEventListener("click",event => {
        if(week-1<1){
        location.href = "week.html?week=52"; 
        } else{
            week--;
            location.href = "week.html?week=" + week; 
        }        
        })
    
    
    
    rA.addEventListener("click" , event => {
        if(week+1>52){
        location.href = "week.html?week=1"; 
        } else{
        location.href = "week.html?week=" + (week+1); 
        }
    })


    for(let i=0;i<json.length;i++){
        jDay[i] = json[i].date.substring(4);
    }


    

    //console.log(jDay[0]);

    createH3(week);
    createH5(day,month);

    for(let i=0;i<7;i++){
   
        json.forEach(element =>{
            
            let d = element.date.substring(4);
            //console.log(d);
        
            if(day+i==d){
                console.log("if: " + d);
                createP(element,days[i]);
            }
        })
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

function createP(e,d){
    console.log(d);
    let c = document.getElementById(d).getElementsByTagName("div");
    console.log(c);
    let paragraph = document.createElement("p");
    paragraph.innerHTML = e.starttid;
    paragraph.innerHTML += " "; 
    paragraph.innerHTML += e.org;

    c[0].appendChild(paragraph);
}


