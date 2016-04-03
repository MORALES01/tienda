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

function printList(lista) 
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
}




