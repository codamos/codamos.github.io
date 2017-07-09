var modal = document.getElementsByClassName('modal')[0];
var button = document.getElementsByClassName("modal-button")[0];
var span = document.getElementsByClassName("modal-close")[0];

button.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}