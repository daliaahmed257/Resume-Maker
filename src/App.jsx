import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import PersonalDetails from './components/PersonalDetails'

function App() {

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
            <Routes>
              <Route path='/' element={<PersonalDetails />} />
            </Routes>
        </div>
        <div className='col'>Hello</div>
      </div>
    </div>
  );
}

export default App
