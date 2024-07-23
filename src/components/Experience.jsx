import { useState } from "react"
import { Link } from "react-router-dom";

const Experience = ({ onFormSubmit }) => {

    const formatDate = (date) => {
        return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long' }).format(date);
    };


    const [experiences, setExperiences] = useState([
        {
            jobtitle: '',
            employer: '',
            city: '',
            state: '',
            startDate: formatDate(new Date()),
            endDate: formatDate(new Date()),
            current: false,
            responsibilities: ''
        }
    ]);

    const [submittedExperiences, setSubmittedExperiences] = useState([])
    const [openIndex, setOpenIndex] = useState(0);


    const handleAddExp = () => {
        setExperiences([
            ...experiences,
            {
                jobtitle: '',
                employer: '',
                city: '',
                state: '',
                startDate: formatDate(new Date()),
                endDate: formatDate(new Date()),
                current: '',
                responsibilities: ''
            }
        ]);
        setOpenIndex(experiences.length)
    };

    //sets checkmark
    const handleChecked = (e, index) => {
        const isChecked = e.target.checked;
        const updatedExperiences = experiences.map((exp, i) =>
            i === index ? { ...exp, current: isChecked ? 'present' : '' } : exp
        );
        setExperiences(updatedExperiences);
    };

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const updatedExperiences = experiences.map((exp, i) =>
            i === index ? { ...exp, [name]: value } : exp
        );
        setExperiences(updatedExperiences);
        console.log(updatedExperiences);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // setSubmittedExperiences(experiences);
        onFormSubmit(experiences)
        setOpenIndex(null);
    };

    const handleDelete = (index) => {
        const updatedExperiences = experiences.filter((_, i) => i !== index);
        setExperiences(updatedExperiences);
        setSubmittedExperiences(submittedExperiences.filter((_, i) => i !== index));
    };

    const toggleForm = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };


    return (
        <div className="container">
            <h2 className="text-center mb-5">Expience</h2>
            {
                experiences.map((e, index) => (
                    openIndex === index ?
                        (<div className="drawer" key={index}>
                            <form className="row g-3" onSubmit={handleSubmit}>
                                <div className="col-6">
                                    <label htmlFor="jobtitle" className="form-label">Job Title</label>
                                    <input type="text" className="form-control" name="jobtitle" value={e.jobtitle} onChange={(e) => handleChange(e, index)} />
                                </div>

                                <div className="col-6">
                                    <label htmlFor="employer" className="form-label">Employer</label>
                                    <input type="text" className="form-control" name="employer" value={e.employer} onChange={(e) => handleChange(e, index)} />
                                </div>

                                <div className="col-6">
                                    <label htmlFor="city" className="form-label">City</label>
                                    <input type="text" className="form-control" name="city" value={e.city} onChange={(e) => handleChange(e, index)} />
                                </div>

                                <div className="col-6">
                                    <label htmlFor="state" className="form-label">State</label>
                                    <input type="text" className="form-control" name="state" value={e.state} onChange={(e) => handleChange(e, index)} />
                                </div>

                                <div className="col-6">
                                    <label htmlFor="startDate" className="form-label">Start Date</label>
                                    <input type="month" className="form-control" name="startDate" value={e.startDate} onChange={(e) => handleChange(e, index)} />
                                </div>

                                <div className="col-6">
                                    <label htmlFor="endDate" className="form-label">End Date</label>
                                    <input type="month" className="form-control" name="endDate" value={e.endDate} onChange={(e) => handleChange(e, index)} />
                                </div>

                                <div className="form-check mt-4 col offset-7">
                                    <label className="form-check-label" htmlFor="flexCheckDefault">Currently work here</label>
                                    <input className="form-check-input" type="checkbox" value="present" name="flexCheckDefault" onChange={(e) => handleChecked(e, index)}
                                    />
                                </div>

                                <div className="col-12">
                                    <label htmlFor="responsibilities" className="form-label">Responsiblities</label>
                                    <textarea className="form-control" name="responsibilities" value={e.responsibilities} onChange={(e) => handleChange(e, index)} />
                                </div>

                                <div className="col-12 text-end">
                                    <button type="submit" className="btn">Save</button>
                                    <button type="button" className="btn" onClick={() => handleDelete(index)}>Remove</button>
                                </div>

                            </form>
                        </div>)
                        :
                        <div className="drawer" key={index} onClick={() => toggleForm(index)}>
                            <p>{e.jobtitle}</p>
                        </div>

                ))
            }

            <div className="d-flex justify-content-end mt-5" style={{ gap: '32px' }}>
                <Link to="/skills">
                    <button className="btn btn-outline-secondary" type="submit">Back</button>
                </Link>
                <Link to="/education">
                    <button className="btn btn-primary" type="submit">Continue</button>
                </Link>
            </div>
            <button onClick={handleAddExp}>Add Another</button>

        </div>
    )
}

export default Experience