import toggleDropDownMenu from "./modules/toggleDropDownMenu.js";

let scrollPosition = null;

const handleShowHideHeader = () => {
  const header = document.querySelector(".header");

  if (window.scrollY === 0) {
    header.classList.remove("show");
  }

  if (window.scrollY > scrollPosition) {
    header.classList.remove("show");
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
    header.classList.add("show");
  }

  scrollPosition = window.scrollY;
};

const app = () => {
  const menuIcons = document.querySelectorAll(".menu-icon");
  console.log(menuIcons);

  menuIcons.forEach((menuIcon) => {
    menuIcon.addEventListener("click", (event) => {
      const id = event.target.id;
      toggleDropDownMenu(menuIcon, id);
    });
  });

  window.addEventListener("scroll", handleShowHideHeader);
};

export default app;
