/* LOADER */

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.display="none"

},1500)

})

/* PARTICLES */

particlesJS("particles-js",{

particles:{

number:{value:100},

size:{value:3},

move:{speed:2},

line_linked:{
enable:true,
color:"#ff0000"
}

},

interactivity:{

events:{
onhover:{enable:true,mode:"repulse"},
onclick:{enable:true,mode:"push"}
}

}

})

/* SCROLL REVEAL */

function reveal(){

let reveals=document.querySelectorAll(".reveal")

for(let i=0;i<reveals.length;i++){

let windowHeight=window.innerHeight
let elementTop=reveals[i].getBoundingClientRect().top

if(elementTop<windowHeight-100){

reveals[i].classList.add("active")

}

}

}

window.addEventListener("scroll",reveal)

/* CURSOR */

const cursor=document.querySelector(".cursor")
const ring=document.querySelector(".cursor-ring")

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px"
cursor.style.top=e.clientY+"px"

ring.style.left=e.clientX-16+"px"
ring.style.top=e.clientY-16+"px"

})

/* CLICK EFFECT */

document.addEventListener("click",()=>{

ring.style.transform="scale(1.6)"

setTimeout(()=>{

ring.style.transform="scale(1)"

},150)

})