const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const arrayImg = [];

console.log(arrayImg);

let newDivItem;

let divEl;

let current = 0;

for (let i = 0; i < images.length; i++) {
    divEl = document.querySelector('div.carousel-image');
    console.log(divEl);
    newDivItem = document.createElement('div');
    newDivItem.classList.add('my_carousel-item');
    arrayImg.push(newDivItem);
    divEl.append(newDivItem);
    newDivItem.innerHTML = '<img src="./' + images[i].image + ' "alt="image">';
};

const buttonPrev = document.querySelector('div.previous');
const buttonNext = document.querySelector('div.next');

console.log(buttonNext, buttonPrev);

arrayImg[0].classList.add('active');

buttonPrev.addEventListener('click', function () {
    arrayImg[current].classList.remove('active');
    current--;
    if (current == -1) {
        current = arrayImg.length - 1;
    }
    arrayImg[current].classList.add('active');
});

buttonNext.addEventListener('click', function () {
    arrayImg[current].classList.remove('active');
    current++;
    if (current == arrayImg.length) {
        current = 0;
    }
    arrayImg[current].classList.add('active');
});

let divElImg;

let newDivElImg;

const arrayImgSmall = [];

console.log(arrayImgSmall);

for (let i = 0; i < images.length; i++) {
    divElImg = document.querySelector('div.carousel-thumbnails');

    divElImg.classList.add('overflow-auto')

    console.log(divElImg);

    newDivElImg = document.createElement('div');

    arrayImgSmall.push(newDivElImg);

    divElImg.append(newDivElImg);

    newDivElImg.innerHTML = '<img class=" img-fluid" src="./' + images[i].image + ' "alt="image">';
};

arrayImgSmall[0].addEventListener('click', function () {
    arrayImgSmall[1].classList.remove('active');
    arrayImgSmall[2].classList.remove('active');
    arrayImgSmall[3].classList.remove('active');
    arrayImgSmall[4].classList.remove('active');
    arrayImgSmall[0].classList.add('active');
});
arrayImgSmall[1].addEventListener('click', function () {
    arrayImgSmall[0].classList.remove('active');
    arrayImgSmall[2].classList.remove('active');
    arrayImgSmall[3].classList.remove('active');
    arrayImgSmall[4].classList.remove('active');
    arrayImgSmall[1].classList.add('active');
});
arrayImgSmall[2].addEventListener('click', function () {
    arrayImgSmall[0].classList.remove('active');
    arrayImgSmall[1].classList.remove('active');
    arrayImgSmall[3].classList.remove('active');
    arrayImgSmall[4].classList.remove('active');
    arrayImgSmall[2].classList.add('active');
});
arrayImgSmall[3].addEventListener('click', function () {
    arrayImgSmall[0].classList.remove('active');
    arrayImgSmall[1].classList.remove('active');
    arrayImgSmall[2].classList.remove('active');
    arrayImgSmall[4].classList.remove('active');
    arrayImgSmall[3].classList.add('active');
});
arrayImgSmall[4].addEventListener('click', function () {
    arrayImgSmall[0].classList.remove('active');
    arrayImgSmall[1].classList.remove('active');
    arrayImgSmall[2].classList.remove('active');
    arrayImgSmall[3].classList.remove('active');
    arrayImgSmall[4].classList.add('active');
});





