//1 დავალება
function startClock() {
  function updateClock() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, "0");
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let seconds = now.getSeconds().toString().padStart(2, "0");

    document.getElementById(
      "clock"
    ).textContent = `${hours}:${minutes}:${seconds}`;

    setTimeout(updateClock, 1000);
  }

  updateClock();
}

startClock();
//2 დავალება
function sliderFn() {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;
  let slideInterval;

  function renderSlides() {
    slides.forEach((slide, index) => {
      if (index === currentSlide) {
        slide.classList.add("show-slide");
      } else {
        slide.classList.remove("show-slide");
      }
    });
  }

  function goToNextSlide() {
    if (currentSlide === slides.length - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    renderSlides();
  }

  function startSlideShow() {
    slideInterval = setInterval(goToNextSlide, 5000);
  }

  function stopSlideShow() {
    clearInterval(slideInterval);
  }

  document
    .querySelector(".slider-wrapper")
    .addEventListener("mouseover", stopSlideShow);

  document
    .querySelector(".slider-wrapper")
    .addEventListener("mouseout", startSlideShow);

  renderSlides();
  startSlideShow();
}

sliderFn();
//3 დავალება
// let countdownElement = document.getElementById("countdown");
// function updateCountdown() {
//   const now = new Date();
//   const nextLectureDate = new Date("2025-03-05T20:00:00");
//   const difference = nextLectureDate - now;
// }
// if (difference <= 0) {
//   countdownElement.textContent = "The lecture has started!";
//   clearInterval(countdownInterval);
//   return;}
//   const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//   const hours = Math.floor(
//     (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//   );
//   const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

//   countdownElement.textContent = `${days} days ${hours} hours ${minutes} minutes remaining`;
// const countdownInterval = setInterval(updateCountdown, 60000);
