export default function initModal() {
  const botaoAbrir = document.querySelector("[data-modal='abrir']");
  const botaoFechar = document.querySelector("[data-modal='fechar']");
  const containerModal = document.querySelector("[data-modal='container']");

  if (botaoAbrir && botaoFechar && containerModal) {
    const toggleModal = (e) => {
      e.preventDefault();
      containerModal.classList.toggle("ativo");
    };

    const clickOutOfModal = (e) => {
      if (e.target === containerModal) toggleModal(e);
    };

    botaoAbrir.addEventListener("click", toggleModal);
    botaoFechar.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", clickOutOfModal);
  }
}
