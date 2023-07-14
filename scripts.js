document.addEventListener('wheel', scrollHandler);

let currentPage = 0;
const pages = document.querySelectorAll('.page');

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
    behavior: 'smooth'
  });
}
