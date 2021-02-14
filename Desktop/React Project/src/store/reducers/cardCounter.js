const cartCounterReducer = (state = 0, action) => {
  if (action.type === "INCREASE_COUNTER") {
    return state + 1;
  } else if (action.type === "DECREASE_COUNTER") {
    return state - 1;
  }
  return state;
};

export default cartCounterReducer;
