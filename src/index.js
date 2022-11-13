import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Favicon from '../src/assets/ruskybuckets.gif';

ReactDOM.render(
    <div>
        <Favicon url = '../src/assets/ruskybuckets.gif'/>
        <App/>
    </div>, document.querySelector('#root'));
