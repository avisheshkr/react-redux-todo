export const addTodo = (data) => {
  return {
    type: "addTodo",
    payload: {
      id: new Date().getTime(),
      data: data,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: "deleteTodo",
    payload: id,
  };
};

export const clearTodo = () => {
  return { type: "clearTodo" };
};
