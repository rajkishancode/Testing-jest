import { postReducer } from "./socialmediaReducer";

describe("postReducer", () => {



  it("should create post", () => {
    //Arrange
    const initialState = {
      posts: [],
    };

    const action = {
      type: "CREATE_POST",
      payload: { id: 1, author: "charles", content: "hello" },
    };

    //Act

    const updatedState = postReducer(initialState, action);
    //Assert

    expect(updatedState).toEqual({
      posts: [{ id: 1, author: "charles", content: "hello", likes: 0 }],
    });
  });




//   it("should edit post", () => {
//     //Arrange
//     const initialState = {
//       posts: [{ id: 1, author: "charles", content: "hello", likes: 0 }],
//     };

//     const action = {
//       type: "EDIT_POST",
//       payload: { id: 1, newContent: "Nice weather" },
//     };

//     //Act
//     const updatedState = postReducer(initialState, action);
//     //Assert

//     expect(updatedState).toEqual({
//       posts: [
//         { id: 1, author: "charles-babbage", content: "Nice weather", likes: 0 },
//       ],
//     });
//   });




  it("should delete post", () => {
    //Arrange
    const initialState = {
      posts: [
        { id: 1, author: "charles-babbage", content: "hello", likes: 0 },
        { id: 2, author: "alex", content: "feeling amazing", likes: 0 },
      ],
    };

    const action = {
      type: "DELETE_POST",
      payload: {
        id: 2,
      },
    };
    //Act
    const updatedState = postReducer(initialState, action);

    //Assert
    expect(updatedState).toEqual({
      posts: [{ id: 1, author: "charles-babbage", content: "hello", likes: 0 }],
    });
  });




  it("should like post", () => {
    //Arrange
    const initialState = {
      posts: [{ id: 1, author: "charles-babbage", content: "hello", likes: 0 }],
    };
    const action = {
      type: "LIKE_POST",
      payload:{id:1}
    };
    //Act

    const updatedState = postReducer(initialState,action);
    //Assert

    expect(updatedState).toEqual({
      posts: [{ id: 1, author: "charles-babbage", content: "hello", likes: 1 }],
    });
  });



});
