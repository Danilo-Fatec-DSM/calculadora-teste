const tela = document.querySelector(".calculadora-tela");
const numbers = document.querySelectorAll(".number");
const operacoes = document.querySelectorAll(".operacao");
const limparC = document.querySelector(".limpar-c");
const limparCE = document.querySelector(".limpar-ce");

let valorAtual = "";
let primeiroValor = null;
let operacaoPendente = null;

function atualizaTela(valor) {
  tela.innerText = valor || "0";
}

function mostraValor(e) {
  const tecla = e.currentTarget.textContent;
  
  if (valorAtual === "0" && tecla !== ",") {
    valorAtual = tecla;
  } else {
    valorAtual += tecla;
  }
  
  atualizaTela(valorAtual);
}

function somar(a, b) { return a + b; }
function subtrair(a, b) { return a - b; }
function multiplicar(a, b) { return a * b; }
function dividir(a, b) { return b !== 0 ? a / b : "Erro"; }

function definirOperacao(e) {
  const operacaoEscolhida = e.currentTarget.textContent;

  if (operacaoEscolhida === "=") {
    executarCalculo();
    return;
  }

  if (valorAtual !== "") {
    primeiroValor = parseFloat(valorAtual.replace(",", "."));
    operacaoPendente = operacaoEscolhida;
    valorAtual = "";
  }
}

function executarCalculo() {
  if (primeiroValor === null || valorAtual === "") return;

  const segundoValor = parseFloat(valorAtual.replace(",", "."));
  let resultado = 0;

  switch (operacaoPendente) {
    case "+": resultado = somar(primeiroValor, segundoValor); break;
    case "-": resultado = subtrair(primeiroValor, segundoValor); break;
    case "*": resultado = multiplicar(primeiroValor, segundoValor); break;
    case "/": resultado = dividir(primeiroValor, segundoValor); break;
  }

  atualizaTela(resultado);
  valorAtual = resultado.toString();
  primeiroValor = null;
  operacaoPendente = null;
}

numbers.forEach(number => {
  number.addEventListener("click", mostraValor);
});

operacoes.forEach(op => {
  op.addEventListener("click", definirOperacao);
});

module.exports = { somar, subtrair, multiplicar };