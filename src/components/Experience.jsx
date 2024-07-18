import { useState } from "react"
import { Link } from "react-router-dom";

const Experience = ({ onFormSubmit }) => {

    const formatDate = (date) => {
        return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long' }).format(date);
    };

    const [experience, setExperience] = useState([]);

    const [newExp, setNewExp] = useState({
        jobtitle: '',
        employer: '',
        city: '',
        startDate: formatDate(new Date()),
        endDate: formatDate(new Date()),
        current: 'hello',
        responsibilities: ''
    })

    const [isChecked, setIsChecked] = useState(false);


    const handleChange = (e) => {
        setNewExp({...newExp, [e.target.name]: e.target.value })
        // isChecked ? setNewExp(newExp.current = 'present') : setExperience(newExp.current = '')
    }
    
    const handleChecked = (e) => {
        const isChecked = e.target.checked;
        setIsChecked(isChecked);
    
        setNewExp(prevExp => ({
            ...prevExp,
            current: isChecked ? 'present' : ''
        }));
        console.log(newExp.current)
    }

    const handleAddExp = () => {
        setExperience([...experience, newExp])
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit([experience]);
        console.log(newExp.current);
    }

    return (
        <div className="container">
            <h2 className="text-center mb-5">Experience</h2>
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-6">
                    <label htmlFor="jobtitle" className="form-label">Job Title</label>
                    <input type="text" className="form-control" name="jobtitle" onChange={handleChange} />
                </div>

                <div className="col-6">
                    <label htmlFor="employer" className="form-label">Employer</label>
                    <input type="text" className="form-control" name="employer" onChange={handleChange} />
                </div>

                <div className="col-6">
                    <label htmlFor="city" className="form-label">City</label>
                    <input type="text" className="form-control" name="city" onChange={handleChange} />
                </div>

                <div className="col-6">
                    <label htmlFor="state" className="form-label">State</label>
                    <input type="text" className="form-control" name="state" onChange={handleChange} />
                </div>

                <div className="col-6">
                    <label htmlFor="startDate" className="form-label">Start Date</label>
                    <input type="month" className="form-control" name="startDate" onChange={handleChange} />
                </div>

                <div className="col-6">
                    <label htmlFor="endDate" className="form-label">End Date</label>
                    <input type="month" className="form-control" name="endDate" onChange={handleChange} />
                </div>

                <div className="form-check mt-4 col offset-7">
                    <label className="form-check-label" htmlFor="flexCheckDefault">Currently work here</label>
                    <input className="form-check-input" type="checkbox" value="present" name="flexCheckDefault" checked={isChecked}
                        onChange={handleChecked}/>
                </div>

                <div className="col-12">
                    <label htmlFor="responsibilities" className="form-label">Responsiblities</label>
                    <textarea className="form-control" name="responsibilities" onChange={handleChange} />
                </div>

                <div className="col-12">
                    <button type="submit" className="btn" onClick={handleAddExp}>+ Add</button>
                </div>

                <div className="d-flex justify-content-end mt-5" style={{ gap: '32px' }}>
                    <Link to="/skills">
                        <button className="btn btn-outline-secondary" type="submit">Back</button>
                    </Link>
                    <Link to="/experience">
                        <button className="btn btn-primary" type="submit">Continue</button>
                    </Link>
                </div>

            </form>
            <p>{isChecked ? 'The checkbox is checked.' : 'The checkbox is not checked.'}</p>

        </div>
    )
}

export default Experience