// let firstname = prompt("Please Enter Your Name");

// const welcome = document.querySelector("#Welcome");
// welcome.textContent = `Welcome to the jungle ${firstname}`;

const topbutton = document.querySelector("#scroll");

// Scroll button support from
// https://www.youtube.com/watch?v=WSMeuJmS0fc
// window is what the event is being actioned from. So in this case, we're using the current web window
// addEventListener creates a line that waits for a certain action. In this case is 'Scrolling' with 'checkheight' having it waiting for it to scroll a certain distance

window.addEventListener("scroll", checkheight);

// checkheight function is to check the current height
// scrollY checks the vertical height that is currently being scrolled to, actioning that particular function if it is at/above/below a certain height, which in this code is 500 pixels below the top of the page
// style.display is changing the display style to the string "flex" wehereas

function checkheight() {
  // window is the current window and scroll is the Y axis scrolled
  if (window.scrollY > 500) {
    topbutton.style.display = "flex";
  } else {
    topbutton.style.display = null;
  }
}

// These lines are to add an event when the button is clicked. In this code, the action is to go to the 'top' of the document with a height of 0. If I were to set this to another number, it would go that many pixels below the top of the page. The beahaviour sets a certian behaviour to the action, which in this case is to 'smooth' the scroll and animate the window moving to the top of the page instead of appearing instantly
topbutton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ChatGPT created, partially understood, wanted to protect your ears
// The event that's being looked for is the DOM being loaded?
// The if statement is targetting the new const 'audioElement' which is the Audio in the HTML file
// audio.volume is adjusting the volume based on the number provided with is 0.1, so playing the file at 10% volume

document.addEventListener("DOMContentLoaded", function () {
  const audioElement = document.getElementById("audioPlayer");

  if (audioElement) {
    audioElement.volume = 0.1;
  }
});
