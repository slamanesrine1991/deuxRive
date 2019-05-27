const initialState = [];

function projectReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_PROJECT":
      return action.projects;
    default:
      return state;
  }
}
export default projectReducer;
