const on = document.querySelector("#on-ce");
const off = document.querySelector("#desligar");
const apagar = document.querySelector("#apagar");
const tela = document.querySelector(".tela");
const conteudo = document.querySelectorAll(".num");
const onOff = document.querySelector(".main--on-off");
const menu = document.querySelector("#menu");

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
  if (tela.classList.contains("on")) {
    const resultado = document.querySelector(".tela").innerHTML;
    if (tela) {
      tela.innerHTML = eval(resultado);
    }
  }
}

function toggleMenu(event) {
  if (event.type === "touchstart") {
    event.preventDefault();
  }
  const body = document.querySelector("body");
  body.classList.toggle("active");
  const active = body.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    document.querySelector('#aberto').classList.add('active-menu')
    document.querySelector('#fechado').classList.remove('active-menu')
    event.currentTarget.setAttribute("aria-label", "Fechar menu");
  } else {
    document.querySelector('#aberto').classList.remove('active-menu')
    document.querySelector('#fechado').classList.add('active-menu')
    event.currentTarget.setAttribute("aria-label", "Abrir menu");
  }
}

menu.addEventListener('click', toggleMenu);
menu.addEventListener('touchstart', toggleMenu);
apagar.addEventListener("click", back);
on.addEventListener("click", ligarLimpar);
off.addEventListener("click", desligar);
