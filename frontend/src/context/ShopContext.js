import { createContext, useReducer, useContext, useEffect } from "react";
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

  const updatePrice = (products) => {
    let total = 0;
    products.forEach((product) => (total += product.price));

    dispatch({
      type: "UPDATE_PRICE",
      payload: {
        total,
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

  // Update total price when products change
  useEffect(() => {
    updatePrice(state.products);
  }, [state.products]);

  const value = {
    total: state.total,
    products: state.products,
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
