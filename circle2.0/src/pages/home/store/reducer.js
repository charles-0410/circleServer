import * as actionTypes from './constants'

const defaultState = {
  demo: [1, 2, 3],
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_DEMO:
      return {
        ...state,
        demo: state.demo.concat(action.data),
      }
    default:
      return state
  }
}
