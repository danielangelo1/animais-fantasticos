const controles = document.getElementById("controls");
const cssText = document.querySelector(".css");
const btn = document.querySelector(".btn");

controles.addEventListener("change", handleChange);

const handleStyle = {
  element: btn,
  text(value) {
    this.element.innerText = value;
  },
  color(value) {
    this.element.style.color = value;
  },
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  height(value) {
    this.element.style.height = value + "px";
  },
  width(value) {
    this.element.style.width = value + "px";
  },
  border(value) {
    this.element.style.border = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + "px";
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + "rem";
  },
};

function handleChange(e) {
  const name = e.target.name;
  const value = e.target.value;
  handleStyle[name](value);
  saveValues(name, value);
  showCss();
}

function saveValues(name, value) {
  localStorage[name] = value;
}

function setValues() {
  const properties = Object.keys(localStorage);
  properties.forEach((propertie) => {
    handleStyle[propertie](localStorage[propertie]);
    controles.elements[propertie].value = localStorage[propertie];
  });
  showCss();
}
setValues();

function showCss() {
  cssText.innerHTML =
    "<span>" + btn.style.cssText.split("; ").join(";</span><span>");
}

// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

function handleBTNClick(e) {
  e.preventDefault();
  const CEP = document.getElementById("cep").value;
  const cepAPI = fetch(`https://viacep.com.br/ws/${CEP}/json/`);

  cepAPI
    .then((res) => {
      return res.text();
    })
    .then((body) => {
      const div = document.querySelector(".cep-result");
      div.innerText = body;
    });
}

const cepForm = document.getElementById("form-cep");
const botao = document.getElementById("btn");

botao.addEventListener("click", handleBTNClick);

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

function fetchBitcoin() {
  // setInterval(() => {
  fetch("https://blockchain.info/ticker")
    .then((res) => {
      return res.json();
    })
    .then((body) => {
      const divBtc = document.querySelector(".btc-result");
      divBtc.innerText = "Valor do Bitcoin = " + body.BRL.buy + " REAIS";
    });
  // }, 30000);
}

fetchBitcoin();

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

function handleClickChucky(e) {
  e.preventDefault();
  fetchChucky();
}

function fetchChucky() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((res) => {
      return res.json();
    })
    .then((body) => {
      const spanChucky = document.querySelector(".piada");
      spanChucky.innerText = body.value;
    });
}

const nextBtn = document.getElementById("next");

const links = document.querySelectorAll("a");

function handleClick(e) {
  e.preventDefault();
  fetchPage(e.target.href);
  window.history.pushState(null, null, e.target.href);
}

async function fetchPage(url) {
  document.querySelector(".content").innerHTML = "Carregando";
  const pageRes = await fetch(url);
  const pageText = await pageRes.text();
  replaceContet(pageText);
}

function replaceContet(newText) {
  const newHTML = document.createElement("div");
  newHTML.innerHTML = newText;

  const oldContent = document.querySelector(".content");
  const newContent = newHTML.querySelector(".content");

  oldContent.innerHTML = newContent.innerHTML;
  document.title = newHTML.querySelector("title").innerText;
}

window.addEventListener("popstate", () => {
  fetchPage(window.location.pathname);
});

links.forEach((link) => {
  link.addEventListener("click", handleClick);
});

const texto = {
  get tamanho() {
    return this._numero;
  },
  set tamanho(num) {
    this._numero = num;
  },
};

class Button {
  constructor(text, background) {
    this.text = text;
    this.background = background;
  }
  element() {
    const btnElement = document.createElement("button");
    btnElement.innerText = this.text;
    btnElement.style.background = this.background;
    return btnElement;
  }
  appendTo(target) {
    const targetElement = document.querySelector(target);
    targetElement.appendChild(this.element());
    return targetElement;
  }
  static blueButton(text) {
    return new Button(text, "blue");
  }
}

const blueButton = new Button("Comprar", "blue");
const staticBlueButton = Button.blueButton("O VASCO");

console.log(staticBlueButton.appendTo("body"));

class Veiculo {
  constructor(rodas, combustivel) {
    this.rodas = rodas;
    this.combustivel = combustivel;
  }
  acelerar() {
    console.log("VRUMMMMMMMMMMMMM");
  }
}

class Moto extends Veiculo {
  constructor(rodas, combustivel, capacete) {
    super(rodas, combustivel);
    this.capacete = capacete;
  }
  empinar() {
    console.log("Moto empinou com" + this.rodas + " rodas ");
  }
  acelerar() {
    super.acelerar();
    console.log("acelerou demais");
  }
}

const honda = new Moto(2, "Gasolina", true);
const civic = new Veiculo(2);

function createButton(text) {
  const numSecret = "13123123";

  function element() {
    const btnElement = document.createElement("button");
    btnElement.innerText = text;
    return btnElement;
  }
  return {
    text,
    element,
  };
}

const btnBlue = createButton("Comprar");
