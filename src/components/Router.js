import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import StorePicker from './StorePicker';
import NotFound from './NotFound';
// on crée un stateless component pour le routeur

const Router = () => (
  <BrowserRouter>
    <Switch>
    {/* exact path veut dire seulement '/' et non tout ce qui vient apres le slash */}
      <Route exact path='/' component={StorePicker} />
      <Route path="/store/:storeId" component={App} />
      {/* si l'url ne correspond a rien on renvoit un not found */}
      <Route component={NotFound} />
     </Switch>
  </BrowserRouter>
)

export default Router;

