// ta funcionando agora esta poha que por algum motivo não funciona sem o window.onload que eu nem sei pra q serve, é isso

window.onload=function(){
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
}
