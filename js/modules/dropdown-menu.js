import outsideClick from "./outsideclick.js";

export default function initDropDownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");

  function handleClick(e) {
    e.preventDefault();
    this.classList.add("active");
    outsideClick(this, ["touchstart", "click"], () => {
      this.classList.remove("active");
    });
  }

  if (dropdownMenus) {
    dropdownMenus.forEach((menu) => {
      ["touchstart", "click"].forEach((userEvent) => {
        menu.addEventListener(userEvent, handleClick);
      });
    });
  }
}
