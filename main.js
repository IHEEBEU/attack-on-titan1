function check(){
   
    if (localStorage.password===$("#password").val()&&localStorage.username===$("#username").val()){
        alert("You connected succesfully")
    // $("#off").replace('<img  src="ATTACK-ON-TITAN/images/register.png" id ="register" alt="register"></img>',"<img  src="+localStorage.scout+' id ="register" alt="register"></img>')
    $(".login1").append("<br><ul>"+localStorage.username+"</ul>")
    $(".login").css("display","none")
    $(".login1").css("display","block")
}else{
        alert("Check your username or password")
    }
}
function add(){
    localStorage["comment"]=$("#com").val()
    $("#comments").append("<p>"+$("#com").val()+"</p>")
}
function characters(){
    $("#main2").scrollIntoView({behavior: 'smooth'});
}