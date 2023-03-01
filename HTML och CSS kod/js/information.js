let json =[
        {org:"Omsfritid",dag:"230214",tid:"12:00", info:"Pizza"},
        {org:"Omsfritid",dag:"230214",tid:"14:00", info:"Bowling"},
];

let time;

function init(){
    time = document.getElementById("time");
    console.log(time);

    json.forEach(element=>{
        console.log(element);
        time.innerHTML = element.tid + " " + element.org;

        createSection(element);
    })

}

window.onload = init;

function createSection(el){

    let sections = document.getElementsByClassName("gridsection2");
    console.log(sections[0]);

    let section = document.createElement("section");
  
    let h3 = document.createElement("h3");
    h3.innerHTML = el.org;
    console.log(h3);

    section.appendChild(h3);
   

    let paragraph = document.createElement("p");
    let t = el.tid + " " + el.info;
    let text = document.createTextNode(t);
    paragraph.appendChild(text);
    console.log(paragraph);
    section.appendChild(paragraph);
    console.log(section);

    sections[0].appendChild(section);
}
