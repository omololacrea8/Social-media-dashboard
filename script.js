let toggleSwitch = document.getElementById("slider");
let html = document.querySelector("html");

toggleSwitch.addEventListener("click", () => {
    toggleSwitch.classList.toggle("dark");
  html.classList.toggle("dark");
});

