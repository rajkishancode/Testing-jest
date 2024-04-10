import { bookshelfReducer } from "./bookshelfReducer";

describe("bookshelfReducer", () => {
  it("should add book", () => {
    //Arrange
    const initialState = {
      books: [],
      categories: [],
    };

    const action = {
      type: "ADD_BOOK",
      payload: {
        id: 1,
        title: "two states",
        author: "chetan bhagat",
        category: null,
      },
    };

    //Act
    const updatedState = bookshelfReducer(initialState, action);

    //Assert

    expect(updatedState).toEqual({
      books: [
        {
          id: 1,
          title: "two states",
          author: "chetan bhagat",
          category: null,
        },
      ],
      categories: [],
    });
  });

  it("should add category", () => {
    //Arrange
    const initialState = {
      books: [
        {
          id: 1,
          title: "two states",
          author: "chetan bhagat",
          category: null,
        },
      ],
      categories: [],
    };

    const action = {
      type: "ADD_CATEGORY",
      payload: {
        id: 1,
        name: "fiction",
      },
    };

    //Act
    const updatedState = bookshelfReducer(initialState, action);
    //Assert

    expect(updatedState).toEqual({
      books: [
        {
          id: 1,
          title: "two states",
          author: "chetan bhagat",
          category: null,
        },
      ],
      categories: [
        {
          id: 1,
          name: "fiction",
        },
      ],
    });
  });

  it("should assign category", () => {
    //Arrange
    const initialState = {
      books: [
        {
          id: 1,
          title: "two states",
          author: "chetan bhagat",
          category: null,
        },
      ],
      categories: [
        {
          id: 1212,
          name: "fiction",
        },
      ],
    };
    const action = {
      type: "ASSIGN_CATEGORY",
      payload: { categoryId: 1212, bookId: 1 },
    };

    //Act
    const updatedState = bookshelfReducer(initialState, action);

    //Assert
    expect(updatedState).toEqual({
      books: [
        {
          id: 1,
          title: "two states",
          author: "chetan bhagat",
          category: 1212,
        },
      ],
      categories: [
        {
          id: 1212,
          name: "fiction",
        },
      ],
    });
  });
});
