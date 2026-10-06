"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export interface CartItem {
  id: number;
  name: string;
  price: string;
  oldPrice: string;
  discount: string;
  image: string;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (
    item: Omit<CartItem, "quantity">,
    quantity?: number,
  ) => void;
  removeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<
  CartContextType | undefined
>(undefined);

export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartItems, setCartItems] = useState<CartItem[]>(
    () => {
      if (typeof window === "undefined") {
        return [];
      }

      const savedCart =
        localStorage.getItem("toy-store-cart");

      if (!savedCart) {
        return [];
      }

      try {
        return JSON.parse(savedCart) as CartItem[];
      } catch {
        localStorage.removeItem("toy-store-cart");
        return [];
      }
    },
  );

  // Lưu giỏ hàng vào localStorage
  useEffect(() => {
    localStorage.setItem(
      "toy-store-cart",
      JSON.stringify(cartItems),
    );
  }, [cartItems]);

  // Thêm sản phẩm vào giỏ
  const addToCart = (
    item: Omit<CartItem, "quantity">,
    quantity = 1,
  ) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (cartItem) => cartItem.id === item.id,
      );

      if (existingItem) {
        return currentItems.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity:
                  cartItem.quantity + quantity,
              }
            : cartItem,
        );
      }

      return [
        ...currentItems,
        {
          ...item,
          quantity,
        },
      ];
    });
  };

  // Xóa sản phẩm
  const removeFromCart = (id: number) => {
    setCartItems((currentItems) =>
      currentItems.filter(
        (item) => item.id !== id,
      ),
    );
  };

  // Tăng số lượng
  const increaseQuantity = (id: number) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  };

  // Giảm số lượng
  const decreaseQuantity = (id: number) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(
                1,
                item.quantity - 1,
              ),
            }
          : item,
      ),
    );
  };

  // Xóa toàn bộ giỏ hàng
  const clearCart = () => {
    setCartItems([]);
  };

  // Tổng số lượng sản phẩm
  const totalItems = cartItems.reduce(
    (total, item) =>
      total + item.quantity,
    0,
  );

  // Tổng tiền
  const totalPrice = cartItems.reduce(
    (total, item) => {
      const price = Number(
        item.price
          .replace(/\./g, "")
          .replace("đ", ""),
      );

      return (
        total + price * item.quantity
      );
    },
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider",
    );
  }

  return context;
}