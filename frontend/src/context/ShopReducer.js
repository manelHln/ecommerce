export const initialState = {
  products: [],
};

const shopReducer = (state, action) => {
  const { type, payload } = action; // payload.product actually refers to the product Id and not the product itself
  console.log(payload);
  switch (type) {
    case "ADD_TO_CART":
      return { payload };

    case "REMOVE_FROM_CART":
      console.log("REMOVE_FROM_CART", payload);
      const newProducts = state.products.map((product) => {
        if (product === payload.product) {
          return { ...product };
        } else {
          return product;
        }
      });
      return {
        ...state,
        products: newProducts,
      };

    case "UPDATE_PRICE":
      console.log("UPDATE_PRICE", payload);
      return {
        ...state,
        total: payload.total,
      };

    case "DELETE_FROM_CART":
      console.log("DELETE_FROM_CART", payload);
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== payload.product.id
        ),
      };

    default:
      throw new Error(`No case type ${type} found in shopReducer.`);
  }
};

export default shopReducer;
