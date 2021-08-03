window.onload=function(){
    // FUNÇÕES DO MODAL
    let configButton = document.querySelector(".config");
    let modal = document.querySelector("#modal-settings");

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
                let tempoSolicitado = document.querySelector(".timeInput").value;
                let hor = tempoSolicitado.slice(0,2);
                let min = tempoSolicitado.slice(3,5);
                let seg = tempoSolicitado.slice(6,8);
                // verificar espaços usados
                let quantia = tempoSolicitado.length
                if (quantia != 8) {
                    alert("Use o padrão: 00:00:00");
                } else if (isNaN(hor) || isNaN(min) || isNaN(seg)) {
                    alert("Use apenas números no padrão 00:00:00");
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
        menu.addEventListener('click', (e) => {
            if(e.target.id != 'menu-principal') {
                menu.classList.remove('mostrar-menu')
            };
        })
    })
}

    
// FUNÇÕES DO COUNTDOWN
function iniciar (){ 
    qtdSegundos = 0;
    qtdMinutos = 0;
    qtdHoras = 0;

    const formatarDigito = (digito) => `0${digito}`.slice(-2);

    const atualizar = (tempo) => {
        const segundos = document.getElementById('segundos');
        const minutos = document.getElementById('minutos');
        const horas = document.getElementById('horas');

        const qtdSegundos = tempo % 60;
        const qtdMinutos = Math.floor((tempo % 3600) / 60);
        const qtdHoras = Math.floor((tempo % 86400) / 3600);
        
        segundos.textContent = formatarDigito(qtdSegundos);
        minutos.textContent = formatarDigito(qtdMinutos);
        horas.textContent = formatarDigito(qtdHoras);
    }

    const contagemRegressiva = (tempo) =>{
        const pararContagem = () => clearInterval(id);

        const contar = () => {
        if (tempo == 0){
            const audio = document.querySelector('audio')
            audio.play()
            pararContagem();
        }
        atualizar (tempo);
        tempo--;
        }
        const id = setInterval(contar,1000);
    }

    let titulo = document.querySelector(".titleInput").value;
    let newtitle = document.querySelector("#title");
    newtitle.innerHTML = titulo

    let tempoSolicitado = document.querySelector(".timeInput").value;
    let hor = parseInt(tempoSolicitado.slice(0,2));
    let min = parseInt(tempoSolicitado.slice(3,5));
    let seg = parseInt(tempoSolicitado.slice(6,8));
    let valor = (hor*3600)+(min*60)+seg;


    contagemRegressiva(valor);

    
}
