import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Ligacao from './pages/Ligacao';
import NovoPlano from './pages/NovoPlano';
import Preco from './pages/Preco';
import Plano from './pages/Plano';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Ligacao} />
        <Route path="/new" component={NovoPlano} />
        <Route path="/price" component={Preco} />
        <Route path="/plan" component={Plano} />
      </Switch>
    </BrowserRouter>
  );
}
