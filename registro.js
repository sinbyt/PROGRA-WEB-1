document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("registro").addEventListener('submit', validarFormulario); 

  });
  
  function validarFormulario(evento) {
    evento.preventDefault();

 
   

    let hoy = new Date();
    hoy.setHours(0,0,0,0);
  
    
    let birthdate = new Date(document.getElementById("fecha").value);
  
    if (birthdate <= hoy) {
      alert('Ingrese una fecha menor a hoy');
      return;
    }
    var contra1 = document.getElementById('contra1').value;
    var contra = document.getElementById('contra').value;

    if(contra != contra1) {
      alert('Las contraseñas no coinciden');
      return;
    }

 
  
    alert("Registro exitoso");
 
    this.submit();
  }

