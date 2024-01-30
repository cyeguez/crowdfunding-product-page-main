const bntMenu = document.querySelector(".icon-menu");
const bntClose = document.querySelector(".icon-menu-close");
const nav = document.querySelector(".nav");
const modalCard = document.querySelector(".modal");
const inputRadios = modalCard.querySelectorAll("input[type='radio']");
const sectionBtn = document.querySelector(".third-section");
const btnsRewards = sectionBtn.querySelectorAll(".button");
const modal = document.querySelector(".modal");

const btnCloseModal = document.querySelector(".modal__container__close-modal");
const allCards = modalCard.querySelectorAll(".modal__card");
const allPrice = modal.querySelectorAll(".modal__card__cost");
const containerInput = modal.querySelectorAll(".modal__card__container-select");
const allInputText = modal.querySelectorAll(".input-text");
const allBtnContinue = modal.querySelectorAll(".bt-continue");
const modalSucess = document.querySelector(".modal-sucess");

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

const showModal = (link) => {
  modal.classList.remove("hidden");
  numberLink = link.slice(-1);
  allCards.forEach((card) => {
    card.classList.remove("active");
  });

  allPrice.forEach((price) => {
    price.classList.add("hidden");
  });

  allCards[numberLink - 1].classList.add("active");
  allPrice[numberLink - 1].classList.remove("hidden");
  inputRadios[numberLink - 1].checked = true;

  activeInput(link);
};

const ofInputRadios = () => {
  inputRadios.forEach((inputRadio) => {
    inputRadio.checked = false;
  });
};

const activeInput = (x) => {
  ofInputRadios;
  x.checked = true;
};

const validationInputText = (valueInput, x) => {
  let nameInput = x.target;
  allBtnContinue.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (
        valueInput == 0 ||
        valueInput == "" ||
        valueInput == undefined ||
        valueInput == null ||
        valueInput
      ) {
        nameInput.style.border = "1px solid red";
        nameInput.nextElementSibling.classList.remove("hidden");
      }
      if (valueInput > 0) {
        nameInput.style.border = "1px solid hsl(0, 0%, 90%)";
        nameInput.nextElementSibling.classList.add("hidden");
        modal.classList.add("hidden");
        modalSucess.classList.remove("hidden");
      }
    });
  });
};

bntMenu.addEventListener("click", show);

bntClose.addEventListener("click", hidden);

btnsRewards.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let nameLink = e.target.className;
    showModal(nameLink);
  });
});

btnCloseModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

inputRadios.forEach((radio) => {
  radio.addEventListener("click", (e) => {
    showModal(e.target.id);
  });
});

allInputText.forEach((input) => {
  input.addEventListener("input", (e) => {
    let value = e.target.value;

    if (isNaN(value)) {
      input.value = "";
    } else {
      value = e.target.value;
    }
    validationInputText(value, e);
  });
});
