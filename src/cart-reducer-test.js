// import cartReducer from "./cart.reducer";

// describe("testing cart", () => {
//   it("should add item to cart", () => {
//     //Arrange
//     const initialState = {
//       items: [{ id: 1, product: "book", price: 500, quantity: 1 }],
//       totalPrice: 500,
//       totalQuantity: 1,
//     };

//     const action = {
//       type: "ADD_TO_CART",
//       payload: {
//         item: {
//           id: 2,
//           product: "shades",
//           price: 399,
//           quantity: 1,
//         },
//       },
//     };
//     //Act
//     const updatedState = cartReducer(initialState, action);

//     //Assert

//     expect(updatedState).toEqual({
//       items: [
//         { id: 1, product: "book", price: 500, quantity: 1 },
//         { id: 2, product: "shades", price: 399, quantity: 1 },
//       ],
//       totalPrice: 899,
//       totalQuantity: 2,
//     });
//   });

//   it("should remove item from the cart", () => {
//     //Arrange
//     const initialState = {
//       items: [
//         { id: 1, product: "book", price: 500, quantity: 1 },
//         { id: 2, product: "shades", price: 399, quantity: 1 },
//       ],
//       totalPrice: 899,
//       totalQuantity: 2,
//     };

//     const action = {
//       type: "REMOVE_ITEM_FROM_CART",
//       payload: {
//         item: {
//           id: 1,
//           price: 500,
//         },
//       },
//     };

//     //Act
//     const updatedState = cartReducer(initialState, action);

//     //Assert

//     expect(updatedState).toEqual({
//       items: [{ id: 2, product: "shades", price: 399, quantity: 1 }],
//       totalPrice: 399,
//       totalQuantity: 1,
//     });
//   });

//   it("should add item to quantity when incremented", () => {
//     //Arrange
//     const initialState = {
//       items: [
//         {
//           id: 2,
//           product: "shades",
//           price: 399,
//           quantity: 1,
//         },
//         {
//           id: 3,
//           product: "gloves",
//           price: 500,
//           quantity: 1,
//         },
//       ],
//       totalPrice: 899,
//       totalQuantity: 1,
//     };

//     const action = {
//       type: "INCREMENT_ITEM_QUANTITY",
//       payload: {
//         item: {
//           id: 3,
//           price:500
//         },
//       },
//     };

//     //Act
//     const updatedState = cartReducer(initialState, action);

//     //Assert

//     expect(updatedState).toEqual({
//       items: [
//         {
//           id: 2,
//           product: "shades",
//           price: 399,
//           quantity: 1,
//         },
//         {
//           id: 3,
//           product: "gloves",
//           price: 500,
//           quantity: 2,
//         },
//       ],
//       totalPrice: 1399,
//       totalQuantity: 1,a
//     });
//   });
// });
