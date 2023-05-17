export const initialState = {
  total: 0,
  products: [],
};

const shopReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      const existingProductIndex = state.products.findIndex(
        (product) => product.id === payload.product.id
      );
      if (existingProductIndex >= 0) {
        const updatedProducts = [...state.products];
        updatedProducts[existingProductIndex].qty += 1;
        return {
          ...state,
          products: updatedProducts,
        };
      } else {
        const newProduct = { ...payload.product, qty: 1 };
        return {
          ...state,
          products: [...state.products, newProduct],
        };
      }

    case "REMOVE_FROM_CART":
      console.log("REMOVE_FROM_CART", payload);
      const newProducts = state.products.map((product) => {
        if (product.id === payload.product.id && product.qty > 0) {
          return { ...product, qty: product.qty - 1 };
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

// const shopReducer = (state, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case "ADD_TO_CART":
//       console.log("ADD_TO_CART", payload);
//       return {
//         ...state,
//         products: payload.products,
//       };

//     case "REMOVE_FROM_CART":
//       console.log("REMOVE_FROM_CART", payload);
//       return {
//         ...state,
//         products: payload.products,
//       };

//     case "UPDATE_PRICE":
//       console.log("UPDATE_PRICE", payload);
//       return {
//         ...state,
//         products: payload.total,
//       };

//       default:
//           throw new Error(`No case type ${type} found in shopReducer.`);
//   }
// };

export default shopReducer;
