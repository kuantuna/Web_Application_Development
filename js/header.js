if(sessionStorage.length>0){
    document.getElementById("header").innerHTML = "<div class='header'>" +
    "<div class='header-left'>" +
        "<i class='logox'>Vibefy</i>" +
    "</div>" +
    "<div class='header-right'> " +
        "<a href='home.html'><i>Home</i></a>" +
        "<a href='login.html'><i>Logout</i></a>" +
    "</div>" +
    "</div>";
}
else{
document.getElementById("header").innerHTML = "<div class='header'>" +
"<div class='header-left'>" +
    "<i class='logox'>Vibefy</i>" +
"</div>" +
"<div class='header-right'> " +
    "<a href='home.html'><i>Home</i></a>" +
    "<a href='register.html'><i>Register</i></a>" +
    "<a href='login.html'><i>Login</i></a>" +
"</div>" +
"</div>";
}
