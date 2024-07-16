import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import PersonalDetails from './components/PersonalDetails'
import Resume from './components/Resume'
import Summ from './components/Summ'
import Skills from './components/Skills'

function App() {

  const [userDetails, setUserDetails] = useState({
    firstname: 'John',
    lastname: 'Doe',
    city: 'Newark',
    state: 'NJ',
    phone: 'xxx-xxx-xxxx',
    email: 'johndoe@gmail.com',
  });

  const [summary, setSummary] = useState({
    jobtitle: 'Accountant',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  });

  const [skills, setSkills] = useState(['detail oriented', 'Analytical Thinking', 'Teamwork'])


  const handleFormSubmit = (details) => {
    if(details.jobtitle && details.summary) {
        setSummary(details);
    }else {
        setUserDetails(details);
    }
};

const handleSkillsSubmit = (details) => {
    setSkills(details);
}

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col'>
            <Routes>
              <Route path='/' element={<PersonalDetails onFormSubmit={handleFormSubmit} />} />
              <Route path='/summary' element={<Summ onFormSubmit={handleFormSubmit}/>} />
              <Route path='/skills' element={<Skills onFormSubmit={handleSkillsSubmit}/>} />
            </Routes>
        </div>
        <div className='col'>
          <Resume userDetails={userDetails} summary={summary} skills={skills}/>
        </div>
      </div>
    </div>
  );
}

export default App
