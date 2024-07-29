import { useState } from "react"
import { Link } from "react-router-dom";

const Experience = ({ onFormSubmit, onDelete }) => {

    const formatDate = (date) => {
        return date.toISOString().substring(0, 7);
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
        onFormSubmit(experiences)
        setOpenIndex(null);
    };

    const handleDelete = (index) => {
        const updatedExperiences = experiences.filter((_, i) => i !== index);
        setExperiences(updatedExperiences);
        onDelete(index);
    };

    const toggleForm = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };


    return (
        <div className="container">
            <h2 className="mb-5">Experience</h2>
            <div className="row g-3">
                {
                    experiences.map((e, index) => (
                        openIndex === index ?
                            (<div className="drawer col-12" key={index}>
                                <form className="row form mt-2" onSubmit={handleSubmit}>
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
                                        <textarea className="form-control" name="responsibilities" value={e.responsibilities} onChange={(e) => handleChange(e, index)}/>
                                    </div>

                                    <div className="col-12 d-flex btn-delete fw-medium">
                                        <div className="d-flex align-items-center me-3" onClick={() => handleDelete(index)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z" /></svg>
                                            <button type="button" className="btn" >Remove</button>
                                        </div>
                                        <div className="d-flex align-items-center btn-save fw-medium">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" d="M4.5 14.5v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3m3 0h-12a1 1 0 0 1-1-1v-12a1 1 0 0 1 1-1h8.586a1 1 0 0 1 .707.293l3.414 3.414a1 1 0 0 1 .293.707V13.5a1 1 0 0 1-1 1Z" /></svg>
                                            <button type="submit" className="btn btn-save">Save</button>
                                        </div>
                                    </div>

                                </form>
                            </div>)
                            :
                            <div className="drawer-close col-12" key={index} onClick={() => toggleForm(index)}>
                                <h5>{e.jobtitle} - {e.employer}</h5>
                            </div>

                    ))
                }
            </div>

            <div className="d-flex justify-content-between mt-5">
                <Link to="/skills">
                    <button className="btn btn-outline-secondary" type="submit">Back</button>
                </Link>

                <div className="d-flex " style={{ gap: '32px' }}>
                    <button className="btn btn-add" onClick={handleAddExp}>Add Another</button>
                    <Link to="/education">
                        <button className="btn btn-primary" type="submit">Continue</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Experience