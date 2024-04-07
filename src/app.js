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

const handleShowHideFooter = () => {
  const footer = document.querySelector(".footer");
  const bottomOfthePage =
    window.innerHeight + Math.round(window.scrollY) >=
    document.body.offsetHeight;

  if (bottomOfthePage) {
    footer.className = "footer";
    return;
  }

  if (window.scrollY > scrollPosition - window.scrollY) {
    footer.classList.remove("show");
    footer.classList.add("hide");
  } else {
    footer.classList.remove("hide");
    footer.classList.add("show");
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
  window.addEventListener("scrollend", handleShowHideFooter);
};

export default app;
