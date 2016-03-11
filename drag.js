function drag(ev) {
  ev.dataTransfer.setData("id", ev.target.id);
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("id");
  ev.target.appendChild(document.getElementById(data));
}