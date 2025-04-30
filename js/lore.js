document.addEventListener("DOMContentLoaded", () => {
    const prevBtn = document.querySelector(".btn-nav.prev");
    const nextBtn = document.querySelector(".btn-nav.next");
    const wrapper = document.querySelector(".carrusel-wrapper");
  
    const cardWidth = 250 + 16;
    prevBtn.addEventListener("click", () => {
      wrapper.scrollLeft -= cardWidth * 3;
    });
  
    nextBtn.addEventListener("click", () => {
      wrapper.scrollLeft += cardWidth * 3;
    });
  });
  