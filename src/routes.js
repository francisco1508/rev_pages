import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Componentes
import App from './Components/App';
import Home from './Components/Home';
import Politica from './Components/Politica';
import Cultura from './Components/Cultura';
import Opinion from './Components/Opinion';
import Radio from './Components/Radio';
import Television from './Components/Television';
import Reportajes from './Components/Reportajes';
import More from './Components/More'
import Page404 from './Components/Page404'

const AppRoutes = () =>
    <App>
        <Switch>
            <Route exact path="/" component={ Home }/>
            <Route exact path="/politica" component={ Politica }/>
            <Route exact path="/cultura" component={ Cultura }/>
            <Route exact path="/opinion" component={ Opinion }/>
            <Route exact path="/radio" component={ Radio }/>
            <Route exact path="/television" component={ Television }/>
            <Route exact path="/reportaje" component={ Reportajes }/>
            <Route exact path="/more" component={ More }/>
            <Route component={ Page404 }/>
        </Switch>    
    </App>

export default AppRoutes;