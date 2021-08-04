window.onload=function(){
    // FUNÇÕES DO MODAL
    let configButton = document.querySelector(".config");
    let modal = document.querySelector('#modal-settings');

    configButton.addEventListener('click', () => {
        modal.classList.toggle('mostrar');
        modal.addEventListener('click', (e) => {
            //console.log(e.target) //para saber onde ta clicando
            if(e.target.id == 'modal-settings' || e.target.className == 'closeButton') {
                modal.classList.remove('mostrar') // ao clicar fora ou no x do modal ele fecha
            };
            if(e.target.className == 'button') {
                modal.classList.remove('mostrar')
                start();
            };
        })
    })

    // FUNÇÕES DO MENU
    let menuButton = document.querySelector("#menuicon");
    let menu = document.querySelector('#menu-principal');

    menuButton.addEventListener('click', () => {
        menu.classList.toggle('mostrar-menu');
        menu.addEventListener('click', (ev) => {
            console.log(ev.target);
            if(e.target.id != 'menu-principal') {
                menu.classList.remove('mostrar-menu')
            };
        })
    })
}

function iniciar (){ 
    // Pegando o tempo de foco
    let focusTime = document.querySelector(".focustimeInput").value;
    let horaFoco = parseInt(focusTime.slice(0,2));
    let minFoco = parseInt(focusTime.slice(3,5));
    let segFoco = parseInt(focusTime.slice(6,8));
    // Pegando tempo de pausa
    let restTime = document.querySelector(".stoptimeInput").value;
    let horaPause = parseInt(restTime.slice(0,2));
    let minPause = parseInt(restTime.slice(3,5));
    let segPause = parseInt(restTime.slice(6,8));
    // Pegando quantidade de sessões
    let session = document.querySelector(".sessionsInput").value;
    // Texto da qtd de sessions
    let textSession = document.querySelector(".sessions_number");

    for (var i = parseInt(session); i > 0; i--) {
        textSession.innerHTML = i;
        console.log(i);
    }
}

function start() {
    // Carregando sons
    var click = new Audio('sounds/click.mp3');
    var bell = new Audio('sounds/bell.mp3');
    click.play();

    hours = 1;
    minutes = 24;
    seconds = 59;

    const segundos = document.getElementById('segundos');
    const minutos = document.getElementById('minutos');
    const horas = document.getElementById('horas');
    segundos.innerHTML = seconds;
    minutos.innerHTML = minutes;
    horas.innerHTML = hours;

    var hours_interval = setInterval(hoursTimer, 3600000);
    var minutes_interval = setInterval(minutesTimer, 60000);
    var seconds_interval = setInterval(secondsTimer, 1000);

    const formatarDigito = (digito) => `0${digito}`.slice(-2);

    function secondsTimer() {
        seconds--;
        segundos.innerHTML = formatarDigito(seconds);
        if (seconds <= 0) {
            minutes--;
            seconds = 59;
            if (minutes <= 0) {
                hours--;
                minutes = 59;
                if (hours <= 0) {
                    clearInterval(hours_interval);
                    clearInterval(minutes_interval);
                    clearInterval(seconds_interval);

                    document.querySelector('.frase').innerHTML = "Hora da Pausa";
                }
            }
        } else {
            segundos.innerHTML = seconds;
        }
    }
}