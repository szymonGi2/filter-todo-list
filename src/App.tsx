import { useState } from "react";
import "./App.css";
import { GiCancel } from "react-icons/gi";
import {CiCircleCheck, CiCirclePlus} from "react-icons/ci";

type TaskType = "work" | "personal";
type TaskCategory = "all" | "completed" | "progress";

interface Task {
  task: string;
  type: TaskType;
  taskCompleted: boolean;
}

const App = () => {
  const [taskInput, setTaskInput] = useState("");
  const [taskType, setTaskType] = useState<TaskType>("work");
  const [taskCategory, setTaskCategory] = useState<TaskCategory>("all");

  const [taskList, setTaskList] = useState<Task[]>([
    { task: "Do groceries", type: "personal", taskCompleted: false },
    { task: "Finish project", type: "work", taskCompleted: true },
  ]);

  const handleAdd = () => {
    if (taskInput.trim() !== "") {
      setTaskList([
        ...taskList,
        { task: taskInput, type: taskType, taskCompleted: false },
      ]);
      setTaskInput("");
    }
  };

  const handleComplete = (taskText: string) => {
    setTaskList((prevState) =>
      prevState.map((item) =>
        item.task === taskText
          ? { ...item, taskCompleted: !item.taskCompleted }
          : item,
      ),
    );
  };

  const handleDelete = (taskText: string) => {
    setTaskList((prevState) =>
      prevState.filter((item) => item.task !== taskText),
    );
  };

  const filteredTasks = taskList.filter((task) => {
    if (taskCategory === "completed") return task.taskCompleted;
    if (taskCategory === "progress") return !task.taskCompleted;
    return true;
  });

  return (
    <div className="app-container">
      <h1>To Do List</h1>
      <div id="input-area">
        {/*value={taskInput} aby kontrolować reset pola */}
        <input
          id="taskInput"
          type="text"
          placeholder="Enter a task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <select onChange={(e) => setTaskType(e.target.value as TaskType)}>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
        </select>
        <button id="searchBtn" onClick={() => handleAdd()}>
          <CiCirclePlus />
        </button>
      </div>

      <div id="filterBox">
        <h2>Filter by:</h2>
        <select
          onChange={(e) => setTaskCategory(e.target.value as TaskCategory)}
        >
          <option value="all">All</option>
          <option value="progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      {filteredTasks.length <= 0 ? (
        <h2 className="empty-message">No tasks found in this category</h2>
      ) : (
        <div>
          <ul>
            {filteredTasks.map((task, index) => (
              /* Dynamiczne przypisywanie klas CSS dla tła i obramowania */
              <li
                key={index}
                className={`type-${task.type} ${task.taskCompleted ? "completed" : ""}`}
              >
                <div className="task-info">
                  <span className="task-text">{task.task}</span>
                  <span className="task-badge">{task.type}</span>
                </div>
                <div className="actions">
                  <button
                    className="complete-btn"
                    onClick={() => handleComplete(task.task)}
                  >
                    <CiCircleCheck />
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(task.task)}
                  >
                    <GiCancel />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
