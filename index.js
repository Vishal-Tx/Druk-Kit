for (const element of document.querySelectorAll(".drum")) {
  element.addEventListener("click", function () {
    

    // console.log(this.innerHTML);
    let buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown", (event) => {
  makeSound(event.key);
  buttonAnimation(event.key);
});

document
  .querySelector(".autoplay-button")
  .addEventListener("click", function (event) {
    let inputUser = document.querySelector(".usrInputNote").value;
    console.log(inputUser.split(""));
    let playButtons = inputUser.split("");
    let delay = document.querySelector(".usrInputDelay").value * 1000;
    console.log(delay);

    playButtons.forEach((element, index) => {
      setTimeout(() => {
        makeSound(element);
        buttonAnimation(element);
        console.log(element, delay, delay * index);
      }, delay * index);
    });

    // makeSound("j");
    // buttonAnimation("j")

    // setTimeout(() => {
    //   makeSound("k");
    //   buttonAnimation("k")
    // }, 1000);

    // setTimeout(() => {
    //   makeSound("w");
    //   buttonAnimation("w")
    // }, 2000);

    // setTimeout(() => {
    //   makeSound("s");
    //   buttonAnimation("s")
    // }, 3000);
  });

function makeSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      let kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    default:
      console.log(buttonInnerHTML);
      break;
  }
}

const buttonAnimation = (currentKey) => {
  let activeButton = document.querySelector("." + currentKey);
  console.log('activeButton', activeButton);
  activeButton.classList.add("pressed");

  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 150);
};
// document.querySelector(".set").addEventListener("click", buttonClick);

// function buttonClick(){
//     console.log(this.innerHTML);
// }
