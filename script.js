const bg = document.querySelector(".bg")

document.addEventListener("mousemove", e => {

let x = e.clientX / window.innerWidth * 255
let y = e.clientY / window.innerHeight * 255

bg.style.background =
`radial-gradient(circle at ${x}px ${y}px, #3b0000, #000000)`

})
