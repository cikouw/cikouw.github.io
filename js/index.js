document.addEventListener("DOMContentLoaded", () => {
  const sectionsUtama = document.querySelectorAll(".sectionUtama .tombolUtama");
  const wrappersPage = document.querySelectorAll(".wrapperPage");
  const containersMenu = document.querySelectorAll(
    ".containerMenu .tombolMenu"
  );
  const navKiri = document.querySelectorAll(".pcoba");

  sectionsUtama.forEach((sectionUtama, index) => {
    sectionUtama.addEventListener("click", () => {
      sectionsUtama.forEach((sectionU) => {
        sectionU.classList.remove("warna");
      });
      sectionUtama.classList.add("warna");
      wrappersPage.forEach((wrapperP) => {
        wrapperP.classList.remove("onTab");
      });
      wrappersPage[index].classList.add("onTab");
    });
  });

  navKiri.forEach((navK, index) => {
    navK.addEventListener("click", () => {
      navKiri.forEach((nav) => {
        nav.classList.remove("navigate");
      });
      navK.classList.add("navigate");
    });
  });

  containersMenu.forEach((container) => {
    container.addEventListener("click", () => {
      containersMenu.forEach((c) => {
        c.classList.remove("onSlide");
      });
      container.classList.add("onSlide");
    });
  });
});

const body = document.body;
let lastScroll = 0;
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    body.classList.remove("scrollUp");
  }
  if (currentScroll > lastScroll && !body.classList.contains("scrollDown")) {
    body.classList.remove("scrollUp");
    body.classList.add("scrollDown");
  }
  if (currentScroll < lastScroll && body.classList.contains("scrollDown")) {
    body.classList.remove("scrollDown");
    body.classList.add("scrollUp");
  }
  lastScroll = currentScroll;
});
