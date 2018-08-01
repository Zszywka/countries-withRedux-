import React from 'react';
import { render } from 'react-dom';
//provider->czyni on store dostępnym dla wszystkich zdefiniowanych w app komponentów
// kontenerowych bez konieczności jawnego przekazywania go do nich.
//osadzenie całego naszego drzewa DOM aplikacji w elemencie <Provider>
import { Provider } from 'react-redux';
import store from './store';


render(
  <Provider store={store}>
    <h1>Inicjalizacja projektu</h1>
  </Provider>,
  document.getElementById('root')
);
