export const SET_APP_MESSAGE = "SET_APP_MESSAGE"

export const setAppMessage = (message) => {
  return (dispatch) => {
    dispatch({
      type: SET_APP_MESSAGE,
      message
    })
  }
}
