import * as api from "../api/authenticationApi";
import * as types from "../constants/authenticationConstants";

export const signUpAction = (form, navigate) => async (dispatch) => {
  try {
    const response = await api.signup(form);
    const { error, data } = response;
    if (error) {
      dispatch({
        type: types.SIGNUP_FAIL,
        payload: error,
      });
    }
    if (data !== null) {
      dispatch({
        type: types.SIGNUP_SUCCESS,
        payload: types.SIGNUP_SUCCESS_MESSAGE,
      });
      navigate("/signin");
    }
  } catch (err) {
    dispatch({
      type: types.SIGNUP_FAIL,
      payload: types.ERROR_MESSAGE,
    });
    navigate("/signup");
  }
};
export const siginAction = (form, navigate) => async (dispatch) => {
  try {
    const response = await api.signin(form);
    const { error, data } = response;
    if (error) {
      dispatch({
        type: types.SIGNIN_FAIL,
        payload: error,
      });
    } else {
      const { accessToken, refreshToken, accessTokenUpdatedAt, user } = data;
      const profile = {
        user,
        accessToken,
        refreshToken,
        accessTokenUpdatedAt,
      };
      localStorage.setItem("profile", JSON.stringify(profile));
      dispatch({
        type: types.SIGNIN_SUCCESS,
        payload: profile,
      });
      navigate("/");
    }
  } catch {
    dispatch({
      type: types.SIGNIN_FAIL,
      payload: types.ERROR_MESSAGE,
    });
    navigate("/signin");
  }
};
