import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Home from './views/Home';
import About from './views/About';
import NotFound from './views/NotFound';
import SidebarComponent from "./components/Sidebar/SidebarComponent";

export default class App extends Component {

    render() : JSX.Element {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <SidebarComponent />

                        <div className="vp-content">
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/about" component={About} />
                                <Route component={NotFound}/>
                            </Switch>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }

}