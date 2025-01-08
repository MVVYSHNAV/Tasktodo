import React from "react";

const AddTask = ({ tasklist, setTasklist, task, setTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();

    if (task.id) {
      // Update an existing task
      const updateTask = tasklist.map((t) =>
        t.id === task.id
          ? {
              id: task.id,
              name: task.name,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
          : t
      );
      setTasklist(updateTask);
    } else {
      // Add a new task
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };
      setTasklist([...tasklist, newTask]);
    }

    // Reset task state
    setTask({ id: "", name: "" });
    e.target.task.value = "";
  };

  return (
    <section className="p-5 flex justify-center items-center">
      <form className="space-x-4" onSubmit={handleSubmit}>
        <input
          placeholder="Add task"
          type="text"
          name="task"
          value={task.name || ""}
          maxLength="25"
          className="border p-2 rounded-xl"
          autoComplete="off"
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
        <button
          className="bg-green-400 w-28 rounded-2xl py-2 text-white font-bold"
          type="submit"
        >
          {task.id ? "Update" : "Add"}
        </button>
      </form>
    </section>
  );
};

export default AddTask;
