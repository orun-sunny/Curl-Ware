import { useContext, useReducer } from "react";
import { defaultTask, taskReducer } from "../reducer/taskReducer";
import { TaskContext, TaskDisPatchContext } from "./index";
export const useTasksState = () => useContext(TaskContext);
export const useTaskDispatch = () => useContext(TaskDisPatchContext);
export default function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, defaultTask);
  return (
    <TaskDisPatchContext.Provider value={dispatch}>
      <TaskContext.Provider value={state}>{children}</TaskContext.Provider>
    </TaskDisPatchContext.Provider>
  );
}
