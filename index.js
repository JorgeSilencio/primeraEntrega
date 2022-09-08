function mensualidades (producto, credito){
    let resultado = producto / credito;
    return resultado;
}

alert ("Bienvenido a nuestra tienda de ofertas");

let producto = parseInt(prompt (`Elige el producto que deseas comprar: \n1: Computadora = $17,500\n2: Televisor LG = $18,750\n3: Lavadora = $11,300\n4: Estufa = $8,500`));

if (producto == 1){
    producto = 17500;
}
else if (producto == 2){
    producto = 18750;
}
else if (producto == 3){
    producto = 11300;
}
else if (producto == 4){
    producto = 8500;
}
else {
    alert ("Por favor escoge un número entre el 1 y el 4");
}

let credito = parseInt(prompt(`Elige las mensualidades para tu pago: \n1: 3 meses\n2: 6 meses\n3: 9 meses\n4: 12 meses`));

if (credito == 1){
    credito = 3;
}
else if (credito == 2){
    credito = 6;
}
else if (credito == 3){
    credito = 9;
}
else if (credito == 4){
    credito = 12;
}
else {
    alert ("Por favor escoge un número entre el 1 y el 4");
}

let resultado = mensualidades (producto, credito)
document.write (`<br>Escogiste pagar ${resultado} durante ${credito} meses para adquirir este producto`);

//Incorporando arrays

const listaDeseos = [];
let cantidad = 4;
do {
    let entrada = prompt("Ingresa 4 productos que desearías encontrar en nuestra tienda:");
    listaDeseos.push(entrada);
    console.log(listaDeseos.length);
} while (listaDeseos.length != cantidad)
const nuevaLista = listaDeseos.concat ([" y mucho más proximamente"]);

document.write (`<br><br>Tendremos en cuenta tu lista de deseos que incluye: ${nuevaLista.join (", ")}<br><br>`);

// Ejercicio con ciclos

alert ("Ahora vamos a obtener la table de multiplicar del número que tú elijas");
let numero = parseInt(prompt ("Ingresa un número"));

for (let i = 1; i <= 10; i++){
    let multiplicar = numero * i;
    document.write(numero + " x " + i + " = " + multiplicar + "<br>");
}

// Ejercicio con objetos

let guitarra = prompt("Ingresa el tipo de guitarras que tocas:");
let cuantasCuerdas = parseInt(prompt("Cuántas cuerdas tiene?:"));
let colorInstrumento = prompt("De qué color es?:");

let musica = {
    instrumento: guitarra,
    cuerdas: cuantasCuerdas,
    color: colorInstrumento,
}

document.write (`<br><br>Tienes una guitarra ${musica.instrumento} de ${musica.cuerdas} cuerdas y de color ${musica.color}`);