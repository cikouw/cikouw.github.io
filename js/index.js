
document.addEventListener("DOMContentLoaded", () => {
    const sectionsUtama = document.querySelectorAll(".sectionUtama .tombolUtama");
    const wrappersPage = document.querySelectorAll(".wrapperPage");
    const containersMenu = document.querySelectorAll(".containerMenu .tombolMenu");
    const mains = document.querySelectorAll(".menuPage");
    
    sectionsUtama.forEach((sectionUtama, index) => {
      sectionUtama.addEventListener("click", (event) => {
        event.preventDefault();
        sectionsUtama.forEach(sectionU => {
          sectionU.classList.remove("warna");
        });
        sectionUtama.classList.add("warna");
        wrappersPage.forEach(wrapperP => {
          wrapperP.classList.remove("onTab");
        });
        wrappersPage[index].classList.add("onTab");
      });
    });
    
    containersMenu.forEach((container, index) => {
      container.addEventListener("click", (event) => {
        event.preventDefault();
        containersMenu.forEach(c => {
          c.classList.remove("onSlide");
        });
        container.classList.add("onSlide");
        mains.forEach((main) => {
          main.classList.remove("aktif");
        });
        mains[index].classList.add('aktif');
      });
    });
  });