//importing types
import { ProductData } from '../interfaces';
//helpers
export const existingCartItem = (
  prevCartItems: ProductData[],
  nextCartItem: ProductData
) => {
  return prevCartItems.find(
    cartItem => cartItem.documentId === nextCartItem.documentId
  );
};

export const handleAddCartItem = (
  prevCartItems: ProductData[],
  cartItemToAdd: ProductData
) => {
  const cartItemExists = existingCartItem(prevCartItems, cartItemToAdd);
  //checking if item already exists
  if (cartItemExists) {
    return prevCartItems.map(cartItem =>
      cartItem.documentId === cartItemToAdd.documentId
        ? {
            ...cartItemToAdd,
            quantity: cartItem.quantity + 1,
          }
        : cartItem
    );
  }
  return [
    ...prevCartItems,
    {
      ...cartItemToAdd,
      quantity: 1,
    },
  ];
};

export const handleRemoveCartItem = (
  prevCartItems: ProductData[],
  documentId: string
) => {
  //removing cart item
  return prevCartItems.filter(cartItem => cartItem.documentId !== documentId);
};

export const handleReduceCartItem = (
  prevCartItems: ProductData[],
  cartItemToReduce: ProductData
) => {
  //removing cart item when qty is 1
  if (cartItemToReduce?.quantity === 1) {
    return prevCartItems.filter(
      cartItem => cartItem.documentId !== cartItemToReduce.documentId
    );
  }
  //reducing logic
  return prevCartItems.map(cartItem =>
    cartItem.documentId === cartItemToReduce?.documentId
      ? {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        }
      : cartItem
  );
};
