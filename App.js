import React from 'react';
import './App.css';
import Form from './Form';
import Login from './Login';
import Header from './MemeGen/Header';
import MemeGenerator from './MemeGen/MemeGenerator';
import './MemeGen/Meme.css';
import Home from './BabyNames/Home';
import { NamesProvider } from './BabyNames/Context';
import Main from './PhotoWall/Main';
import {BrowserRouter} from 'react-router-dom'
import { createStore } from 'redux';
import rootReducer from './redux/reducer';
import { Provider } from 'react-redux';


const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {
  return (
    <div className="App">
      {/* <Form /> */}
        {/* <Login /> */}
 
        {/* <Header />
        <MemeGenerator /> */}

       {/* <NamesProvider>
          <Home />
      </NamesProvider> */}

     <Provider store={store}><BrowserRouter><Main /></BrowserRouter></Provider>

    </div>
  );
}

export default App;
