import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TestComp from './components/testComponent';

//import 'bootstrap/dist/css/bootstrap.css'

const element = <h1>Babel compile this please</h1>
const test = <p>kiss this</p>
const test2 = <p2>or this</p2>

ReactDOM.render(<TestComp/>, document.getElementById('root'))
//ReactDOM.render(element, document.getElementById('root'))
