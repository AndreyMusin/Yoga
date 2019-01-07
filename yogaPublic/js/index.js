menu.onclick = function showMenu() {
    var x = document.getElementById("logo");
    
    if (x.className === "logo") {
        x.className += " responsive"
    } else {
        x.className = "logo"
    }
};