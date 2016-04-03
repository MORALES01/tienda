/*ar html = '';
var numeroColores = 10;

/*
este software permite obtener colores alazar,
*/
/*function random(limite)
{
	return Math.floor(Math.random( )* limite);
}
function crearColorBasico()
{
	var colorBasico = random(256);
	return colorBasico;
}
function CrearColorRGB()
{
	var azul = crearColorBasico();
	var rojo = crearColorBasico();
	var verde = crearColorBasico();
	var rgbColor ='rgb(' + verde + ',' + rojo + ' ,' + azul + ' )';
	return rgbColor;
}

// imprimimos el numero de colores deseados en el div.

for (var i=0; i< numeroColores;i++)
{
	html += '<div style="background-color:' + CrearColorRGB() + '"></div>';
}
document.write(html);*/

/*var ordenPedido = ["item1","item2","item3","item4"];
var envio = ordenPedido.shift();
var cancelado = ordenPedido.pop();*/


/*var deportes=  ["barcelona","emelec","aucas"];
deportes.push("delfin","fuerza amarilla", "delfin");
deportes.unshift("loja");*/


/*function printList(list) {
	var listHTML = '<ol>';
	for (var i = 0; i < list.length; i += 1){	
	listHTML += '<li>' + 'list[i]' + '</li>';
}
}
listHTML += '</ol>';
print("listHTML");

function print (html) {
document.write(html);
}

var playList = [];
playList.push("aguita de cucaracha");
playList.push("3 mujeres un camino");
playList.push("la chapa de vibra");
playList.unshift("el negrito de la salsa");	
playList.unshift("xxxxxxx");

printList(playList);*/

/*function printList(lista) 
{
	var listHTML = '<ol>';
	for (var i = 0; i < lista.length; i ++)
	{	
		listHTML += '<li>' + lista[i] + '</li>';
}
listHTML += '</ol>';
print(listHTML);
}

function print (html) 
{
	document.write(html);
}

var productosDisponibles = ["camisa", "pantalon", "camiseta","medias","pantaloneta"];

while (true)
{
	var busqueda= prompt( "ingresa el articulo");
	
	if (busqueda == "q")
		{
			break; 
	}
	else if(busqueda== "l")
	{

	printList(productosDisponibles); 
}
else 
{
	var encontrado = productosDisponibles.indexOf(busqueda);
	if (encontrado >= 0)
{
	alert("si tenenos " +busqueda+ "en nuestro almacen");
}else if (encontrado < 0)
{

alert("no tenemos" +busqueda+ "en nuestro almacen, no insista");
}
}
}*/
/*function printListReproduccion(listCanciones) {
	var listHTML = '<ol>';
	for (var i = 0; i < listCanciones.length; i += 1){	
	listHTML += '<li>Tema:' + listCanciones[i][0] + '.Por:' + listCanciones '</li>';
}
}

listHTML += '</ol>';
print("listHTML");

function print (html) {
document.write(html);
}

var playList = [];
playList.push(["aguita de cucaracha", "maximo Escalera"]);
playList.push(["3 mujeres un camino","ddd"]);
playList.push(["la chapa de vibra","aaa"]);
playList.unshift(["el negrito de la salsa","www"]);	
playList.unshift(["xxxxxxx","xxx"]);

printList(playList);*/

/*var preguntas = [];
preguntas.push(["A quien dejo Jhon ayer en el almuerzo?", Richard]);
preguntas.push(["quien es el lider de los conejitos?", Wilmer]);
preguntas.push(["quien es el chofer oficial de los chispas", Jhon]);
preguntas.push(["quien no programa del 2004", Fabian]);
preguntas.push(["quien se chumo ayer",conejo]);
preguntas.push(["quien es Eliana", SeSientaConJhon]);

function imprimirRepuestas(tipoRespuestas)
{
	var arregloRespuestas;
	var stringRespuestas = '';
	if (tipoRespuestas.toLowerCase()== "correctas"|| tipoRespuestas.toLowerCase()== "incorrectas");
    {
	if (tipoRespuestas == "correctas")
	        {
		arregloRespuestas =  correctas;
	        }else      {
		arregloRespuestas = incorrectas;
                       }
if(arregloRespuestas.length<1)
                       {
	stringRespuestas = "no hay respuestas" + tipoRespuestas;
                       }
for (var i=0; i < arregloRespuestas.length; i++)
            {
	stringRespuestas += "<p><b>" + arregloRespuestas [i][0]+ arregloRespuestas [i][1] + "</p>";
	// si la respuesta es incorrecta agregar las repuesta
	if (tipoRespuestas == "incorrectas") 
		               {
	stringRespuestas += "<i>la respuesta correcta era:"  + arregloRespuestas[i][2] + "</i>";
                       }
             }
     }else             {

	alert("error, vea consola!");
	throw new Error ("Tipo de Respuesta no aceptado");
                       }
	return stringRespuestas;
}
//imprimir todo elcuestionario, incluyendo respuesta correctas
function imprimirCuestionario()
{
	html +="<h3>Respuestas correctas</h3>";
	html += imprimirRepuestas("correctas");
	html += '<h3 style = "color:red;">Respuestas incorrectas</h3>';
	html += imprimirRepuestas("incorrectas");
	return html;
}
function printHTML(mensaje)
{
	// document.write(html);
	var outputDiv + document.getElementById("output");
	outputDiv.innerHTML = mensaje;
}
var respuestas = [];
var correctas = [];
var incorrectas = [];

//Preguntamos y procesamos las respuestas
for(var i=0; i<preguntas.length; i++)
{
	var respuestaSimple;
	do{
		respuestaSimple = prompt("Responda: " + preguntas[i][0]);
	}while(respuestaSimple=='')

	if(isNaN(respuestaSimple))
	{
		respuestas.push(respuestaSimple.toLowerCase());
	}else{
		respuestas.push(parseInt(respuestaSimple));
	}

	if(respuestas[i]==preguntas[i][1])
	{
		correctas.push(preguntas[i]);
	}else{
		incorrectas.push([preguntas[i][0],respuestas[i],preguntas[i][1]]);
	}
}
var html = "<h1>Pregunta Pregunton</h1>";
html += "<h2>Aqui el resultado de sus respuestas</h2>"
html += imprimirCuestionario();
printHTML(html);*/

var persona = {
	nombre: "angel",
	pais:"ecuador",
	edad:32,
	laborando: true,
	habilidades: ["java", "c++", "php"]
}
;

function printHTML(mensaje)
{
	var outputDiv =document.getElementById("output");
	outputDiv.innerHTML=mensaje;
}
var saludo = "<p>hola" +persona.nombre +"bienvenido <p/>";
saludo += "<p>como les va en:" +persona.pais +"<p/>";
persona.nombre= "Programador Clase: Z";
saludo += "<p>Tu usuario es:" +persona.nombre + "<p/>";
saludo += "<p>Tu edad sera:" +(persona.edad+1)+ "<p/>";
saludo += "<p>Tienes al momento:" +(persona.edad)+ "<p/>";
saludo += "<p>Tushabilidades son:" +persona.habilidades.join(",")+
printHTML(saludo);