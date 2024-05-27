export const defaultTask = {
  tasks: [
    {
      id: crypto.randomUUID(),
      title: "Integration API",
      subtitle:
        "i want.",

    },
    {
      id: crypto.randomUUID(),
      title: "Learn React",
      subtitle:
        "i want.",

    },
    {
      id: crypto.randomUUID(),
      title: "Learn React with orun",
      subtitle:
        "I want to",


    }
  ]
};

export const taskReducer = (state, action) => {
  switch (action.type) {
    case "add_task": {
      return { tasks: [...state.tasks, action.payload] };
    }
    case "edit_task": {
      return {
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return action.payload;
          }
          return task;
        }),
      };
    }
    case 'search_task': {
      return {
        tasks: state.tasks.filter(task => task.title.includes(action.payload))
      }
    }
    case "favorite_t": {
      return {
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload) {
            return { ...task, isFavorite: !task.isFavorite };
          }
          return task;
        }),
      };
    }
    case "remove_all_t": {
      return {
        tasks: [],
      };
    }
    case "remove_t": {
      return {
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    }


    default: {
      return state;
    }
  }
};
