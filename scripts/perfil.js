window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            var img = document.querySelector('img');
            img.onload = () => {
                URL.revokeObjectURL(img.src); 
            }
  
            img.src = URL.createObjectURL(this.files[0]); 
            
        }
    });
  });

  const  datos=  [ ];

  document.querySelector("#form").addEventListener("submit", e => {

      let nombre = document.querySelector("#nombre").value;
      let apellido = document.querySelector("#apellido").value;
      let correo = document.querySelector("#email").value;


      const datosPersonas = {
        nombre: nombre,
        apellido: apellido,
        correo: correo
      }

      datos.push(datosPersonas);
      e.preventDefault();
    guardarDatos();
    document.querySelector("#form").reset();

  })
  const guardarDatos = () => {
      localStorage.setItem("Datos", JSON.stringify(datos))
  }