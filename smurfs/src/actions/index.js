import axios from "axios";

export const FETCH_SMURFS = "FETCH_SMURFS";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";
export const ADD_SMURF = "ADD_SMURF";

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log(res);
      dispatch({ type: SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ERROR, payload: err });
    });
};

export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADD_SMURF });
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(res => {
      dispatch({ type: SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err });
    });
};
