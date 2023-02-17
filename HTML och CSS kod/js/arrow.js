let lA;
let rA;

function init(){
lA = document.getElementById("leftArrow");
rA = document.getElementById("rightArrow");

lA.addEventListener("click",event => {
	if(week-1<1){
	location.href = week.html?week=52; 
	} else
	location.href = week.html?week=(week-1); 
    })



rA,addEventListener("click" , event => {
	if(week+1>52){
	location.href = week.html?week=1; 
	} else{
	location.href = week.html?week=(week+1); 
    }
})
}


