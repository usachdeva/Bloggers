let icon = document.querySelector("i");
let iconCl = icon.classList.contains("fa-sun");
let body = document.querySelector("body");
let anchor = document.querySelectorAll("a");
console.log(anchor[0].textContent);

icon.addEventListener("click", () => {
  if (body.classList.contains("light-theme")) {
    // changing the icons
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");

    // adding the theme
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");

    // color for the links
    anchor.style.color = "#FFFFFF";

    console.log("light-theme");
  } else {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");

    body.classList.remove("dark-theme");
    body.classList.add("light-theme");

    anchor.style.color = "#000000";

    console.log("dark-theme");
  }
});
