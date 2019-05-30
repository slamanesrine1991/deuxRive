import axios from 'axios';

export const getCentFailure = error => ({
  type: "FETCH_PEOPLE_FAILURE",
  payload: { error }
});

export const getCentSuccess = payload => ({
  type: "FETCH_PEOPLE_SUCCESS",
  payload
});

export const getCent = () => {
  return dispatch => {
    // axios.get("/people")
    axios.get("/api/collaborater/all")
      .then(res => res.data)
      .then(payload => {
        dispatch(getCentSuccess(payload));
      })
      .catch(error => dispatch(getCentFailure(error)));;
  };
};

