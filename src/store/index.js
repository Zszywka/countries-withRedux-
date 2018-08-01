//dodanie store'a
import { createStore } from 'redux';
import reducers from '../reducers/index';
import DevTools from '../DevTools';

//przekazać reducer jako argument funkcji createStore,
const store = createStore(
  reducers
);
//następnie go wyeksportować
export default store;

//teraz mozemy uzyc metody store.dispatch.
