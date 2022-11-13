const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length
const container = document.querySelector('.container')
const containerHeight = container.clientHeight
let currenSlideIndex = 0

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

upBtn.addEventListener('click', () => {
	scrollSlide('up')
})

downBtn.addEventListener('click', () => {
	scrollSlide('down')
})

function scrollSlide(direction) {
	if (direction === 'up') {
		currenSlideIndex++
		if (currenSlideIndex === slidesCount) {
			currenSlideIndex = 0
		}
	} else if (direction === 'down') {
		currenSlideIndex--
		if (currenSlideIndex < 0) {
			currenSlideIndex = slidesCount - 1
		}
	}

	mainSlide.style.transform = `translateY(-${currenSlideIndex * containerHeight}px)`
	sidebar.style.transform = `translateY(${currenSlideIndex * containerHeight}px)`
}