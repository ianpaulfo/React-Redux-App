import React from 'react';
import './App.css';

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import PlayerForm from "./components/PlayerForm";
import PlayersList from "./components/PlayersList";
import { playersReducer } from "./reducer";



const store = createStore(playersReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <h1>NBA players</h1>
        <PlayerForm />
        <PlayersList />
      </div>
    </Provider>
    );
  }