// Website Blink name Code

var typed = new Typed("#element", {
  strings: ["Web Developer", "Youtuber"],
  typeSpeed: 50,
});

// Website Pre Loader

var loader = document.getElementById("container");

window.addEventListener("load", function () {
  loader.style.display = "none";
});

// Website Cursor Code

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#2e9cca",
  "#2e9cca",
  "#2e9cca",
  "#2e9cca",
  "#2e9cca",
  "#2e9cca",
  "#2e9cca",
  "#2e9cca",
  "#2e9cca",
  "#2e9cca",
  "#2e9cca",
  "#2e9cca",
  "#2e9cca",
  "#2e9cca",
  "#2e9cca",
  "#2e9cca",
  "#2e9cca",
  "#2e9cca",
  "#2e9cca",
  "#2e9cca",
  "#2e9cca",
  "#2e9cca",
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();

// Go to Top Button

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("go-top-btn");
  // let progressValue = document.getElementById
  // ("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
