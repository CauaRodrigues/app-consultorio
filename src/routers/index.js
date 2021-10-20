import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Contact from '../pages/Contato';

const Routers = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={ Home }></Route>
                <Route exact path='/Contato' component={ Contact }></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routers;