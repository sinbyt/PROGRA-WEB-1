const form = document.querySelector("form");
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),

form.onsubmit = (e)=>{
  e.preventDefault(); //preventing from form submitting
  //if email and password is blank then add shake class in it else call specified function
  (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();

  setTimeout(()=>{ //remove shake class after 500ms
    eField.classList.remove("shake");
   
  }, 500);
  
  eInput.onkeyup = ()=>{checkEmail();} //calling checkEmail function on email input keyup
  pInput.onkeyup = ()=>{checkPass();} //calling checkPassword function on pass input keyup

  function checkEmail(){ //checkEmail function
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
    if(!eInput.value.match(pattern)){ 
      alert("Ingrese un correo valido");
      return
     
    }
  

  
  }
  alert("Correcto");

}
