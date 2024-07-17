import { useState } from "react"

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
        current: false,
        responsibilities: ''
    })


    const handleChange = (e) => {
        setNewExp({...newExp, [e.target.name]: e.target.value })
    } 

    const handleAddExp = () => {
        setExperience([...experience, newExp])
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit([experience]);
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
                    <input className="form-check-input" type="checkbox" value="" name="flexCheckDefault" />
                </div>

                <div className="col-12">
                    <label htmlFor="responsibilities" className="form-label">Responsiblities</label>
                    <textarea className="form-control" name="responsibilities" onChange={handleChange} />
                </div>

                <div className="col-12">
                    <button type="submit" className="btn" onClick={handleAddExp}>+ Add</button>
                </div>


            </form>
        </div>
    )
}

export default Experience