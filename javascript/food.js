const slides = document.querySelectorAll("#slides .slide");

let index = 0;

const title = document.querySelector(".title");
const img = document.querySelector(".food-img");
const text_color = ["#017369","#495A82","#6E435F"];
const link = document.querySelectorAll("link");

function changeFood(i) {
    index = i;

    const slide = slides[i];

    const name = slide.dataset.name;
    const color = slide.dataset.color;
    const image = slide.dataset.img;

    title.textContent = name;
    document.body.style.background = color;

    img.classList.remove("food-enter");
    void img.offsetWidth;
    img.src = image;
    img.classList.add("food-enter");

    const oldLink = document.querySelector(".content .link");
    if(oldLink) oldLink.remove();
    const newLink = slide.querySelector("a").cloneNode(true);
    document.querySelector(".content").appendChild(newLink);

    document.querySelectorAll(".thumbs img").forEach((e, idx) => {
        e.classList.toggle("active", idx === i);
        title.style.color = text_color[i];
    });
}

changeFood(0);
