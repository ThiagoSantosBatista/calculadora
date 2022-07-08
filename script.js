const on = document.querySelector("#on-ce");
const off = document.querySelector("#desligar");
const apagar = document.querySelector("#apagar");
const tela = document.querySelector(".tela");
const conteudo = document.querySelectorAll(".num");
const onOff = document.querySelector(".main--on-off");

function ligarLimpar() {
  if (tela.classList.contains("on")) {
    tela.innerHTML = "";
  } else {
    tela.classList.toggle("on");
    onOff.classList.toggle("ligado");
  }
}

function desligar() {
  if (tela.classList.contains("on")) {
    tela.innerHTML = "";
    tela.classList.remove("on");
    onOff.classList.remove("ligado");
  }
}

function imprimir(num) {
  if (tela.classList.contains("on")) {
    const numero = tela.innerHTML;
    tela.innerHTML = numero + num;
  }
}

function back() {
  const apagarUm = document.querySelector(".tela").innerHTML;
  tela.innerHTML = apagarUm.substring(0, apagarUm.length - 1);
}

function calcular() {
  const resultado = document.querySelector(".tela").innerHTML;
  if (tela) {
    tela.innerHTML = eval(resultado);
  }
}

apagar.addEventListener("click", back);
on.addEventListener("click", ligarLimpar);
off.addEventListener("click", desligar);
