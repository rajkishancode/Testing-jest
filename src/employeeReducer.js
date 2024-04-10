const initialState = {
  employees: [],
};

export const employeeReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };
    case "UPDATE_SALARY":
      const employeeToUpdate = state.employees.find(
        (emp) => emp.name === action.payload.name
      );
      if (employeeToUpdate) {
        return {
          ...state,
          employees: [
            ...state.employees,
            {
              ...employeeToUpdate,
              salaries: employeeToUpdate.salaries + action.payload.salary,
            },
          ],
        };
      }
      break;
    case "REMOVE_EMPLOYEE":
      return {
        ...state,
        employees: [
          ...state.employees.filter((emp) => emp.name !== action.payload.name),
        ],
      };
    case "FILTER_EMPLOYEES":
      return {
        ...state,
        employees: [
          ...state.employees.filter((emp) => emp.role === action.payload.role),
        ],
      };
    default:
      return state;
  }
};

// {names:"rahul", role:"accountant",salaries:"50000"}
