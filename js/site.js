function toggleMenu() {
    var button = document.querySelector('.gg-menu-oreos');
    button.classList.toggle('gg-close');
    var menu = document.getElementsByClassName('js-menu');
    menu[0].classList.toggle("active");

}

function fixPhotoOnScroll() {
    var photo = document.getElementById("photo-profile");
    this.scrollY > 50 ? photo.style.marginTop = 0 : photo.style.marginTop = '-7rem';
}

window.addEventListener("scroll",fixPhotoOnScroll, false);

//----------------------------------------------//

function showImage(image) {
    var newImage = document.createElement('img');
    newImage.src = image.src;
    newImage.removeAttribute('onclick');
    var modal = document.getElementById('preview');
    modal.classList.toggle('showModal');
    var existinImage = modal.querySelector('img');
    if (existinImage) {
        modal.removeChild(existinImage);
    }
    modal.appendChild(newImage);
}

function cerrarModal() {
    const modal = document.getElementById('preview');
    modal.style.display = 'none'; // Oculta el modal
    modal.classList.remove('showModal'); // Se elimina la clase 'showModal' para cerrar el modal
}

function cerrarModal() {
    const modal = document.getElementById('preview');
    modal.classList.remove('showModal'); // Se elimina la clase 'showModal' para cerrar el modal
}



