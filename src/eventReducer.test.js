import { eventReducer } from "./eventReducer";

describe("eventReducer", () => {
  it("should create event", () => {
    //Arrange
    const initialState = {
      events: [],
    };
    const action = {
      type: "CREATE_EVENT",
      payload: { event: { name: "ghazal" } },
    };
    //Act
    const updatedState = eventReducer(initialState, action);
    //Assert
    expect(updatedState).toEqual({
      events: [{ name: "ghazal" }],
    });
  });

  it("should cancel event", () => {
    //Arrange
    const initialState = {
      events: [{ name: "ghazal" }, { name: "rock" }],
    };
    const action = {
      type: "CANCEL_EVENT",
      payload: { event: { eventName: "ghazal" } },
    };
    //Act
    const updatedState = eventReducer(initialState, action);
    //Assert
    expect(updatedState).toEqual({
      events: [{ name: "rock" }],
    });
  });

//   it("should add attende", () => {
//     //Arrange
//     const initialState = {
//       events: [{ id: 1, name: "rock", attendee: 0 }],
//     };
//     const action = { type: "ADD_ATTENDEE", payload: { id: 1 } };
//     //Act
//     const updatedState = eventReducer(initialState, action);
//     //Assert
//     expect(updatedState).toEqual({
//       events: [{ id: 1, name: "rock", attendee: 1 }],
//     });
//   });

  it("should remove attendee", () => {
    //Arrange
    const initialState = {
      events: [
        { id: 1, name: "rock", attendee: 0 },
        { id: 2, name: "dance", attendee: 0 },
      ],
    };
    const action = { type: "REMOVE_ATTENDEE", payload: { id: 1 } };
    //Act
    const updatedState = eventReducer(initialState, action);
    //Assert
    expect(updatedState).toEqual({
      events: [{ id: 2, name: "dance", attendee: 0 }],
    });
  });
});
