import {createStore} from 'redux';

const initState = {
  user: null,
}

const reducer = (state = initState, action) => {
  if (action.type === 'login') {
    localStorage.setitem('JWT_PAYLOAD', action.token);
    localStorage.setitem('_ID', action._id);

    return {
      ...state,
      user = action.user
    }
  
  } else{
    return state;
  }
}
const store = createStore(reducer);

export default store;