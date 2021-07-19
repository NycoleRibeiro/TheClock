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
                modal.classList.remove('mostrar') // por enquanto ta só fechando, mas ainda tem q salvar os input
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