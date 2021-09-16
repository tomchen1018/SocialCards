import * as USERS from './usersTypes';

export function getUsers() {
  return {
    type: USERS.GET_USERS,
  };
}

export function getUsersSuccess(data: any) {
  return {
    type: USERS.GET_USERS_SUCCESS,
    data,
  };
}

export function getUsersFailure(error: any) {
  return {
    type: USERS.GET_USERS_FAILURE,
    error,
  };
}



export function updateUser(data: any) {
  return {
    type: USERS.UPDATE_USER,
    data
  };
}

export function updateUserSuccess(data: any) {
  return {
    type: USERS.UPDATE_USER_SUCCESS,
    data,
  };
}

export function updateUserFailure(error: any) {
  return {
    type: USERS.UPDATE_USER_FAILURE,
    error,
  };
}


export function addUser(data: any) {
  return {
    type: USERS.ADD_USER,
    data
  };
}

export function addUserSuccess(data: any) {
  return {
    type: USERS.ADD_USER_SUCCESS,
    data,
  };
}

export function addUserFailure(error: any) {
  return {
    type: USERS.ADD_USER_FAILURE,
    error,
  };
}


