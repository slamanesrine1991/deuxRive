const initialState = [];

function centReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_PEOPLE_SUCCESS":
      return action.payload;
    case "FETCH_PEOPLE_FAILURE":
      return action.payload;
    default:
      return state;
  }
}
export default centReducer;