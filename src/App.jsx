import TaskProvider from "./context/TaskProvider";
import TaskBox from "./pages/TaskBox";
function App() {
  return (
    <TaskProvider>
      <div className="flex flex-col justify-center items-center py-52 ">
        <TaskBox />
      </div>
    </TaskProvider>
  );
}

export default App;
