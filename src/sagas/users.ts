import { takeEvery, put } from "redux-saga/effects";
import { generateUsers, postUser, addNewUser } from "../services/usersService";

import * as USERS from '../actions/usersTypes';
import * as usersActions from '../actions/usersActions';

export interface ResponseGeneratorProps {
  config?: any,
  data?: any,
  headers?: any,
  request?: any,
  status?: number,
  statusText?: string
}

export function* getUsers() {
  try {
    const response: ResponseGeneratorProps = yield generateUsers();

    if (response) {
      yield put(usersActions.getUsersSuccess(response.data));
    }

  } catch (err) {
    yield put(usersActions.getUsersFailure(err));
  }
}

export function* updateUser(data: any) {
  try {
    const response: ResponseGeneratorProps = yield postUser(data);

    if (response) {
      yield put(usersActions.updateUserSuccess(response.data));
    }

  } catch (err) {
    yield put(usersActions.updateUserFailure(err));
  }
}


export function* addUser(data: any) {
  try {
    const response: ResponseGeneratorProps = yield addNewUser(data);

    if (response) {
      yield put(usersActions.updateUserSuccess(response.data));
    }

  } catch (err) {
    yield put(usersActions.updateUserFailure(err));
  }
}

export function* loadUsersWatcher() {
  yield takeEvery(USERS.GET_USERS, getUsers);
  yield takeEvery(USERS.UPDATE_USER, updateUser);
  yield takeEvery(USERS.ADD_USER, addUser);
}
