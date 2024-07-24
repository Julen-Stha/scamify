function showdropdown(){
    document.getElementById("add-member-1").classList.toggle("show");
}

window.onclick = function(event){
    if (!event.target.matches(".dropdown-menu")){
        document.getElementById("add-member-1").classList.remove("show");
    }
}

