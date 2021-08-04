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
                // pegando o valor
                let tempoSolicitado = document.querySelector(".focustimeInput").value;
                let min = tempoSolicitado.slice(0,2);
                let seg = tempoSolicitado.slice(3,5);
                // verificar espaços usados
                let quantia = tempoSolicitado.length
                if (quantia != 5) {
                    alert("Use o padrão: 00:00");
                } else if (isNaN(min) || isNaN(seg)) {
                    alert("Use apenas números no padrão 00:00");
                } else {
                    modal.classList.remove('mostrar');
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

    let startTimer;

    start.addEventListener('click', function(){
        if(startTimer === undefined){
            startTimer = setInterval(timer, 1000)
        } else {
            alert("O contador já está rodando!");
        }
    })

    reset.addEventListener('click', function(){
        focusMin.innerText = "00";
        focusSec.innerText = "00";

        PauseMin.innerText = "00";
        PauseSec.innerText = "00";

        document.getElementById('counter').innerText = 0;
        stopInterval()
        startTimer = undefined;
    })

    stop.addEventListener('click', function(){
        stopInterval()
        startTimer = undefined;
    })


    //Start Timer Function
    function timer(){
        //Work Timer Countdown
        if(focusSec.innerText != 0){
            focusSec.innerText--;
        } else if(focusMin.innerText != 0 && focusSec.innerText == 0){
            focusSec.innerText = 59;
            focusMin.innerText--;
        }

        //Break Timer Countdown
        if(focusMin.innerText == 0 && focusSec.innerText == 0){
            if(PauseSec.innerText != 0){
                PauseSec.innerText--;
            } else if(PauseMin.innerText != 0 && PauseSec.innerText == 0){
                PauseSec.innerText = 59;
                PauseMin.innerText--;
            }
        }

        //Increment Counter by one if one full cycle is completed
        if(focusMin.innerText == 0 && focusSec.innerText == 0 && PauseMin.innerText == 0 && PauseSec.innerText == 0){
            focusMin.innerText = 25;
            focusSec.innerText = "00";

            PauseMin.innerText = 5;
            PauseSec.innerText = "00";

            document.getElementById('counter').innerText++;
        }
    }

        //Stop Timer Function
        function stopInterval(){
            clearInterval(startTimer);
        }
}