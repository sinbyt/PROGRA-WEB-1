const form = document.querySelector("form");
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");
pField = form.querySelector(".fecha"),
pInput = pField.querySelector("input");

form.onsubmit = (e)=>{
  e.preventDefault(); 
  (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
  (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();

  setTimeout(()=>{
    eField.classList.remove("shake");
    pField.classList.remove("shake");
  }, 500);
  
  eInput.onkeyup = ()=>{checkEmail();} 
  pInput.onkeyup = ()=>{checkPass();} 

  function checkEmail(){ 
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
    if(!eInput.value.match(pattern)){
      eField.classList.add("error");
      eField.classList.remove("valid");
      let errorTxt = eField.querySelector(".error-txt");
     
      (eInput.value != "") ? errorTxt.innerText = "Ingrese un correo valido" : errorTxt.innerText = "Ingrese su correo";
    }else{
      eField.classList.remove("error");
      eField.classList.add("valid");
    }
  }


  function checkPass(){ 
    if(pInput.value == ""){ 
      pField.classList.add("error");
      pField.classList.remove("valid");
    }else{
      pField.classList.remove("error");
      pField.classList.add("valid");
    }
  }
  function checkPass(){
    if(pInput.value == ""){ 
      pField.classList.add("error");
      pField.classList.remove("valid");
    }else{ 
      pField.classList.remove("error");
      pField.classList.add("valid");
    }
  }

  

  //if eField and pField doesn't contains error class that mean user filled details properly
  if(!eField.classList.contains("error") && !pField.classList.contains("error")){
    window.location.href = form.getAttribute("action"); //redirecting user to the specified url which is inside action attribute of form tag
  }
}
