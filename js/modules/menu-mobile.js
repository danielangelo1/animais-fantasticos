import outsideEvent from "./outsideclick.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const events = ["click", "touchstart"];

  function openMenu() {
    menuList.classList.add("active");
    menuButton.classList.add("active");
    outsideEvent(menuList, events, () => {
      menuList.classList.remove("active");
      menuButton.classList.remove("active");
    });
  }

  if (menuButton) {
    events.forEach((event) => {
      menuButton.addEventListener(event, openMenu);
    });
  }
}
