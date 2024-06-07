document.addEventListener('DOMContentLoaded', () => {
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const slider = document.querySelector('.slider');
    let currentIndex = 0;
    let isTransitioning = false;

    function debounce(func, delay) {
        let timeout;
        return function() {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, arguments), delay);
        };
    }

    function updateSlider() {
        const offset = -currentIndex * 100;
        slider.style.transform = `translateX(${offset}%)`;
        isTransitioning = true;
        setTimeout(() => {
            isTransitioning = false;
            updateArrows();
        }, 500); // Match this duration to the CSS transition duration
    }

    function updateArrows() {
        if (currentIndex === 0) {
            leftArrow.classList.add('disabled');
        } else {
            leftArrow.classList.remove('disabled');
        }
        if (currentIndex === 2) {
            rightArrow.classList.add('disabled');
        } else {
            rightArrow.classList.remove('disabled');
        }
    }

    const handleLeftArrowClick = debounce(() => {
        if (isTransitioning) return;
        if (currentIndex > 0) {
            currentIndex--;
        }
        updateSlider();
    }, 500);

    const handleRightArrowClick = debounce(() => {
        if (isTransitioning) return;
        if (currentIndex < 2) {
            currentIndex++;
        }
        updateSlider();
    }, 500);

    leftArrow.addEventListener('click', handleLeftArrowClick);
    rightArrow.addEventListener('click', handleRightArrowClick);

    // Initialize arrow states
    updateArrows();
});