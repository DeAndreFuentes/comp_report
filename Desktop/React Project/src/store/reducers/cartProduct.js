const cartProductReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      var copy = [...state];

      var found = false;

      var id = action.payload.product.id;
      for (let i = 0; i < copy.length; i++) {
        if (state[i].product.id === id) {
          found = true;
          copy[i].quantity += action.payload.quantity;
          break;
        }
      }

      if (!found) {
        copy.push(action.payload);
      }

      return copy;

    case "REMOVE_PRODUCT":
      return state.filter((item) => item.product.id != action.payload);

    default:
      return state;
  }
};

export default cartProductReducer;
