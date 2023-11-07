import initAnimalsAnime from "./animals-anime.js";

export default function initAnimalsFetch() {
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");

    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}`;
    return div;
  }

  async function fetchAnimals(url) {
    try {
      const animalsRes = await fetch(url);
      const animalsJSON = await animalsRes.json();
      const numerosGrid = document.querySelector(".numeros-grid");

      animalsJSON.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });
      initAnimalsAnime();
    } catch (erro) {
      console.log(erro);
    }
  }

  fetchAnimals("./animaisapi.json");
}
