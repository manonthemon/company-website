document.addEventListener("DOMContentLoaded", function () {
  const scrollButtons = document.querySelectorAll(".scroll-button");
  scrollButtons.forEach(function (button, index) {
    button.addEventListener("click", function () {
      if (index < pages.length - 1) {
        currentPage = index + 1;
        scrollToPage(currentPage);
      } else {
        currentPage = 0;
        scrollToTop();
      }
    });
  });
});

document.addEventListener("wheel", scrollHandler);

let currentPage = 0;
const pages = document.querySelectorAll(".page");

function scrollHandler(e) {
  if (e.deltaY > 0) {
    currentPage++;
  } else {
    currentPage--;
  }

  if (currentPage < 0) {
    currentPage = 0;
  } else if (currentPage >= pages.length) {
    currentPage = pages.length - 1;
  }

  scrollToPage(currentPage);
}

function scrollToPage(pageIndex) {
  window.scrollTo({
    top: pages[pageIndex].offsetTop,
    behavior: "smooth",
  });
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
