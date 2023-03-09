const popUp = document.querySelector("#popup");
const closeIcon = document.querySelector("#close");
const contactBtn = document.querySelector("#contact");
const cancelBtn = document.querySelector("#cancel");
const navBar = document.querySelector("#navbar");
const hamburger = document.querySelector("#hamburger");

// functions
const togglePopUp = () => {
  popUp.classList.toggle("pop-up-hide");
};

const toggleNavBar = () => {
  navBar.classList.toggle("active-menu");
};

// execute functions
if (popUp && closeIcon && contactBtn) {
  contactBtn.addEventListener("click", togglePopUp);
  closeIcon.addEventListener("click", togglePopUp);

  if (cancelBtn) {
    cancelBtn.addEventListener("click", togglePopUp);
  }
}

if (navBar && hamburger) {
  hamburger.addEventListener("click", toggleNavBar);
}
