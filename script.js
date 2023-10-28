import {barcelona, roma, paris, londres} from './ciudades.js'

//Obtener los elementos del DOM
let enlaces = document.querySelectorAll('a');
let tituloElemento = document.getElementById('titulo');
let subtituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');
let precioElemento = document.getElementById('precio');

//Agregar un evento click a cada enlace
enlaces.forEach(function(enlace){
    enlace.addEventListener('click', function(){
        //REMOVER EL ACTIVO de todos los enlaces
        enlaces.forEach(function (enlace){
            enlace.classList.remove('active');
        })
    
        //AGREGAR ACTIVE AL QUE CORRESPONDA
        this.classList.add('active');

        //TRAER LA INFORMACION DEL OBJETO CORESPONDIENTE A LA ELECCION
        let contenido = obtenerContenido(this.textContent);

        //MOSTRAR EL CONTENIDO EN EL DOM
        tituloElemento.innerHTML = contenido.titulo;
        subtituloElemento.innerHTML = contenido.subtitulo;
        parrafoElemento.innerHTML = contenido.parrafo;
        precioElemento.innerHTML = contenido.precio;
    });
}

)


//FUNCION PARA TRAER LA INFORMACION CORRECTA DESDE LAS CIUDADES.JS
function obtenerContenido(enlace){
    let contenido={
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    return contenido[enlace];
}
