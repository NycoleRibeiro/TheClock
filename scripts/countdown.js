function showModal(modalID) {
    const modal = document.getElementById(modalID);
    modal.classList.add('mostrar');
}

const logo = document.querySelector("#config");
logo.addEventListener('click', function() {
    showModal('modal-settings');
});
