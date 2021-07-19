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