document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelector(".slides");
    const prevBtn = document.querySelector(".prev-slide");
    const nextBtn = document.querySelector(".next-slide");

    let currentIndex = 0;

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + 8) % 8;
        updateSlider();
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % 8;
        updateSlider();
    });

    function updateSlider() {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
});

let currentPage = 0;
const pages = document.querySelectorAll('.page');

function showPage(pageIndex) {
    pages.forEach((page, index) => {
        if (index === pageIndex) {
            page.classList.add('active');
        } else {
            page.classList.remove('active');
        }
    });
}

function nextPage() {
    currentPage = (currentPage + 1) % pages.length;
    showPage(currentPage);
}

function previousPage() {
    currentPage = (currentPage - 1 + pages.length) % pages.length;
    showPage(currentPage);
}

setInterval(nextPage, 8000);
