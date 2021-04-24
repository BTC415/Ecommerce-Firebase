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

export const handleAddToCart = (
  prevCartItems: ProductData[],
  nextCartItem: ProductData
) => {
  const cartItemExists = existingCartItem(prevCartItems, nextCartItem);
  //checking if item already exists
  if (cartItemExists) {
    return prevCartItems.map(cartItem =>
      cartItem.documentId === nextCartItem.documentId
        ? {
            ...nextCartItem,
            quantity: cartItem.quantity + 1,
          }
        : cartItem
    );
  }
  return [
    ...prevCartItems,
    {
      ...nextCartItem,
      quantity: 1,
    },
  ];
};

export const handleRemoveCartItem = (
  prevCartItems: ProductData[],
  documentId: string
) => {
  return prevCartItems.filter(cartItem => cartItem.documentId !== documentId);
};
