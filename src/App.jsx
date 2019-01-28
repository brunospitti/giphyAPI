import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

import './App.scss';

import Home from './routes/Home';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <div>
                <HashRouter>
                    <Switch>
                        <Route to='/' component={ Home } exact/>
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('react_js'));