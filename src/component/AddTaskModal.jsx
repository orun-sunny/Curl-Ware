import { useState } from "react";
import { Zoom, toast } from "react-toastify";
import { useTaskDispatch } from "../context/TaskProvider";
import { FaArrowLeft } from "react-icons/fa"; // Import FaArrowLeft icon

export default function AddTaskModal({ onClose, isEdit, editTask }) {
  const dispatch = useTaskDispatch();
  const [task, setTask] = useState(
    editTask || {
      title: "",
      subtitle: "",
    }
  );

  // change handle
  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === "tags") {
      value = value.split(",");
    }
    setTask((prevTask) => {
      return {
        ...prevTask,
        [name]: value,
      };
    });
  };

  const handleSubmitTask = (e) => {
    e.preventDefault();
    if (Object.values(task).some((val) => val === "")) {
      toast.error("Form Submission Failed! Fill up forms every step", {
        autoClose: 1500,
        position: "bottom-right",
        closeOnClick: true,
        transition: Zoom,
        pauseOnHover: true,
      });
    } else {
      if (isEdit) {
        dispatch({
          type: "edit_task",
          payload: task,
        });
      } else {
        dispatch({
          type: "add_task",
          payload: { id: crypto.randomUUID(), ...task },
        });
      }
      onClose();
    }
  };

  return (
    <>
      <div
        onClick={onClose}
        className="w-full h-full bg-black/30 fixed top-72 left-0 z-10"
      ></div>
      <form
        onSubmit={handleSubmitTask}
        className="mx-auto my-30 w-full max-w-[440px] rounded-md border border-[#FEFBFB]/[36%] bg-white  lg:px-0 absolute z-20 left-1/2 -translate-x-1/2"
      >
        <div className="relative">
          <FaArrowLeft
            className="absolute w-[52px] top-12 left-6 text-white cursor-pointer"
            onClick={onClose}
          />
          <h2 className="max-w-[440px] h-[118px] items-center justify-center sm:flex bg-[#9395D3] text-center text-2xl font-bold lg:text-[28px] pl-10">
            {isEdit ? "Edit Task" : "Add New Task"}
          </h2>
        </div>
        <div className="space-y-8 text-black lg:space-y-10">
          <div className="space-y-2 lg:space-y-2 px-8">
            <label htmlFor="title">Title</label>
            <input
              value={task.title}
              onChange={handleChange}
              className="block w-full border-b-2  bg-transparent px-2 focus:border-bg-white focus:outline-none"
              type="text"
              name="title"
              id="title"
            />
          </div>
          <div className="space-y-2 lg:space-y-2 px-8">
            <label htmlFor="subtitle">subtitle</label>
            <input
              value={task.subtitle}
              onChange={handleChange}
              className="block w-full border-b-2  bg-transparent px-2 focus:border-bg-white focus:outline-none"
              type="text"
              name="subtitle"
              id="subtitle"
            />
          </div>
        </div>
        <div className="flex justify-around lg:mt-20 pb-8">
          {isEdit && (
            <button
              type="button"
              className="rounded bg-[#9395D3] px-4 w-[170px] h-[65px] text-white transition-all hover:opacity-80"
              onClick={onClose}
            >
              Cancel
            </button>
          )}
          <button
            type="submit"
            className="rounded bg-[#9395D3] w-[170px] h-[65px] text-white transition-all hover:opacity-80"
          >
            {isEdit ? "Update" : "Add"}
          </button>
        </div>
      </form>
    </>
  );
}
