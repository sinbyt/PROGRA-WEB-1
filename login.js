/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
$ (document).ready(function(){
    $(login.html).submit(function(){
        event.preventDefault();
       $.ajax ({
           data:$("this").serialize(),
           type:"POST",
           dataType: "json",
           url:""
       }).done(function(){
           alert("Se realizo correctamente");
       })   .fail(function(){
                alert("Hubo un error");
       });
    });
    
}); 

