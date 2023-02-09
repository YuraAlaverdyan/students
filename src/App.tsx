import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import { StudentContextProvider } from './Context/StudentsContext';
import { MyRoter } from './MyRouter';

const App:React.FC = () => {
  return (
    <BrowserRouter>
      <StudentContextProvider>
        <MyRoter />
      </StudentContextProvider>
    </BrowserRouter>
  );
}

export default App;
