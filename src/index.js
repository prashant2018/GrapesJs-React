import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import GrapesApp from './Components/GrapesApp';

ReactDOM.render(<GrapesApp />, document.getElementById('gjs'));

serviceWorker.unregister();