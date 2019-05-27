import axios from 'axios';
import {GET_PROJECT} from './type'



  // export const fetchProject = () => dispatch => {
    
  //   axios
  //     .get("/api/project/all")
  //     .then(res =>
  //       dispatch({
  //         type: GET_PROJECT,
  //         payload: res.data
  //       })
  //     )
  //     .catch(err =>
  //       dispatch({
  //         type: GET_PROJECT,
  //         payload: null
  //       })
  //     );
  // };

  export const fetchProjectSuccess = projects => ({
    type: GET_PROJECT,
    projects
  });
  
  export const fetchProject = () => {
    return dispatch => {
      axios.get("/api/project/all")
        .then(res => res.data)
        .then(projects => {
          dispatch(fetchProjectSuccess(projects));
        });
    };
  };
  