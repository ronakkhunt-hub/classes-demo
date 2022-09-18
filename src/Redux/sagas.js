import { call, takeEvery, put } from "redux-saga/effects";
import { createPostSuccessAction, createUserSuccessAction, getPostSuccessAction, getUserSuccessAction } from "./actions";
import { getOptions, postOptions } from "./apiClient";
import { CREATE_POST, CREATE_USER, GET_POST, GET_USER } from "./constants";

export function* getUser(action) {
  const { url } = action.payload;
  try {
    const result = yield call(getOptions, url);
    yield put(getUserSuccessAction(result.data));
  } catch (error) {
    console.log("error", error);
  }
}

export function* getPost(action) {
  const { url } = action.payload;
  try {
    const result = yield call(getOptions, url);
    yield put(getPostSuccessAction(result.data));
  } catch (error) {
    console.log("error", error);
  }
}

export function* createPost(action) {
  const { url, data } = action.payload;
  try {
    const result = yield call(postOptions, url, data);
    yield put(createPostSuccessAction(result.data));
  } catch (error) {
    console.log("error", error);
  }
}

export function* createUser(action) {
  const { url, data } = action.payload;
  try {
    const result = yield call(postOptions, url, data);
    yield put(createUserSuccessAction(result.data));
  } catch (error) {
    console.log("error", error);
  }
}

export function* rootSaga() {
  yield takeEvery(GET_USER, getUser);
  yield takeEvery(GET_POST, getPost);
  yield takeEvery(CREATE_POST, createPost);
  yield takeEvery(CREATE_USER, createUser);
}
