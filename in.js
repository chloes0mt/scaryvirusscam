alert("WARNING: Your device has been infected with a virus. Please contact tech support immediately.");

var audio = new Audio('Nebula - myuu.mp3');

function go() {
    document.body.style.backgroundColor = "red";
    document.getElementById("aaa").style.visibility = "hidden";
    audio.play();
    
}
