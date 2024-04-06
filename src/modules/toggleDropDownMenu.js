const toggleDropDownMenu = (menuIcon, id) => {
  const dropDownMenuById = document.getElementById(`dropdown-menu-${id}`);
  if (dropDownMenuById.classList.contains("hidden")) {
    menuIcon.classList.remove("fa-chevron-down");
    menuIcon.classList.add("fa-chevron-up");
    dropDownMenuById.classList.remove("hidden");
  } else {
    menuIcon.classList.remove("fa-chevron-up");
    menuIcon.classList.add("fa-chevron-down");
    dropDownMenuById.classList.add("hidden");
  }
};

export default toggleDropDownMenu;
