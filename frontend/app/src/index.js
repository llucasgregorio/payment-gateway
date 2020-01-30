import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/pages/home/App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';





//Realizamos a criação das rotas
const Rotas = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App} />
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(Rotas, document.getElementById('root'));

serviceWorker.unregister();