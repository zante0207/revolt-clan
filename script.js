// LOADER

window.onload = function(){
setTimeout(()=>{
document.getElementById("loader").style.display="none";
},1500);
};


// PARTICLES

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<100;i++){

particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*2,
speedX:(Math.random()-0.5)*0.5,
speedY:(Math.random()-0.5)*0.5
});

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{

p.x += p.speedX;
p.y += p.speedY;

ctx.fillStyle="white";
ctx.fillRect(p.x,p.y,p.size,p.size);

});

requestAnimationFrame(animate);

}

animate();


// MOUSE TRAIL

const trail = document.getElementById("trail");

document.addEventListener("mousemove",(e)=>{

trail.style.left = e.pageX + "px";
trail.style.top = e.pageY + "px";

});
