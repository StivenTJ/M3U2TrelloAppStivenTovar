const todoTask = document.getElementById("todoTask");
new Sortable(todoTask, {
    group: 'shared',
    animation: 150
});

const progressTask = document.getElementById("progressTask");
new Sortable(progressTask, {
    group: 'shared',
    animation: 150
});

const doneTask = document.getElementById("doneTask");
Sortable.create(doneTask, {
    group: 'shared',
    animation: 150
});

const containerToDo = document.getElementById("containerToDo");
new Sortable(containerToDo, {
    group: 'shared',
    animation: 150
});

const containerInProgress = document.getElementById("containerInProgress");
new Sortable(containerInProgress, {
    group: 'shared',
    animation: 150
});

const containerDone = document.getElementById("containerDone");
new Sortable(containerDone, {
    group: 'shared',
    animation: 150
});
const eliminarTarea = (id) => {
    document.getElementById(id).style.display = "none";
}