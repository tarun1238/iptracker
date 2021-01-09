import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import counterReducer from './Reducers/counterReducer';

const myStore = createStore(counterReducer)
document.title='React_Myapp'

ReactDOM.render(
<Provider store={myStore}>
     <Router>
          <Switch>
               <Route path="/" component={App}/>
          </Switch>
     </Router>
</Provider>

, document.getElementById('root'));


