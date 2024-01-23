const bntMenu = document.querySelector(".icon-menu");
const bntClose = document.querySelector(".icon-menu-close");
const nav = document.querySelector(".nav");
const modalCard = document.querySelector(".modal");
const inputRadios = modalCard.querySelectorAll("[id]");

const show = () => {
  nav.classList.remove("hidden");
  bntMenu.style.display = "none";
  bntClose.style.display = "block";
};

const hidden = () => {
  bntClose.style.display = "none";
  bntMenu.style.display = "block";
  nav.classList.add("hidden");
};



bntMenu.addEventListener("click", show);

bntClose.addEventListener("click", hidden);


