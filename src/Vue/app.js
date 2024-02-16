document.addEventListener("DOMContentLoaded", function () {
  // Get DOM elements
  let nextDom = document.getElementById("next");
  let prevDom = document.getElementById("prev");
  let carouselDom = document.querySelector(".carousel");
  let SliderDom = carouselDom.querySelector(".carousel .list");
  let thumbnailBorderDom = document.querySelector(".carousel .thumbnail");
  let timeDom = document.querySelector(".carousel .time");

  // Initial setup
  let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");
  thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
  let timeRunning = 530;
  let timeAutoNext = 7000;
  let runTimeOut;
  let runNextAuto = setTimeout(() => {
    next.click();
  }, timeAutoNext);

  // Click event handlers
  nextDom.onclick = function () {
    showSlider("next");
  };

  prevDom.onclick = function () {
    showSlider("prev");
  };

  // Function to show slider
  function showSlider(type) {
    let SliderItemsDom = SliderDom.querySelectorAll(".carousel .list .item");
    let thumbnailItemsDom = document.querySelectorAll(
      ".carousel .thumbnail .item"
    );

    if (type === "next") {
      SliderDom.appendChild(SliderItemsDom[0]);
      thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
      carouselDom.classList.add("next");
    } else {
      SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
      thumbnailBorderDom.prepend(
        thumbnailItemsDom[thumbnailItemsDom.length - 1]
      );
      carouselDom.classList.add("prev");
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
      carouselDom.classList.remove("next");
      carouselDom.classList.remove("prev");
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
      next.click();
    }, timeAutoNext);
  }
});
