import * as USERS from '../actions/usersTypes';

const initialState = {
  data: []
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case USERS.GET_USERS: {
      return {
        ...state,
        isLoading: true
      };
    }
    case USERS.GET_USERS_SUCCESS: {
      const { data } = action;

      return {
        ...state,
        isLoading: false,
        data,
      };
    }
    case USERS.GET_USERS_FAILURE: {
      const { error } = action;

      return {
        ...state,
        isLoading: false,
        error,
      };
    }

    case USERS.UPDATE_USER: {
      const { data } = action;

      return {
        ...state,
        isLoading: true,
        data
      };
    }
    case USERS.UPDATE_USER_SUCCESS: {
      const { data } = action;

      return {
        ...state,
        isLoading: false,
        data,
      };
    }
    case USERS.UPDATE_USER_FAILURE: {
      const { error } = action;

      return {
        ...state,
        isLoading: false,
        error,
      };
    }


    case USERS.ADD_USER: {
      const { data } = action;

      return {
        ...state,
        isLoading: true,
        data
      };
    }
    case USERS.ADD_USER_SUCCESS: {
      const { data } = action;

      return {
        ...state,
        isLoading: false,
        data,
      };
    }
    case USERS.ADD_USER_FAILURE: {
      const { error } = action;

      return {
        ...state,
        isLoading: false,
        error,
      };
    }
    default:
      return state;
  }
};
