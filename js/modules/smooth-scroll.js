export default function initSmoothScroll() {
  const linksInternos = document.querySelectorAll(
    '[data-menu="suave"] a[href^="#"]'
  );

  const scrollToSection = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
