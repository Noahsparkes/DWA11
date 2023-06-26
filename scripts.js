// @ts-check
// Define the initial state
const initialState = {
    count: 0,
  };
  
  // Define actions
  const INCREMENT = 'INCREMENT';
  const DECREMENT = 'DECREMENT';
  const RESET = 'RESET';
  
  // Create action creators
  function increment() {
    return { type: INCREMENT };
  }
  
  function decrement() {
    return { type: DECREMENT };
  }
  
  function reset() {
    return { type: RESET };
  }
  
  // Create reducers
  function counterReducer(state = initialState, action) {
    switch (action.type) {
      case INCREMENT:
        return { count: state.count + 1 };
      case DECREMENT:
        return { count: state.count - 1 };
      case RESET:
        return { count: 0 };
      default:
        return state;
    }
  }
  
  // Combine reducers (not needed in this example)
  
  // Create the store
  
  const { createStore } = require('redux');
  const store = createStore(counterReducer);
  
  // Dispatch actions
  store.dispatch(increment());
  store.dispatch(increment());
  store.dispatch(decrement());
  
  // Subscribe to state changes
  store.subscribe(() => {
    const state = store.getState();
    console.log('Current count:', state.count);
  });
  
  

  // The console output should be:
  // Current count: 1
  // Current count: 2
  // Current count: 1
  