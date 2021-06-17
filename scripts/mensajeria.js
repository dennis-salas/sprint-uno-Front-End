const mensaje =  [ ];

document.querySelector("#contenedor-input").addEventListener("submit", e => {

    let mensaje = document.querySelector("#textoEntrante").value;

    const Mensajes = {
        mensaje: mensaje
    }
    

      let mensajePredeterminado = document.querySelector("#msj");
      mensajePredeterminado.innerHTML = `Hola gracias por comunicarte conmigo en este momento no estoy disponible pero te contactare pronto`;

      Mensajes.push(mensaje);
      e.preventDefault();
      guardarMensajes();
      document.querySelector("#contenedor-input").reset();

 
    const guardarMensajes = () => {
      localStorage.setItem("Datos", JSON.stringify(datos))
    }
})