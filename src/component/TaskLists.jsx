export default function TaskLists({ totalTask, children }) {
  return (
    <div className="overflow-x-auto p-4">
      {totalTask === 0 ? (
        <p className="text-center text-red-400 text-2xl">Task List is empty!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4">
          {children}
        </div>
      )}
    </div>
  );
}
