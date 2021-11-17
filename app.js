const img = document.querySelector('.slider__image')
const dots = document.querySelectorAll('.slider__dot')
console.log(dots);
const imgArr = ['./img/html.jpg', './img/css.jpg', './img/js.jpg']

let currentIndex = 0

function changeIndex(index) {
    currentIndex = index
    slide(currentIndex)
}

function slide(index) {
    img.src = imgArr[index]

    updateDots(index)
}

function updateDots(index) {
    for (let dot of dots) {
        dot.classList.remove('active')
    }

    dots[index].classList.add('active')
}




