import {
  CREATE_POST_SUCCESS,
  GET_POST_SUCCESS,
  GET_USER_SUCCESS,
} from "./constants";

const initialState = {
  users: [],
  posts: [],
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USER_SUCCESS:
      return { ...state, users: payload.data };
    case GET_POST_SUCCESS:
      return { ...state, posts: payload };
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        posts: [payload, ...state.posts],
      };
    default:
      return state;
  }
};
