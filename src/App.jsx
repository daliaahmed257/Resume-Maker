import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import PersonalDetails from './components/PersonalDetails'
import Resume from './components/Resume'

function App() {

  const [userDetails, setUserDetails] = useState({
    firstname: '',
    lastname: '',
    jobtitle: '',
    address1: '',
    address2: '',
    phone: '',
    email: '',
  });

  const handleFormSubmit = (details) => {
    setUserDetails(details);
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
            <Routes>
              <Route path='/' element={<PersonalDetails onFormSubmit={handleFormSubmit}/>} />
            </Routes>
        </div>
        <div className='col'>
          <Resume userDetails={userDetails}/>
        </div>
      </div>
    </div>
  );
}

export default App
