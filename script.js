var dropTarget = document.querySelector(".wrapper");
var draggables = document.querySelectorAll(".task");

draggables.forEach(element => {
    element.addEventListener("dragstart", function (ev) {
        ev.dataTransfer.setData("srcId", ev.target.id);
    });
});

dropTarget.addEventListener('dragover', function (ev) {
    ev.preventDefault();
});

dropTarget.addEventListener('drop', function (ev) {
    ev.preventDefault();
    let target = ev.target;
    let droppable = target.classList.contains('box');
    let srcId = ev.dataTransfer.getData("srcId");

    if (droppable) {
        ev.target.appendChild(document.getElementById(srcId));
    }
});