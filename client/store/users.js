import axios from "axios";

/**
 * ACTION TYPES
 */
const GET_USER = "GET_USER";
const REMOVE_USER = "REMOVE_USER";
const UPDATE_USER = "UPDATE_USER";

/**
 * INITIAL STATE
 */
const defaultUser = {};

/**
 * ACTION CREATORS
 */
const getUser = user => ({ type: GET_USER, user });
const removeUser = () => ({ type: REMOVE_USER });
const updateU = user => ({ type: UPDATE_USER, user });

/**
 * THUNK CREATORS
 */
export const me = () => async dispatch => {
  try {
    const res = await axios.get("/api/auth/me");
    dispatch(getUser(res.data || defaultUser));
  } catch (err) {
    console.error(err);
  }
};

export const auth = (obj, method) => async dispatch => {
  let res;

  try {
    res = await axios.post(`/api/auth/${method}`, {
      obj
    });
  } catch (authError) {
    return dispatch(getUser({ error: authError }));
  }

  try {
    dispatch(getUser(res.data));
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr);
  }
};

export const logout = () => async dispatch => {
  try {
    await axios.post("/api/auth/logout");
    dispatch(removeUser());
  } catch (err) {
    console.error(err);
  }
};

export const updateUser = (payload, id) => async dispatch => {
  try {
    const user = await axios.put(`/api/users/${id}`, payload);
    dispatch(updateU(user));
  } catch (e) {
    console.error(e);
  }
};

/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user;
    case REMOVE_USER:
      return defaultUser;
    case UPDATE_USER:
      return action.user;
    default:
      return state;
  }
}
