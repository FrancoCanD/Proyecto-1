function mostrarexterno () {
    alert('Mostrar más información desde un archivo js externo')
}

let miDivFila = document.getElementById('miDivFila');
console.log(miDivFila);
miDivFila.innerHTML = '<div class="col col-lg-2 border border-warning">Este div cambio de 3 a 1 caja';

let parrafoLorem = document.getElementById('lorem');
parrafoLorem.innerText = 'Este es un texto modificado desde Javascript.';
parrafoLorem.style.color = 'blue';
parrafoLorem.style.fontWeight = 'bold';
parrafoLorem.style.fontSize = '18px';

function mostrar(){
    const nombreInput = document.getElementById('nombre');
    const salida = document.getElementById('salida');

    const nombre = nombreInput.value.trim();
    if (nombre.trim() === '') {
        salida.innerText = 'Por favor, ingresa un nombre';
        return;
    } else{
        salida.innerText = 'Hola, ' + nombre + '!';
    }
}

let contador = 0;
function formatear(){
    const nombre = document.getElementById('nombre').value.trim();
    const historial = document.getElementById('historial');

    if (!nombre) return;
    /*if (nombre === ''){
		return;
	}
	es equivalent al anterior*/ 
    contador++; 
    /*contador = contador + 1 es equivalente*/
    const item = `<p class="historial-item"><strong>${contador}.</strong> Guardado: <em>${nombre}</em></p>`
    historial.innerHTML +=item;
}

function finalizar(){
    const nombre = document.getElementById('nombre').value.trim();
    const mensajeBase = nombre ? `Proceso finalizado.` : 'Proceso finalizado.';
    alert(mensajeBase + 'El historial será limpiado.');
    const historial = document.getElementById('historial');
    historial.innerHTML = '';
    contador = 0;
}
