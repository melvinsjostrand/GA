let lA;
let rA;



let json=[
{
    date:"230312",
    day:"monday",
    activities:[
    {
        actId:1,orgId:1,
        org:"omsorg",
        act:"aowmdapmdwpmopawmdpawm",
        info:"pmawdmapwmap",
        place:"teknikum",
        start:{
            date:"230310",
            time:"17:00"
            },
        end:{
            date:"230311",
            time:"13:00"
            }
}
]
},
{
    date:"230312",
    day:"tuesday",
    activities:[
    {
        actId:1,orgId:1,
        org:"omsorg",
        act:"aowmdapmdwpmopawmdpawm",
        info:"pmawdmapwmap",
        place:"teknikum",
        start:{
            date:"230310",
            time:"17:00"
            },
        end:{
            date:"230311",
            time:"13:00"
            }
}
]
},
{
    date:"230312",
    day:"wednesday",
    activities:[
    {
        actId:0
        ,orgId:0,
        org:"",
        act:"",
        info:"",
        place:"",
        start:{
            date:"",
            time:""
            },
        end:{
            date:"",
            time:""
            }
}
]
},
{
    date:"230312",
    day:"thursday",
    activities:[
    {
        actId:1,orgId:1,
        org:"omsorg",
        act:"aowmdapmdwpmopawmdpawm",
        info:"pmawdmapwmap",
        place:"teknikum",
        start:{
            date:"230310",
            time:"17:00"
            },
        end:{
            date:"230311",
            time:"13:00"
            }
}
]
},
{
    date:"230312",
    day:"friday",
    activities:[
    {
        actId:1,orgId:1,
        org:"omsorg",
        act:"aowmdapmdwpmopawmdpawm",
        info:"pmawdmapwmap",
        place:"teknikum",
        start:{
            date:"230310",
            time:"17:00"
            },
        end:{
            date:"230311",
            time:"13:00"
            }
}
]
},
{
    date:"230312",
    day:"saturday",
    activities:[
    {
        actId:1,orgId:1,
        org:"omsorg",
        act:"aowmdapmdwpmopawmdpawm",
        info:"pmawdmapwmap",
        place:"teknikum",
        start:{
            date:"230310",
            time:"17:00"
            },
        end:{
            date:"230311",
            time:"13:00"
            }
}
]
},
{
    date:"230314",
    day:"sunday",
    activities:[
    {
        actId:1,orgId:1,
        org:"omsorg",
        act:"aowmdapmdwpmopawmdpawm",
        info:"pmawdmapwmap",
        place:"teknikum",
        start:{
            date:"230310",
            time:"17:00"
            },
        end:{
            date:"230311",
            time:"13:00"
            }
}
]
}
        ]

let jDay = [];

function init(){
    let day;
    let month;
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

    for(let i=0;i<7;i++){
        //hantera dag
        
        month = Number(json[i].date.substring(2,4));
        day = Number(json[i].date.substring(4));
        createH5(day,month);
        //hitta aktiviteter
        json[i].activities.forEach(element =>{
            
            createP(element,json[i].day); //day är svenska id engelska behöver fixas
        })
    }
    
    createH3(week);
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

function createH3(w){
    let headers = document.getElementsByTagName("h3");
    headers[0].innerHTML = "v." + w;
}

function createH5(d,m){
   
    let headers = document.getElementsByTagName("h5");
   
    for(let i=0;i<7;i++){
        headers[i].innerHTML = d + "/" + m;
    }
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