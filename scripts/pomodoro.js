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
            /*VALIDAÇÃO*/
            if(e.target.className == 'button') {
                // pegando os valores
                let tempoFoco = document.querySelector(".focustimeInput").value;
                let minFoco = tempoFoco.slice(0,2);
                let segFoco = tempoFoco.slice(3,5);
                let tempoPausa = document.querySelector(".stoptimeInput").value;
                let minPausa = tempoPausa.slice(0,2);
                let segPausa = tempoPausa.slice(3,5);
                // verificar espaços usados
                let tamanho = tempoFoco.length
                let tamanho2 = tempoPausa.length
                if (tamanho != 5 || tamanho2 != 5) {
                    alert("Use o padrão: 00:00");
                } else if (isNaN(minFoco) || isNaN(segFoco) || isNaN(minPausa) || isNaN(segPausa)) {
                    alert("Use apenas números no padrão 00:00");
                } else {
                    modal.classList.remove('mostrar');
                    startTimer()
                }
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

function startTimer(){
    // Sons
    let alarme = new Audio('sounds/bell.mp3');

    // FUNÇÕES DO TIMER DO POMODORO
    let start = document.getElementById('start');
    let stop = document.getElementById('stop');
    let reset = document.getElementById('reset');

    //Pegando o tempo de foco
    let tempoFoco = document.querySelector(".focustimeInput").value;
    let minFoco = tempoFoco.slice(0,2);
    let segFoco = tempoFoco.slice(3,5);

    let focusMin = document.getElementById('focus_minutes');
    let focusSec = document.getElementById('focus_seconds');
    focusMin.innerHTML = minFoco;
    focusSec.innerHTML = segFoco;

    //Pegando o tempo de pausa
    let tempoPausa = document.querySelector(".stoptimeInput").value;
    let minPausa = tempoPausa.slice(0,2);
    let segPausa = tempoPausa.slice(3,5);

    let PauseMin = document.getElementById('pause_minutes');
    let PauseSec = document.getElementById('pause_seconds');
    PauseMin.innerHTML = minPausa;
    PauseSec.innerHTML = segPausa;

    //Pegando o número de ciclos
    let ciclos = document.querySelector(".sessionsInput").value;
    let cicloAtual = document.getElementById('counter');
    cicloAtual.innerHTML = ciclos;

    let startTimer;

    start.addEventListener('click', function(){
        if(startTimer === undefined){
            startTimer = setInterval(timer, 1000)
        } else {
            alert("O contador já está rodando!");
        }
    })

    reset.addEventListener('click', function(){
        focusMin.innerHTML = minFoco;
        focusSec.innerHTML = segFoco;

        PauseMin.innerHTML = minPausa;
        PauseSec.innerHTML = segPausa;

        cicloAtual.innerHTML = ciclos;
        stopInterval()
        startTimer = undefined;
    })

    stop.addEventListener('click', function(){
        stopInterval()
        startTimer = undefined;
    })


    //Iniciando timer
    function timer(){
        //Contagem regressiva do tempo de foco
        if(focusSec.innerText != 0){
            focusSec.innerText--;
        } else if(focusMin.innerText != 0 && focusSec.innerText == 0){
            focusSec.innerText = 59;
            focusMin.innerText--;
        }

        //Pausa a contagem regressiva
        if(focusMin.innerText == 0 && focusSec.innerText == 0){
            alarme.play();
            if(PauseSec.innerText != 0){
                PauseSec.innerText--;
            } else if(PauseMin.innerText != 0 && PauseSec.innerText == 0){
                PauseSec.innerText = 59;
                PauseMin.innerText--;
            }
        }

        //Decrementa o contador em um se completar um ciclo inteiro
        if(focusMin.innerText == 0 && focusSec.innerText == 0 && PauseMin.innerText == 0 && PauseSec.innerText == 0){
            if (cicloAtual.innerText == 1){
                stopInterval();
            }
            focusMin.innerHTML = minFoco;
            focusSec.innerHTML = segFoco;

            PauseMin.innerHTML = minPausa;
            PauseSec.innerHTML = segPausa;

            cicloAtual.innerText--;
            alarme.play();
        }
    }

        //Função para finalizar o timer
        function stopInterval(){
            clearInterval(startTimer);
        }
}