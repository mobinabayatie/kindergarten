let nextDom = document.querySelector('.next');
let prevDom = document.querySelector('.prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.list');
let thumbnailBorderDom = carouselDom.querySelector('.thumbnail');

nextDom.onclick = function () {
    showSlider('next');
};

prevDom.onclick = function () {
    showSlider('prev');
};

function showSlider(type) {
    let SliderItemsDom = SliderDom.querySelectorAll('.item');
    let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');

    if (type === 'next') {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');

        setTimeout(() => {
            carouselDom.classList.remove('next');
        }, 2000);
    }

    if (type === 'prev') {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(
            thumbnailItemsDom[thumbnailItemsDom.length - 1]
        );
        carouselDom.classList.add('prev');

        setTimeout(() => {
            carouselDom.classList.remove('prev');
        }, 2000);
    }
}
