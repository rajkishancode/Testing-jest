import { employeeReducer } from "./employeeReducer";

describe("employeeReducer", () => {
  it("should add employee", () => {
    //Arrange
    const initialState = {
      employees: [],
    };

    const action = {
      type: "ADD_EMPLOYEE",
      payload: { name: "rahul", role: "accountant", salaries: 50000 },
    };
    //Act

    const updatedState = employeeReducer(initialState, action);

    //Assert
    expect(updatedState).toEqual({
      employees: [{ name: "rahul", role: "accountant", salaries: 50000 }],
    });
  });

//   it("should update employee", () => {
//     //Arrange
//     const initialState = {
//       employees: [{ name: "rahul", role: "accountant", salaries: 50000 }],
//     };

//     const action = {
//       type: "UPDATE_SALARY",
//       payload: {
//         name: "rahul",
//         salary: 10000,
//       },
//     };
//     //Act
//     const updatedState = employeeReducer(initialState, action);
//     //Assert
//     expect(updatedState).toEqual({
//       employees: [{ name: "rahul", role: "accountant", salaries: 60000 }],
//     });
//   });

  it("should remove employee", () => {
    //Arrange
    const initialState = {
      employees: [
        { name: "rahul", role: "accountant", salaries: 50000 },
        { name: "kishan", role: "engineer", salaries: 100000 },
      ],
    };

    const action = {
      type: "REMOVE_EMPLOYEE",
      payload: {
        name: "rahul",
      },
    };
    //Act
    const updatedState = employeeReducer(initialState, action);
    //Assert
    expect(updatedState).toEqual({
      employees: [{ name: "kishan", role: "engineer", salaries: 100000 }],
    });
  });

  it("should filter employee", () => {
    //Arrange
    const initialState = {
      employees: [
        { name: "kishan", role: "engineer", salaries: 100000 },
        { name: "raj", role: "ca", salaries: 1500000 },
      ],
    };

    const action = {
      type: "FILTER_EMPLOYEES",
      payload: { role: "ca" },
    };
    //Act
    const updatedState = employeeReducer(initialState, action);
    //Assert

    expect(updatedState).toEqual({
      employees: [{ name: "raj", role: "ca", salaries: 1500000 }],
    });
  });



});
