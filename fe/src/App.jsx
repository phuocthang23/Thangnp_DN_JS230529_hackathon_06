import { RiStickyNoteFill } from "react-icons/ri";
import { BsFillTrashFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [message, setMessage] = useState([]);
  const [newTaskName, setNewTaskName] = useState("");
  const [render, setRender] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/task").then((response) => {
      setMessage(response.data);
    });
  }, [render]);
  console.log(message);

  const handleInputChange = (event) => {
    setNewTaskName(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (newTaskName.trim()) {
      try {
        const response = await axios.post("http://localhost:3000/api/v1/task", {
          name: newTaskName,
        });
        setMessage([...message, response.data]);
        setNewTaskName("");
        setRender(!render);
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("Please enter a task");
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await axios.delete(`http://localhost:3000/api/v1/task/${taskId}`);
      setRender(!render);
    } catch (error) {
      console.error(error);
    }
  };

  const completeTask = async (taskId) => {
    try {
      const taskToUpdate = message.find((task) => task.id === taskId);
      const updatedStatus = taskToUpdate.status === 1 ? 0 : 1;

      await axios.put(`http://localhost:3000/api/v1/task/${taskId}`, {
        status: updatedStatus, // Đánh dấu nhiệm vụ là đã hoàn thành
      });
      setRender(!render);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="bg-slate-200 h-full w-full">
      <h1 className="h-full bg-yellow-400 px-4 font-bold text-white py-6 text-3xl">
        Note List
      </h1>
      <form
        className=" my-9 border-2 border-slate-400  w-2/6 mx-auto py-4 bg-white rounded-[5px] relative"
        onSubmit={handleSubmit}
      >
        <p className="mb-2 ml-2 text-gray-400 font-bold">Title</p>
        <input
          type="text"
          placeholder="Take a note ..."
          className="h-8 w-5/6 ml-2 "
          value={newTaskName}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="px-3 py-1 bg-yellow-400 absolute bottom-[-10px] rounded-full"
        >
          +
        </button>
      </form>
      <div className="mx-[80px] grid grid-cols-2 bg-slate-200 gap-4">
        <div className="text-center my-3 ">
          <h1 className="font-bold text-3xl py-7">Uncompleted Tasks</h1>
          {message.map((task) => {
            if (task.status === 0) {
              return (
                <div
                  key={task.id}
                  className="w-1/2 mx-auto bg-white h-[50px] flex items-center justify-between py-4 my-4"
                >
                  <p className="mx-2">{task.name}</p>
                  <div className="flex gap-4 mx-2">
                    <button
                      onClick={() => completeTask(task.id)} // Gọi completeTask khi người dùng nhấp vào nút complete
                      className="bg-green-400 p-1 rounded-full"
                    >
                      <RiStickyNoteFill />
                    </button>
                    <button
                      onClick={() => handleDeleteTask(task.id)}
                      className="bg-red-400 p-1 rounded-full"
                    >
                      <BsFillTrashFill />
                    </button>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className="text-center my-3">
          <h1 className="font-bold text-3xl py-7">Completed Tasks</h1>
          {message.map((task) => {
            if (task.status === 1) {
              return (
                <div
                  key={task.id}
                  className="w-1/2 mx-auto bg-white h-[50px] flex items-center justify-between py-4 my-4"
                >
                  <p className="mx-2 line-through">{task.name}</p>
                  <div className="flex gap-4 mx-2">
                    <button
                      onClick={() => completeTask(task.id)} // Gọi completeTask khi người dùng nhấp vào nút complete
                      className="bg-green-400 p-1 rounded-full"
                    >
                      <RiStickyNoteFill />
                    </button>
                    <BsFillTrashFill />
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
