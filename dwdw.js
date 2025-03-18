
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
    if (taskDescription.length < 5) {
        return console.log("must be more then 5")
    }
    if (!taskTime) return;
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
      <div class="w-80 h-80 bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between relative group">
        <button type="button" onclick="deleteTask(${index})"
          class="absolute top-2 right-2 text-red-500 hidden group-hover:block transition-colors duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
  
        <div class="mb-4 flex-grow">
          <h2 class="text-lg font-semibold mb-2">Task To Do</h2>
          <div class="max-h-20 overflow-y-auto">
            <p class="text-sm text-gray-600">${description}</p>
          </div>
        </div>
  
        <div class="text-left text-xs text-gray-500">
          <p>Date: ${dateToDo}</p>
          <p>Time: ${time}</p>
        </div>
      </div>
    `;
}



function deleteTask(index) {
    tasks.splice(index, 1);
    drawTaskCards(tasks);
}