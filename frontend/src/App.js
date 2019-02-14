import  React, { Component } from  'react';
import { BrowserRouter } from  'react-router-dom'
import  './App.css';
import BaseLayout from './components/BaseLayout';

class  App  extends  Component {

  render() {
      return (
        <BrowserRouter>
            <BaseLayout/>
        </BrowserRouter>
      );
  }
}
export  default  App;