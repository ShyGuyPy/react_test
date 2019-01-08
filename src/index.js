import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TestComp from './components/testComponent';
import TestComp2 from './components/testComponent2';

//import 'bootstrap/dist/css/bootstrap.css'

const element = <h1>Babel compile this please</h1>
const test = <p>this is a test</p>
const test2 = <p2>this is also a test</p2>

ReactDOM.render(<TestComp/>, document.getElementById('root'))



//ReactDOM.render(<TestComp2/>, document.getElementById('root'))

//ReactDOM.render(element, document.getElementById('root'))
