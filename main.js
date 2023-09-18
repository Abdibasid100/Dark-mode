let logo = document.querySelector("#logo");
let btn = document.querySelector("#btn");
let btnText = document.querySelector(".btnText");
let btnIcon = document.querySelector(".btnIcon");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    logo.src = "images/logo-white.png";
    btnText.innerHTML = "Light";
    btnIcon.src = "images/sun.png";
  } else {
    logo.src = "images/logo.png";
    btnText.innerHTML = "Dark";
    btnIcon.src = "images/moon.png";
  }
});
