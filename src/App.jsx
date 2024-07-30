import { useState, useRef } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import PersonalDetails from './components/PersonalDetails';
import Resume from './components/Resume';
import Summ from './components/Summ';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Header from './components/Header';
import { PDFExport } from '@progress/kendo-react-pdf';
import Download from './components/Download';
import { useLocation } from 'react-router-dom';

function App() {

  const pdfExportComponent = useRef(null);

  const location = useLocation();

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
    if (details.personalTitle && details.summary) {
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

  // const formatDate = (date) => {
  //   return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long' }).format(date);
  // };

  const formatDate = (date) => {
    return date.toISOString().substring(0, 7);
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


  const [experiences, setExperiences] = useState([
    {
      jobtitle: 'Accountant',
      employer: 'Chase Bank',
      city: 'New York',
      state: 'NY',
      startDate: formatDate(new Date()),
      endDate: formatDate(new Date()),
      current: '',
      responsibilities: 'Managed all aspects of month-end financial close process, ensuring accuracy and timeliness in preparation of financial statements'
    }
  ])

  const handleExpSubmit = (exp) => {
    setExperiences([...exp])
  }

  const handleExpDelete = (index) => {
    setExperiences((prevExperiences) => prevExperiences.filter((_, i) => i !== index));
  };


  return (
    <div className='mb-5'>
      <Header />
      <div className='container d-flex justify-content-center'>
        <div className='row' style={{ maxWidth: `${location.pathname === '/download' ? '800px' : ''}` }}>
          <div className='col-12 col-md-6'>
            <Routes>
              <Route path='/' element={<PersonalDetails onFormSubmit={handleFormSubmit} />} />
              <Route path='/summary' element={<Summ onFormSubmit={handleFormSubmit} />} />
              <Route path='/skills' element={<Skills onFormSubmit={handleSkillsSubmit} />} />
              <Route path='/experience' element={<Experience onFormSubmit={handleExpSubmit} onDelete={handleExpDelete} />} />
              <Route path='/education' element={<Education onFormSubmit={handleEducationSubmit} />} />
            </Routes>
          </div>

          <Routes>
            <Route path='/download' element={<Download pdfExportComponent={pdfExportComponent} />} />
          </Routes>


          <div className={`col-12 ${location.pathname === '/download' ? 'col-12' : 'col-md-6'}`}>
            <PDFExport paperSize={'Letter'}
              fileName="_____.pdf"
              title=""
              subject=""
              keywords=""
              ref={pdfExportComponent}>
              <div className="pdf">
                <Resume userDetails={userDetails} summary={summary} skills={skills} experiences={experiences} education={education} />
              </div>
            </PDFExport>
          </div>
        </div>

      </div>

    </div>
  );
}

export default App
