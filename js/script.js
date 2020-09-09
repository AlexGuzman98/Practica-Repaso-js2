function clickit(event){
    
}

const enlace = document.querySelectorAll('.tabs-tablist-item');
const contenido = document.querySelectorAll('.tabs-content-item');
for(let i = 0; i < contenido.length; i++){
    contenido[i].style.display = 'none';
}
for(let i = 0; i < enlace.length; i++){
    enlace[i].addEventListener('click', clickit);
}

