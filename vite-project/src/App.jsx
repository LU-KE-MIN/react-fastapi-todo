import React, { useState, useEffect } from "react";
import { FaTrash, FaSun, FaMoon, FaEdit, FaCheck } from "react-icons/fa";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [theme, setTheme] = useState("light");

  // テーマ変更時、body クラスを更新
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask.trim(), done: false }]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const updated = [...tasks];
    updated.splice(index, 1);
    setTasks(updated);
    if (editIndex === index) {
      setEditIndex(null);
      setEditValue("");
    }
  };

  const handleToggleDone = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  const handleEditTask = (index) => {
    setEditIndex(index);
    setEditValue(tasks[index].text);
  };

  const handleSaveEdit = () => {
    if (editValue.trim()) {
      const updated = [...tasks];
      updated[editIndex].text = editValue.trim();
      setTasks(updated);
      setEditIndex(null);
      setEditValue("");
    }
  };

  const completedCount = tasks.filter((t) => t.done).length;
  const progress = tasks.length
    ? Math.round((completedCount / tasks.length) * 100)
    : 0;

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={`app ${theme}`}>
      <div className="container">
        <h1>タスクリスト</h1>
        <div className="input-group">
          <input
            type="text"
            placeholder="新しいタスクを入力"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
          />
          <button onClick={handleAddTask}>追加</button>
        </div>

        <div className="progress">
          完了率：{progress}%
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="task-list">
          {tasks.map((task, index) => (
            <div className="task-item" key={index}>
              <div className="task-left">
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => handleToggleDone(index)}
                />
                {editIndex === index ? (
                  <input
                    className="task-edit-input"
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSaveEdit()}
                    autoFocus
                  />
                ) : (
                  <span
                    className={`task-title ${task.done ? "done" : ""}`}
                    onDoubleClick={() => handleEditTask(index)}
                  >
                    {task.text}
                  </span>
                )}
              </div>

              <div className="task-actions">
                {editIndex === index ? (
                  <button onClick={handleSaveEdit} title="保存">
                    <FaCheck />
                  </button>
                ) : (
                  <button onClick={() => handleEditTask(index)} title="編集">
                    <FaEdit />
                  </button>
                )}
                <button onClick={() => handleDeleteTask(index)} title="削除">
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </button>
    </div>
  );
}

export default App;
