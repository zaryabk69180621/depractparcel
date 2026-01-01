// Select elements
const input = document.getElementById('taskInput');
const button = document.getElementById('addBtn');
const list = document.getElementById('taskList');

// Function to add a task
function addTask() {
    const taskText = input.value;

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Add click event to remove task when finished
    li.onclick = function() {
        this.remove();
    };

    // Append to the list
    list.appendChild(li);

    // Clear input
    input.value = "";
}

// Event listener for click
button.addEventListener('click', addTask);

// Allow "Enter" key to add task too
input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
