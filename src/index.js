import React from 'react';
import  ReactDOM  from 'react-dom';
//import PrimeraApp from './PrimerApp';
import CounterApp from './CounterApp';
import './index.css'

const divRoot = document.querySelector('#root');
ReactDOM.render(<CounterApp />, divRoot);
// ReactDOM.render(<PrimeraApp saludo={'Hola, soy Goku'}/>, divRoot);