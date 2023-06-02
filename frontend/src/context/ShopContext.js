import { createContext, useReducer, useContext } from "react";
import shopReducer, { initialState } from "./ShopReducer";

const ShopContext = createContext(initialState);

const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const addToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        product,
      },
    });
  };

  const removeFromCart = (product) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        product,
      },
    });
  };

  const deleteProduct = (product) => {
    dispatch({
      type: "DELETE_FROM_CART",
      payload: {
        product,
      },
    });
  }


  const value = {
    products: state,
    addToCart,
    removeFromCart,
    deleteProduct
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

const useShop = () => {
  const context = useContext(ShopContext);

  if (context === undefined) {
    throw new Error("useShop must be within ShopContext");
  }

  return context;
};

export { ShopProvider, useShop };
