import axios from "axios";

const GET_PRESS = "GET_PRESS";
const CREATE_PRESS = "CREATE_PRESS";
const DELETE_PRESS = "DELETE_PRESS";

const getPress = press => ({ type: GET_PRESS, press });
const createPress = press => ({ type: CREATE_PRESS, press });
const deletePress = id => ({ type: DELETE_PRESS, id });

export const getPressArticles = () => async dispatch => {
  const { data } = await axios.get("/api/press");
  dispatch(getPress(data));
};

export const createPressArticles = obj => async dispatch => {
  const { data } = await axios.post("/api/press", obj);
  dispatch(createPress(data));
};

export const deletePressArticles = id => async dispatch => {
  await axios.post(`/api/press${id}`);
  dispatch(deletePress(id));
};

const press = (state = [], action) => {
  switch (action.type) {
    case GET_PRESS:
      return action.press;
    case CREATE_PRESS:
      return [...state, action.press];
    case DELETE_PRESS:
      return [...state].filter(p => p.id !== action.id);
    default:
      return state;
  }
};

export default press;
