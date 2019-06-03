// Related actions
export const UPDATE_TIME = 'UPDATE_TIME';
export const TIME_UPDATED = 'TIME_UPDATED';

// Initial state
const initialState = {
  time: new Date().getTime(),
  timeLoading: false
};

// Selectors for this state
export const selectors = {
  all(state) {
    return state.home;
  },
  getCurrentTime(state) {
    return state.home.time;
  },
  isTimeLoading(state) {
    return state.home.timeLoading;
  },
};

// State
export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TIME:
      return {
        ...state,
        timeLoading: true,
      };
    case TIME_UPDATED:
      return {
        ...state,
        time: action.time,
        timeLoading: false
      };
    default:
      return state;
  }
};

// General functions which use dispatch (to dispatch actions) to interact with state
// NOTE: Thunks normally go in their own directory (containers/redux/thunks)
export const updateTime = () => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_TIME
    });

    // Timeout, simulate RPC
    setTimeout(() => {
      dispatch({
        type: TIME_UPDATED,
        time: new Date().getTime()
      });
    }, 1500);
  }
};