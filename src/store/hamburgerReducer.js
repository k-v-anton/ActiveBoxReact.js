const CHANGE_HAMBURGER_STATE = 'CHANGE_HAMBURGER_STATE'
const defaultState = false

export const hamburgerAction = (state) => {
  return {
    type: CHANGE_HAMBURGER_STATE,
    payload: state
  }
}

export const hamburgerReducer = (state=defaultState, action) => {
  switch (action.type) {
    case CHANGE_HAMBURGER_STATE:
      return action.payload
  
    default:
      return state
  }
}