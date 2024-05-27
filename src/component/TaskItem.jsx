import { useTaskDispatch } from "../context/TaskProvider";
import { FaTrashAlt, FaEdit, FaCheck } from "react-icons/fa";

export default function TaskItem({ task, onEdit }) {
  const { id, title, subtitle } = task;
  const dispatch = useTaskDispatch();

  // handler for delete
  const handleDelete = () => {
    const isConfirm = confirm("Are you sure?");
    if (isConfirm) {
      dispatch({
        type: "remove_t",
        payload: id,
      });
    }
  };

  return (
    <div className="border  rounded-md p-4 mb-4 bg-slate-50 justify-between">
      <div className="flex justify-between items-center mb-2 w-[400] h[82px] ">
        <div>
          <h3 className="text-lg font-semibold text-[#9395D3]">{title}</h3>
          <h3 className="text-lg font-semibold text-black">{subtitle}</h3>
        </div>

        <div className="flex space-x-3">
          <button onClick={handleDelete} className="text-red-500">
            <FaTrashAlt />
          </button>
          <button onClick={() => onEdit(task)} className="text-blue-500">
            <FaEdit />
          </button>
          <button onClick={() => on()} className="text-blue-500">
            <FaCheck />
          </button>

          <button></button>
        </div>
      </div>
    </div>
  );
}
