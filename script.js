function generator_excuses(){

    let quien = ['El perro', 'Mi abuela', 'El cartero', 'Mi pájaro'];
    let accion = ['se comió', 'quemo', 'aplastó', 'rompió'];
    let que = ['mi tarea', 'mi teléfono', 'el carro', 'el tevisor'];
    let cuando = ['antes de la clase', 'mientras dormía', 'mientras hacía ejercicio', 'durante mi almuerzo'];

    let i = Math.floor(Math.random()*4);
    let str = quien[i]+" "+accion[i]+" "+que[i]+" "+ cuando[i];

    return str;
}

let frase = document.getElementById("excuse");

frase.innerHTML=generator_excuses();
