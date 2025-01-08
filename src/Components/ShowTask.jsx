import React from 'react';

const ShowTask = ({tasklist, setTasklist, task, setTask}) => {
const handleEdit = (id) => {
  const selectedTask = tasklist.find(task => task.id === id);
  setTask(selectedTask);
}
const handleDelete = (id) => {
  const updatedTasklIST = tasklist.filter(task => task.id !== id)
  setTasklist(updatedTasklIST);
}
  return (
    <section className="bg-purple-300 flex items-center justify-center p-4">
      <div className="bg-teal-200 w-full max-w-md rounded-lg shadow-lg">
        <div className="flex items-center justify-between p-4">
          <h2 className="text-lg font-bold">Todo</h2>
          <span className="text-gray-700 text-sm">Count: {tasklist.length}</span>
          <button onClick={() => setTasklist([])} className="bg-blue-500 text-white font-bold px-4 py-2 rounded-xl">
            Clear
          </button>
        </div>
        <ul className="bg-white p-4 shadow rounded-lg">

            {tasklist.map((task) => (
                <li key={task.id} className="flex justify-between p-2 border-b">
                <span>{task.name}</span>
                <span>{task.time}</span>
                    <div className="flex justify-end space-x-2">
                    <button onClick={() => handleEdit(task.id)} className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors duration-200">
                      Edit
                    </button>
                    <button onClick={() => handleDelete(task.id)} className="px-3 py-1 text-sm bg-red-100 hover:bg-red-200 text-red-600 rounded-md transition-colors duration-200">
                      Delete
                    </button>
                  </div>
                </li>
            ))}
            
              
        </ul>
        
      </div>
      
    </section>
  );
};

export default ShowTask;
