const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      let copy = [...state];
      copy.push(action.payload);
      return copy;

    default:
      return state;
  }
};

export default todoReducer;
