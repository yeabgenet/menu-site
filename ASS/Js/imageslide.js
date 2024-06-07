let currentIndex = 0;
const boxesToShow = 4;
const totalBoxes = 6;
const boxWidth = 350 + 25;

function slideLeft() {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlide();
    }
}

function slideRight() {
    if (currentIndex < totalBoxes - boxesToShow) {
        currentIndex++;
        updateSlide();
    } else if (currentIndex === totalBoxes - boxesToShow) {
        return 0;
    }
}

function updateSlide() {
    const imgBoxContainer = document.getElementById('imgBoxContainer');
    imgBoxContainer.style.transform = `translateX(-${currentIndex * boxWidth}px)`;
}

// scroll left
