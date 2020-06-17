import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import history from './history';

class App extends React.Component {
  
    render() {
        return (
            <div className="App">
              <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route exact path="/home" component={Home} />
                </Switch>
            </Router>  
            </div>
        );
    }
}


export default App ;
