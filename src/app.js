import toggleDropDownMenu from "./modules/toggleDropDownMenu.js";

const app = () => {
  const menuIcons = document.querySelectorAll(".menu-icon");
  console.log(menuIcons);

  menuIcons.forEach((menuIcon) => {
    menuIcon.addEventListener("click", (event) => {
      const id = event.target.id;
      toggleDropDownMenu(menuIcon, id);
    });
  });
};

export default app;
