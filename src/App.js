import React from 'react';
import {TodoPage} from './pages/TodoPage.ver3.jsx'
import {Tabs} from './pages/Tabs'
import {Header} from './components';
import {Home, Cart} from './pages';
import {Route} from 'react-router-dom';

function App() {


    return (
        <div className="wrapper">
           <Header/>{/*шапка сайта*/}
            <div className="content">

                <Route path="/Tabs" component={Tabs} exact/>
                {/*
       <Route
        path="/exampleroute" путь по которому откроется компонент ExampleComponent
         component={ExampleComponent} компонент который отобразится по роуту exampleroute
          exact на потом
           />
       */}
            </div>
        </div>
    );
}

export default App;
