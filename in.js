alert("WARNING: Your device has been infected with a virus. Please contact tech support immediately.");

var audio = new Audio('file:///Users/chloetremmel/Music/iTunes/iTunes%20Media/Music/Unknown%20Artist/Unknown%20Album/Nebula%20-%20myuu.mp3');

function go() {
    document.body.style.backgroundColor = "red";
    document.getElementById("aaa").style.visibility = "hidden";
    audio.play();
    
}