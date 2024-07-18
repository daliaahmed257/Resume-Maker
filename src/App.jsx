import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import PersonalDetails from './components/PersonalDetails'
import Resume from './components/Resume'
import Summ from './components/Summ'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'

function App() {

  //user details
  const [userDetails, setUserDetails] = useState({
    firstname: 'John',
    lastname: 'Doe',
    city: 'Newark',
    state: 'NJ',
    phone: 'xxx-xxx-xxxx',
    email: 'johndoe@gmail.com',
    link: 'https://www.linkedin.com/',
    linkName: 'LinkedIn',
    title: 'Accountant'
  });

  //user summary
  const [summary, setSummary] = useState({
    // personalTitle: 'Accountant',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
  });

  const handleFormSubmit = (details) => {
    if(details.personalTitle && details.summary) {
        setSummary(details);
    } else {
        setUserDetails(details);
    }
};

  //skilss
  const [skills, setSkills] = useState(['detail oriented', 'Analytical Thinking', 'Teamwork'])

  const handleSkillsSubmit = (details) => {
    setSkills(details);
}

const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long' }).format(date);
};
//experience
const [experience, setExperience] = useState([{
  jobtitle: 'Accountant',
  employer: 'Chase Bank',
  city: 'New York',
  state: 'NY',
  startDate: formatDate(new Date()),
  endDate: formatDate(new Date()),
  current: '',
  responsibilities: 'Managed all aspects of month-end financial close process, ensuring accuracy and timeliness in preparation of financial statements'
}])


const handleExpSubmit = (newExperience) => {
  setExperience(...newExperience);
};

//Education
const [education, setEducation] = useState([{
  name: 'Rutgers',
  location: 'Newbrunswick, NJ',
  degree: 'Bachelors',
  study: 'Accounting'
}])

const handleEducationSubmit = (newEducation) => {
  setEducation(...newEducation);
}

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col'>
            <Routes>
              <Route path='/' element={<PersonalDetails onFormSubmit={handleFormSubmit} />} />
              <Route path='/summary' element={<Summ onFormSubmit={handleFormSubmit}/>} />
              <Route path='/skills' element={<Skills onFormSubmit={handleSkillsSubmit}/>} />
              <Route path='/experience' element={<Experience onFormSubmit={handleExpSubmit}/>} />
              <Route path='/education' element={<Education onFormSubmit={handleEducationSubmit}/>}/>
            </Routes>
        </div>
        <div className='col'>
          <Resume userDetails={userDetails} summary={summary} skills={skills} experience={experience} education={education}/>
        </div>
      </div>
    </div>
  );
}

export default App
