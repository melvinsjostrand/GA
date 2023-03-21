let lA;
let rA;
let year = 23;
let weekNumber;



let jDay = [];

function init(){
    let day;
    let month;
    let week = window.location.search;
    const urlParams = new URLSearchParams(week);
    weekNumber = Number(urlParams.get("week"));
    console.log(week);

    if(weekNumber==0){
        let currentDate = new Date();

        let startDate = new Date(currentDate.getFullYear(),0,1);

        let days = Math.floor((currentDate-startDate)/(24*60*60*1000));

        weekNumber = Math.ceil(days/7);
    }

    getweek();
    lA = document.getElementById("leftArrow");
    rA = document.getElementById("rightArrow");
    
    lA.addEventListener("click",event => {
        if(weekNumber-1<1){
        location.href = "week.html?week=52"; 
        } else{
            weekNumber--;
            location.href = "week.html?week=" + weekNumber; 
        }        
        })
    
    
    
    rA.addEventListener("click" , event => {
        if(weekNumber+1>52){
        location.href = "week.html?week=1"; 
        } else{
        location.href = "week.html?week=" + (weekNumber+1); 
        }
    })


    
    createH3(weekNumber);
    //createH5(day,month);

   /* for(let i=0;i<7;i++){
   
        json.forEach(element =>{
            
            let d = element.date.substring(4);
            //console.log(d);
        
            if(day+i==d){
                console.log("if: " + d);
                createP(element,days[i]);
            }
        })
    }*/

}

window.onload=init;


async function getweek(){
    console.log(weekNumber);
    let path = "https://omsorgapiapi.azure-api.net/Activity/" + year + "/w/" + weekNumber;
    
    jDay = await getWeekFetch(path);
    console.log(jDay)
    for(let i=0;i<7;i++){
        //hantera dag
        
        month = Number(jDay[i].date.substring(2,4));
        day = Number(jDay[i].date.substring(4));
        createH5(day,month, i);
        //hitta aktiviteter
 
        jDay[i].activities.forEach(element =>{
            createP(element,jDay[i].day);
            }
        
        )
    }
}
function createH3(w){
    let headers = document.getElementsByTagName("h3");
    headers[0].innerHTML = "v." + w;
}

function createH5(d,m, index){
   
    let headers = document.getElementsByTagName("h5");
   
    headers[index].textContent = d + "/" + m;

}


function createP(e,d){
   
   
    console.log(d);
    let c = document.getElementById(d).getElementsByTagName("div");
    console.log(c);
    let paragraph = document.createElement("p");
    paragraph.innerHTML = e.start.time;
    paragraph.innerHTML += " "; 
    paragraph.innerHTML += e.org;

    c[0].appendChild(paragraph);
}

async function getWeekFetch(path){
    let response = await fetch(path);
    let json = await response.json();
    return json;
}
