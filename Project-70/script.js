const main = document.querySelector(".main p");
const m = document.querySelector(".main");
const mainEl = document.querySelector(".main i");
const hide = document.querySelector(".hide");
const links = document.querySelectorAll(".hide li");
const hideEl = document.querySelector(".social-lists");


m.addEventListener("click", () => {
  hide.style.visibility = "initial";
  mainEl.classList.toggle("rotate");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    main.innerHTML = link.innerHTML;
    hideEl.style.visibility = "hidden";
    mainEl.classList.toggle("rotate");
  });
});
