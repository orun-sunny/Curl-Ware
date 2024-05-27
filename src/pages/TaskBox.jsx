import { useState } from "react";
import AddAndEditTaskModal from "../component/AddTaskModal";
import Footer from "../component/Footer";

import TaskHeader from "../component/TaskHeader";
import TaskItem from "../component/TaskItem";
import TaskLayout from "../component/TaskLayout";
import TaskLists from "../component/TaskLists";

import { useTaskDispatch, useTasksState } from "../context/TaskProvider";
import { FaPlus } from "react-icons/fa";

export default function TaskBox() {
  // const [searchText, setSearchText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editTask, setEditTask] = useState(null);
  const dispatch = useTaskDispatch();
  const state = useTasksState();
  // handler all here
  const handleRemoveAllTask = () => {
    const isConfirm = confirm("are you sure delete all task?");
    if (isConfirm) {
      dispatch({
        type: "remove_all_t",
      });
    }
  };
  const handleEdit = (task) => {
    setIsEdit(true);
    setShowModal(true);
    setEditTask(task);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    setEditTask(null);
    isEdit(false);
  };
  const handleAddTask = () => {
    setShowModal(true);
    setIsEdit(false);
    setEditTask(null);
  };

  return (
    <>
      <TaskLayout>
        {/* Task Header */}
        <TaskHeader>
          {showModal && (
            <AddAndEditTaskModal
              isEdit={isEdit}
              editTask={editTask}
              onClose={handleCloseModal}
            />
          )}
        </TaskHeader>
        {/* TaskLists */}
        <div className="bg-[#D6D7EF]">
          {" "}
          <TaskLists totalTask={state.tasks.length}>
            {state.tasks.map((task) => (
              <TaskItem key={task.id} task={task} onEdit={handleEdit} />
            ))}
          </TaskLists>
        </div>
        <div className="flex justify-end  bg-[#D6D7EF] py-8 px-2">
          <button
            className="rounded-full bg-[#9395D3] p-6 text-white"
            onClick={handleAddTask}
          >
            <FaPlus size={20} />
          </button>
        </div>
        <Footer />
      </TaskLayout>
    </>
  );
}
