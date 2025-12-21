const nextButton = document.querySelector('.next-btn');
const video = document.querySelector('.hero-video');

const movielist = [
    '../videos/hero-1.mp4',
    '../videos/hero-2.mp4',
    '../videos/hero-3.mp4',
    '../videos/hero-4.mp4'
];

let index = 0;

nextButton.addEventListener('click', () => {
    index = (index + 1) % movielist.length;
    video.src = movielist[index];
    video.load();
    video.play();
});
