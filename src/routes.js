//Komponent <Router> może przyjmować opcjonalny parametr routes.
//Dzięki temu, możemy wydzielić wszystkie tworzone route'y do osobnego pliku,
import React from 'react';
import { Route } from 'react-router';
import Navigation from './presentational/navigation.component';

export default (
  //jest to wycięty fragment kodu z pliku src/index.js.
  //Od tej chwili wszystkie route'y będą definiowane w tym pliku.
    <Route path='/' component={Navigation}>
    </Route>
);
