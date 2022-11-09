const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', ()=>{
  document.body.classList.toggle('dark');
  btnSwitch.classList.toggle('active');
});



let btn_compra = document.querySelectorAll(".botonCompra");
let carrito =  JSON.parse(localStorage.getItem('carrito')) || [];
document.addEventListener('DOMContentLoaded' , ()=> {
  guardarStorage();
  mostrar_carrito();
})

console.log(btn_compra);

for(let boton of btn_compra){

  boton.addEventListener('click', agregar_a_carrito);

}

function agregar_a_carrito(e){

  console.log(e.target);
  
  let hijo = e.target;
  let padre = hijo.parentNode;
  let abuelo = padre.parentNode;

  console.log(hijo);
  console.log(padre);
  console.log(abuelo);

  let nombre_producto = padre.querySelector('h5').textContent;
  let precio_producto = padre.querySelector('p').textContent;
  let img = abuelo.querySelector('img').src;

  console.log(nombre_producto);
  console.log(precio_producto);
  console.log(img);


  let producto = {
    nombre: nombre_producto,
    precio: precio_producto,
    img: img,
    cantidad: 1

  }

  carrito.push(producto);
  
  mostrar_carrito(producto);

}



function mostrar_carrito( producto ){

  let fila = document.createElement("tr");
  fila.innerHTML = `<td><img src="${producto.img}"></td>
                    <td>${producto.nombre}</td>
                    <td>${producto.cantidad}</td>
                    <td>${producto.precio}</td>
                    <td><button class="btn btn-danger borrar_elemento">Borrar</td>`;
  
  console.log( fila );      
  let tabla = document.getElementById("tbody");
  tabla.append( fila );



  let btn_borrar = document.querySelectorAll(".borrar_elemento");


  for( let boton of btn_borrar){

      boton.addEventListener("click" , borrar_producto);
  }

  guardarStorage()

}



function borrar_producto(e){

  
  let abuelo = e.target.parentNode.parentNode;

  abuelo.remove();

}




let btn_carrito = document.getElementById("mostrar_carrito");

btn_carrito.addEventListener("click", function(){

  let carrito = document.getElementById("carrito");

  if(carrito.style.display != "none"){

      carrito.style.display = "none";
  }
  else{
      carrito.style.display = "flex";
  }

} )

function guardarStorage(){
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

