const initialState = [];

const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case "addTodo": {
      if (action.payload.data) {
        const { id, data } = action.payload;
        return [...state, { id, data }];
      } else {
        return [...state];
      }
    }

    case "deleteTodo": {
      return [...state.filter((item) => item.id !== action.payload)];
    }

    case "clearTodo": {
      return [];
    }

    default:
      return state;
  }
};

export default todoReducers;
