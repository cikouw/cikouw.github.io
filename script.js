
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".footer .btn-click");
  const contents = document.querySelectorAll(".content");
  const containers = document.querySelectorAll(".container .menu");
  const mains = document.querySelectorAll(".content-menu");
  
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", (event) => {
      event.preventDefault();
      tabs.forEach(t => {
        t.classList.remove("warna");
      });
      tab.classList.add("warna");
      contents.forEach(content => {
        content.classList.remove("on-tab");
      });
      contents[index].classList.add("on-tab");
    });
  });
  
  containers.forEach((container, index) => {
    container.addEventListener("click", (event) => {
      event.preventDefault();
      containers.forEach(c => {
        c.classList.remove("aktif");
      });
      container.classList.add("aktif");
      mains.forEach((main) => {
        main.classList.remove("aktif");
      });
      mains[index].classList.add('aktif');
    });
  });
});