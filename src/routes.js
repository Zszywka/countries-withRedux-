//Komponent <Router> może przyjmować opcjonalny parametr routes.
//Dzięki temu, możemy wydzielić wszystkie tworzone route'y do osobnego pliku,
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navigation from './presentational/navigation.component';
//import nowych sciezek
import Home from './presentational/home.component';
import Contact from './presentational/contact.component';
import NotFound from './presentational/not-found.component';

// export default (
//   //jest to wycięty fragment kodu z pliku src/index.js.
//   //Od tej chwili wszystkie route'y będą definiowane w tym pliku.
//   <Route path='/' component={Navigation}>
//   //wszystkie nowe sciezki sa tu
//     //przy każdym kolejnym poziomie zagnieżdżenia route'ów jest używanie komponentu <IndexRoute>.
//     //wtedy nie ma propsa path,automatycznie ma wartość ścieżki jego rodzica('/')
//     <IndexRoute component={Home}/>
//     <Route path='contact' component={Contact}/>
//     //ostatni ma byc z * oznacza dowolny adres
//     <Route path='*' component={NotFound}/>
//   </Route>
// );

export default (
  <Route path='/' component={Navigation}>
    <IndexRoute component={Home}/>
    <Route path='contact' component={Contact}/>
    <Route path='*' component={NotFound}/>
  </Route>
);
