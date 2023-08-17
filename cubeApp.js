const cube = document.querySelector(".cube");
let mouseX = 0;
let mouseY = 0;
const rotationValue = 270;

const handleMouseMove = (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
  rotateX = -(mouseY / window.innerHeight - 0.5) * rotationValue;
  rotateY = (mouseX / window.innerWidth - 0.5) * rotationValue;
  cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
};

window.addEventListener("mousemove", handleMouseMove);

const h = document.querySelector("#h");
const b = document.body;

let base = (e) => {
  var x = e.pageX / window.innerWidth - 0.5;
  var y = e.pageY / window.innerHeight - 0.5;
  h.style.transform = `
        perspective(90vw)
        rotateX(${y * 4 + 75}deg)
        rotateZ(${-x * 12 + 45}deg)
        translateZ(-9vw)
    `;
};

b.addEventListener("pointermove", base);
