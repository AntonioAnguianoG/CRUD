//console.log(document)
/*const tareaInput = documentet.glementById('nameTask');
console.log(tareaInput)
const detalleInput = document.glementById('detalle-tarea');

const contenedorTareas = document.glementById('tareas');
*/
/*tareaInput.addEventListener('change', function() {
    console.log("FUNCION DATOS-TAREA");
    tareaObj[e.target.name] = e.target.value;
    consol.log(tareaObj);
})*/
let tareas = [];



function changename(e){
    console.log(e);
    const inputName = document.getElementById('nameTask');
    console.log(inputName.name);
    const inputDetalle = document.getElementById('detalle-tarea');
    console.log(inputDetalle.name);
    console.log("FUNCION DATOS-TAREA");
    let obj = {
        [inputName.name]: inputName.value,
        [inputDetalle.name]: inputDetalle.value,
        check: false
    
    }
    tareas.push(obj);
    
    console.log(obj);
    localStorage.setItem("nueva-tarea", JSON.stringify(tareas));
    inputName.value = ''
    inputDetalle.value = ''
    getTasks()

}

function getTasks () {
    const tasks = localStorage.getItem('nueva-tarea')
    console.log(JSON.parse(tasks))
    tareas = JSON.parse(tasks)
    //const detaill = localStorage.getItem('Newdetaill')
    //console.log(JSON.parse(detaill))
    render(tareas)
}

function render (lista){
   const inputLista = document.getElementById('tareas-lista');
   inputLista.innerHTML = ''

   lista.forEach((element, index) => {
    inputLista.innerHTML += `
    <div class="listita">
        <h3> Tarea:  </h3>
        ${element.tarea}
        
        <h3> Detalle:  </h3>
        ${element.detalle}
            
    </div>
    <button onclick="finalizar(${index})"  class="${element.check ? 'task-finish' : 'task-unfinish'}"  >Finalizado</button>
    <button onclick="eliminar(${index})" class="elim">Eliminar</button>
    `
   }); 
}

function eliminar(posicion){
    tareas.splice(posicion,1);
    console.log(tareas);

    localStorage.setItem("nueva-tarea", JSON.stringify(tareas));
    getTasks()

}

function finalizar(posicion){
    tareas[posicion].check = !tareas[posicion].check

    localStorage.setItem("nueva-tarea", JSON.stringify(tareas));
    getTasks()
}
getTasks()