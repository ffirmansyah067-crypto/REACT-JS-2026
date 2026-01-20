export const initialCartState = { items: [] };

export function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return { items: [...state.items, action.payload] };
    case "REMOVE_ITEM":
      return { items: state.items.filter((item) => item.id !== action.payload.id) };
    case "CLEAR_CART":
      return { items: [] };
    default:
      return state;
  }
}
