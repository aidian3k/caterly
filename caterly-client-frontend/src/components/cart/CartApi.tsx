export type CartItem = {
  id: number;
  name: string;
  quantity: number;
  price: number;
};

/**Zwraca tablice z zawartością koszyka.*/
export const getCart = (): CartItem[] => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
};

/**Nadpisuje koszyk nową zawartością.*/
export const saveCart = (cart: CartItem[]): void => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

/**Dodaje element do koszyka.
 *
 * Przykład (dodaje do koszyka 1 pizzę o id=2):
 *      `addItemToCart({
 *          id: 2,
 *          name: "Pizza",
 *          quantity: 1,
 *          price: 40,
 *      });`
 */
export const addItemToCart = (item: CartItem): void => {
  const cart = getCart();
  const existingItemIndex = cart.findIndex(
    (cartItem) => cartItem.id === item.id,
  );
  if (existingItemIndex !== -1) {
    cart[existingItemIndex].quantity += item.quantity;
  } else {
    cart.push(item);
  }
  saveCart(cart);
};

/**Usuwa element z koszyka.
 *
 * Przykład 1 (usuwa wszystkie przedmioty o id=2):
 *      `removeItemFromCart(2);`
 *
 * Przykład 2 (usuwa 5 sztuk przedmiotu o id=2):
 *      `removeItemFromCart(2, 5);`
 */
export const removeItemFromCart = (id: number, quantity?: number): void => {
  const cart = getCart();
  const modifiedCart = cart
    .map((item) => {
      if (item.id === id) {
        item.quantity = quantity === undefined ? 0 : item.quantity - quantity;
      }
      return item;
    })
    .filter((item) => item.quantity > 0);
  saveCart(modifiedCart);
};
