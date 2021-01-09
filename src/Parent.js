import React from 'react'
//import  {Route, BrowserRouter as Router} from 'react-router-dom'
//import Reg from './Reg'
import HomePage from './HomePage'
import logo from './logo.svg';
export default class Parent extends Component {
    state = {
        name: "sivaprakash",
        age: 25
    };

    changeName = newName => this.setState({ name: newName });

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/app"
                           render={() =>
                               <App name={this.state.name}
                                    age={this.state.age}
                                    changeName={this.changeName} />
                           } />
                    <Route path="/HomePath"
                           render={() =>
                               <Home name={this.state.name}/>
                           } />
                </Switch>
            </Router>
        )
    }
}