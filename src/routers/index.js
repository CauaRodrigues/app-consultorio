import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Contact from '../pages/Contato';
import Missao from '../pages/Missao';
import Planos from '../pages/Planos';

const Routers = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={ Home }></Route>
                <Route exact path='/Contato' component={ Contact }></Route>
                <Route exact path='/Missao' component={ Missao }></Route>
                <Route exact path='/Planos' component={ Planos }></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routers;