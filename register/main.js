
function add(){
  
    localStorage["password"]=$("#password").val()
    localStorage["username"]=$("#username").val()
    localStorage["E-mail"]=$("#E-mail").val()
    localStorage["date"]=$("#date").val()
    localStorage["scout"]=$(".scout").val()

    if(localStorage.length<4){
        alert("PLEASE FILL AND TRY AGAIN")
   }
    else {alert("Your account has been creeated succesfully")
        window.location.href = "http://127.0.0.1:5500/index.html"}

}