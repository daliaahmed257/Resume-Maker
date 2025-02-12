import { useState } from "react"
import { Link } from "react-router-dom"

const Education = ({ onFormSubmit }) => {

    const [education, setEducation] = useState([])

    const [newEducation, setNewEducation] = useState({
        name: '',
        location: '',
        degree: '',
        study: ''
    })

    const handleChange = (e) => {
        setNewEducation({ ...newEducation, [e.target.name]: e.target.value })
        console.log(newEducation)
    }

    const handleAddEducation = () => {
        setEducation([...education, newEducation])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onFormSubmit([education])
    }

    return (
        <div className="container">
            <h2 className="mb-5">Education</h2>
            <form onSubmit={handleSubmit}>
                <div className="row g-3 form">
                    <div className="col-6">
                        <label htmlFor="name" className="form-label">School Name</label>
                        <input type="text" className="form-control" name="name" id="name" autoComplete="school" onChange={handleChange} />
                    </div>

                    <div className="col-6">
                        <label htmlFor="location" className="form-label">School Location</label>
                        <input type="text" className="form-control" name="location" id="location" onChange={handleChange} />
                    </div>

                    <div className="col-6">
                        <label htmlFor="degree" className="form-label">Degree</label>
                        <input type="text" className="form-control" name="degree" id="degree" onChange={handleChange} />
                    </div>

                    <div className="col-6">
                        <label htmlFor="study" className="form-label">Field of Study</label>
                        <input type="text" className="form-control" name="study" id="study" onChange={handleChange} />
                    </div>

                    <div className="col-12">
                        <button type="submit" className="btn btn-save" onClick={handleAddEducation}>+ Add</button>
                    </div>
                </div>

                <div className="d-flex justify-content-between mt-5 mb-5" style={{ gap: '32px' }}>
                    <Link to="/experience">
                        <button className="btn btn-outline-secondary" type="submit">Back</button>
                    </Link>
                    <Link to="/download">
                        <button className="btn btn-primary" type="submit">Continue</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Education