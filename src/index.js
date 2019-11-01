import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import './index.css';
import { createStore } from 'redux';
import { searchRobots } from './reducers';

const store = createStore(searchRobots)

ReactDOM.render(
                <Provider store={store}>
                    <App/>
                </Provider>
                ,
                document.getElementById('root'));

serviceWorker.unregister();