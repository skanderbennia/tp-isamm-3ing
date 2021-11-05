import types from "../types";
const initialState = {
  list: [],
};
const tasks = (state = initialState, action) => {
  switch (action.type) {
    case types.RETRIEVE_TASKS:
      return {
        ...state,
        list: action.payload,
      };
    case types.ADD_TASK:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case types.UPDATE_TASK:
      const indexUpdate = state.list.findIndex(
        (task) => task.id === action.payload.id
      );
      state.list[indexUpdate] = action.payload;
      return {
        ...state,
        list: [...state.list],
      };
    case types.DELETE_TASK:
      return {
        ...state,
        list: [...state.list.filter((task) => task.id !== action.payload)],
      };
    default:
      return state;
  }
};
export default tasks;
