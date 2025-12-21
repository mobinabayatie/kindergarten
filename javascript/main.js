const chars = document.querySelectorAll(".char");
const title = document.querySelector(".title");
const description = document.querySelectorAll(".description");
const link = document.querySelectorAll(".link");
let index = 0;
let interval = null;

function update() {
  chars.forEach(c => c.classList.remove("left", "center", "right"));
  description.forEach(c => c.classList.remove("left_des","center_des","right_des"));
  link.forEach(c => c.classList.remove("left_link","center_link","right_link"));

  const left = (index - 1 + chars.length) % chars.length;
  const center = index;
  const right = (index + 1) % chars.length;

  const left_des = (index - 1 + description.length) % description.length;
  const center_des = index;
  const right_des = (index + 1) % description.length;

  const left_link = (index - 1 + description.length) % description.length;
  const center_link = index;
  const right_link = (index + 1) % description.length;

  link[left_link].classList.add("left_link");
  link[left_link].style.opacity = "0";
  link[center_link].classList.add("center_link");
  link[center_link].style.opacity = "1";
  link[right_link].classList.add("right_link");
  link[right_link].style.opacity = "0";

  description[left_des].classList.add("left_des");
  description[left_des].style.opacity = "0";
  description[center_des].classList.add("center_des");
  description[center_des].style.opacity = "1";
  description[right_des].classList.add("right_des");
  description[right_des].style.opacity = "0";

  chars[left].classList.add("left");
  chars[left].style.filter = "blur(7px)";
  chars[center].classList.add("center");
  chars[center].style.filter = "blur(0px)";
  chars[right].classList.add("right");
  chars[right].style.filter = "blur(7px)";

  title.style.color = description[center_des].style.color;
  document.getElementById("prev").style.color = description[center_des].style.color;
  document.getElementById("next").style.color = description[center_des].style.color;
  document.body.style.background = chars[center].dataset.bg;
}

function startInterval() {
  interval = setInterval(() => {
    index = (index + 1) % chars.length;
    update();
  }, 6000);
}

document.getElementById("next").addEventListener("click", () => {
  index = (index + 1) % chars.length;
  update();
  clearInterval(interval);
  startInterval();
});

document.getElementById("prev").addEventListener("click", () => {
  index = (index - 1 + chars.length) % chars.length;
  update();
  clearInterval(interval);
  startInterval();
});

update();
startInterval();
