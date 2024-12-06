// let firstname = prompt("Please Enter Your Name");

// const welcome = document.querySelector("#Welcome");
// welcome.textContent = `Welcome to the jungle ${firstname}`;

const topbutton = document.querySelector("#scroll");

window.addEventListener("scroll", checkheight);

function checkheight() {
  // window is the current window and scroll is the Y axis scrolled
  if (window.scrollY > 500) {
    topbutton.style.display = "flex";
  } else {
    topbutton.style.display = null;
  }
}
topbutton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
