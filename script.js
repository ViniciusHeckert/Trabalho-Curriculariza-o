let dog = null
const fecharpopup = document.getElementById('fecharpopup');
const malha = document.getElementById('malha');

function appendvalue(id) {
    dog = document.getElementById(id);  // busca o elemento com esse ID
    dog.style.display = 'flex';
    fecharpopup.style.display = 'flex';
    malha.style.display = 'flex';
}

function fechar() {
    fecharpopup.style.display = 'none';
    malha.style.display = 'none';
    if (dog) dog.style.display = 'none'; 
}
