"use strict"

window.onload=function(){
    // FUNÇÕES DO MENU
    let menuButton = document.querySelector("#menuicon");
    let menu = document.querySelector('#menu-principal');

    menuButton.addEventListener('click', () => {
        menu.classList.toggle('mostrar-menu');
        menu.addEventListener('click', (e) => {
            if(e.target.id != 'menu-principal') {
                menu.classList.remove('mostrar-menu')
            };
        })
    })
}

let hh = 0;
let mm = 0;
let ss = 0;
const tempo = 1000; // tempo em milésimos
let cronometer;

//Botções de interação como pausar, zerar e iniciar

function start() {
    cronometer = setInterval(() => { timer(); }, tempo);
}

function pause() {
    clearInterval(cronometer);
}

function stop() {
    clearInterval(cronometer);
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById("segundos").innerText = '00';
    document.getElementById("minutos").innerText = '00';
    document.getElementById("horas").innerText = '00';
}
// Função do cronômetro

function timer() {
    ss++;
    if (ss == 60) {
        mm++;
        ss = 0;
        if(mm == 60) {
            hh++;
            mm = 0;
        }
    }
    let formatHora = (hh < 10 ? '0'+hh : hh);
    let formatMin = (mm < 10 ? '0'+mm : mm);
    let formatSeg = (ss < 10 ? '0'+ss : ss);
    document.getElementById("horas").innerText = formatHora;
    document.getElementById("minutos").innerText = formatMin;
    document.getElementById("segundos").innerText = formatSeg;
}