

function Task(_description, _date, _time) {
    this.description = _description;
    this.dateToDo = _date;
    this.time = _time;
}

const tasks = [];

function getTaskUserInput() {
    const taskDescription = document.getElementById("description").value;
    const taskDate = document.getElementById("date").value;
    const taskTime = document.getElementById("time").value;


    const validatedDate = validateDate(taskDate);
    if (!validatedDate) return;

    const addedTask = new Task(taskDescription, validatedDate, taskTime);
    tasks.push(addedTask);
    console.log(addedTask);


    document.getElementById("description").value = "";
    document.getElementById("date").value = "";
    document.getElementById("time").value = "";

    drawTaskCards(tasks);
}


function validateDate(date) {
    if (!date) {
        console.log("Enter Date");
        return null;
    }

    const dateObject = new Date(date);
    if (isNaN(dateObject.getTime())) {
        console.log("Enter a correct date");
        return null;
    }

    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    if (dateObject < currentDate) {
        alert("Enter only future date");
        return null;
    }

    return date;
}

function drawTaskCards(arr) {
    const content = document.getElementById("content");
    if (!Array.isArray(arr)) return;

    content.innerHTML = '';

    for (let index = 0; index < arr.length; index++) {
        const currentAddedTask = arr[index];
        content.innerHTML += getCardTemplate(currentAddedTask, index);
    }
}
function getCardTemplate(currentTask, index) {
    const { description, dateToDo, time } = currentTask;

    return `
        <div class="row card col-4 mt-5 gap-2">
            <p><strong>Description:</strong> ${description}</p>
            <p><strong>Date:</strong> ${dateToDo}</p>
            <p><strong>Time:</strong> ${time}</p>
            <button class="btn btn-danger" onclick="deleteTask(${index})">Delete</button>
        </div>
    `;
}

function deleteTask(index) {
    tasks.splice(index, 1);
    drawTaskCards(tasks);
}