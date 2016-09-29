import React from 'react';
import ReactDOM from 'react-dom';
import Tester from './tester.jsx';

export default class PieElement extends HTMLElement{
  createdCallback(){
    console.log('created..');
  }

  attachedCallback(){
    console.log('attached..');
    let el = React.createElement(Tester, {msg: 'ping'});
    ReactDOM.render(el, this);
  }
}