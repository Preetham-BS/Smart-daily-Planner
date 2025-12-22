function addTask() {
    const taskInput = document.getElementById("taskInput");
    const priority = document.getElementById("priority");

    if (!taskInput || !priority) return;

    // 🔥 CAST TO CORRECT TYPES
    const taskText = taskInput.value.trim();
    const priorityValue = priority.value;

    if (taskText === "") {
        S
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    if (priorityValue === "High") {
        document.getElementById("highList").appendChild(li);
    } else if (priorityValue === "Medium") {
        document.getElementById("mediumList").appendChild(li);
    } else {
        document.getElementById("lowList").appendChild(li);
    }

    taskInput.value = "";
}