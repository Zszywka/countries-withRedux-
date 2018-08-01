//reducer
//import akcji
import { GET_COUNTRIES } from '../actions/actions-countries';
//import danych o panstwach
import countriesData from '../data/countries.json';

const initialState = {
  //countries -opisuje wszystkie dostepne panstwa
  countries: countriesData
};

//zabezp: gdy przekazania do reducera stanu aplikacji w stanie undefined
//zostanie do niego przypisana domyślna wartość initialState,
//a gdy przekazany nieznany typ akcji-> zwrocony obecny stan(return state)
const countriesReducer = function (state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
    //tworzy kopie obiektu state, do countries: przypisuje obecna wartosc tego pola
      return Object.assign({}, state, {countries: state.countries})

  }
  return state;
};
//export reducera
export default countriesReducer;
