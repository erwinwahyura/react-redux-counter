const initialState = {
  counter: 1
}

export default (state= initialState, action) => {
  console.log(action);
  console.log(state);

  switch (action.type) {
    case 'increment':
      return {...state, counter: state.counter + action.payload.adder}
      break;
    case 'decrement':
      return {...state, counter: state.counter - action.payload.adder}
      break;
    default:
      return state

  }
}
