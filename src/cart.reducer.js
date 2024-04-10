// export const initialState = {
//   items: [],
//   totalPrice: 0,
//   totalQuantity: 0,
// };

// function cartReducer(state, action) {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       return {
//         ...state,
//         items: [...state.items, action.payload.item],
//         totalQuantity: state.totalQuantity + 1,
//         totalPrice: state.totalPrice + action.payload.item.price,
//       };

//     case "REMOVE_ITEM_FROM_CART":
//       return {
//         ...state,
//         items: [
//           ...state.items.filter((item) => item.id !== action.payload.item.id),
//         ],
//         totalQuantity: state.totalQuantity - 1,
//         totalPrice: state.totalPrice - action.payload.item.price,
//       };

//     case "INCREMENT_ITEM_QUANTITY":
//       const itemToIncrement = state.items.find(
//         (item) => item.id === action.payload.item.id
//       );
//       if (itemToIncrement) {
//         return {
//           ...state,
//           items: [
//             ...state.items,
//             { ...itemToIncrement, quantity: itemToIncrement.quantity + 1,price:itemToIncrement.price + action.payload.item.price },
//           ],
//         };
//       }

//     default:
//       return state;
//   }
// }

// export default cartReducer;
