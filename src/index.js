import React from 'react';
import { render } from 'react-dom';
//provider->czyni on store dostępnym dla wszystkich zdefiniowanych w app komponentów
// kontenerowych bez konieczności jawnego przekazywania go do nich.
//osadzenie całego naszego drzewa DOM aplikacji w elemencie <Provider>
import { Provider } from 'react-redux';
import store from './store';
import DevTools from './DevTools';
//przekazac plik z akcjami
import { getCountries } from './actions/actions-countries';

//Komponent Provider może mieć tylko jednego potomka
//wystarczy umieścić dodatkowy element <div> wewnątrz <Provider> i w nim umieścić <DevTools/>i<h1>.
render(
  <Provider store={store}>
    <div>
      <h1>Inicjalizacja projektu</h1>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
);

store.dispatch(getCountries());
