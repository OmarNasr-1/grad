//Submit Subscribe LightBox:
let subscribeBtn = document.getElementById("subscribeBtn"),
    closeBtn = document.getElementById("closeBtn"),
    submitLighBox = document.getElementById("submit-lighBox"),
    emailInput = document.getElementById("emailInput"),
    emailInputAlert = document.getElementById("emailInputAlert");


subscribeBtn.addEventListener("click", function() {
    if(validateEmail() == true) {
        
        submitLighBox.style.display = "flex";
    }
    else {
        subscribeBtn.disabled = true;
    }
});

closeBtn.addEventListener("click", function() {
    submitLighBox.style.display = "none";
    emailInput.value = "";
});

//Validate Subscriibe Email:
function validateEmail() {
    let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{3,}$/;
            
                if(regex.test(emailInput.value) == true)
                {
                    emailInputAlert.classList.add("d-none");
                    emailInputAlert.classList.remove("d-block");

                    subscribeBtn.disabled = false;

                    return true;
                
                } else {
            
                    emailInputAlert.classList.add("d-block");
                    emailInputAlert.classList.remove("d-none");

                    subscribeBtn.disabled = true;
            
                    return false;
                };
}

emailInput.addEventListener("keyup", validateEmail);



  /*---------------------------------------------------------------- textarea */


$(function () {

    "use strick";
    var max = 100;
  
    $("textarea").keyup(function () {
  
      var length = $(this).val().length;
      var character = max - length;
  
      console.log(character)
  
      if (character <= 0) {
        $("#char").text("your available character finished");
  
      } else {
  
        $("#char").text(character);
      }
  
    });
  
  
  });
  




   

 ///////////////////logout//////////////////////////////
 function logout(){
   setTimeout(myfunction,1000)
 }
 function myfunction(){
   localStorage.removeItem("data")
   localStorage.removeItem("token")
   location.href="login.html"
 }


    





