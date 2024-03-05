//Función: cuidadoConElConsoleLog
function cuidadoConElConsoleLog(nombre) {
    console.log(nombre);
    //return nombre;
}
  

//otra funcion
function otraFuncion() {
    
    return (
        "El nombre retornado por la función 'cuidadoConElConsoleLog' es: " + 
        cuidadoConElConsoleLog('Camilo')
    )
}