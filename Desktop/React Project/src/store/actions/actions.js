export const increaseCounter = () => {
  return {
    type: "INCREASE_COUNTER",
  };
};

export const decreaseCounter = () => {
  return {
    type: "DECREASE_COUNTER",
  };
};

export const addProductToCart = (productInfo) => {
  return {
    type: "ADD_PRODUCT",
    payload: productInfo,
  };
};

export const removeProductFromCart = (productId) => {
  return {
    type: "REMOVE_PRODUCT",
    payload: productId,
  };
};

export const addTodo = (todo) => {
  return {
    type: "ADD_TODO",
    payload: todo,
  };
};
