import React from "react";
import ReactDom from "react-dom";
import {createStore, compose} from 'redux';
import './index.css';
import App from './components/app/app';
import {Provider} from 'react-redux'
import { rootReducer } from "./components/redux/rootReducer";


const store = createStore(rootReducer, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

const app = (
    <Provider store={store}>
        <App></App>
    </Provider>
)

ReactDom.render(app, document.getElementById("root"));
