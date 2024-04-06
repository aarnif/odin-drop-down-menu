const toggleDropDownMenu = (menuIcon, id) => {
  const dropDownMenuById = document.getElementById(`dropdown-menu-${id}`);
  menuIcon.classList.toggle("rotate");
  dropDownMenuById.classList.toggle("active");
};

export default toggleDropDownMenu;
