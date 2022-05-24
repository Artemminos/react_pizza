import React from 'react';

import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';
import {ExampleFn} from './components/exampleImport';
import Dima from "./example";

const ExampleComponent = ()=>{
    return <div>example route</div>
}

function App() {
  return (
    <div  className="wrapper">
      <Header />{/*шапка сайта*/}
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
        <Route path="/exampleroute" component={ExampleComponent} exact />
        {/*
       <Route
        path="/exampleroute" путь по которому откроется компонент ExampleComponent
         component={ExampleComponent} компонент который отобразится по роуту exampleroute
          exact на потом
           />
       */}
       <Dima />
      </div>
    </div>
  );
}

export default App;
