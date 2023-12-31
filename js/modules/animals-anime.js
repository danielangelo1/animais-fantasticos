export default function initAnimalsAnime() {
  function animalsAnime() {
    const numeros = document.querySelectorAll("[data-numero]");

    numeros.forEach((num) => {
      const total = +num.innerText;
      const incremento = Math.floor(total / 100);
      let start = 0;

      const timer = setInterval(() => {
        num.innerText = start;
        start += incremento;
        if (start > total) {
          num.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }

  let observer;

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      animalsAnime();
    }
  }

  observer = new MutationObserver(handleMutation);
  const observeTarget = document.querySelector(".numeros");

  observer.observe(observeTarget, { attributes: true });
}
