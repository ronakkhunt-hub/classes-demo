import {
  CREATE_POST,
  CREATE_POST_SUCCESS,
  CREATE_USER,
  CREATE_USER_SUCCESS,
  GET_POST,
  GET_POST_SUCCESS,
  GET_USER,
  GET_USER_SUCCESS,
} from "./constants";

export const getUserAction = (payload) => ({
  type: GET_USER,
  payload,
});

export const getUserSuccessAction = (payload) => ({
  type: GET_USER_SUCCESS,
  payload,
});

export const getPostAction = (payload) => ({
  type: GET_POST,
  payload,
});

export const getPostSuccessAction = (payload) => ({
  type: GET_POST_SUCCESS,
  payload,
});

export const createPostAction = (payload) => ({
  type: CREATE_POST,
  payload,
});

export const createPostSuccessAction = (payload) => ({
  type: CREATE_POST_SUCCESS,
  payload,
});

export const createUserAction = (payload) => ({
  type: CREATE_USER,
  payload,
});

export const createUserSuccessAction = (payload) => ({
  type: CREATE_USER_SUCCESS,
  payload,
});
