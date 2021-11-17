const img = document.querySelector('.slider__image')
const dots = document.querySelectorAll('.slider__dots')
console.log(dots);
const imgArr = ['./img/html.jpg', './img/css.jpg', './img/js.jpg']

let currentIndex = 0

function changeIndex(index) {
    currentIndex = index
    slide(currentIndex)
}

function slide(ind) {
    img.src = imgArr[ind]
}




