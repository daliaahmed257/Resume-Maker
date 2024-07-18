import { useState } from "react"
import { Link } from "react-router-dom"

const Education = () => {

    const [education, setEducation] = useState([])

    const [newEducation, setNewEducation] = useState({
        name: '',
        location: '',
        degree: '',
        study: ''
    })

    return (
        <div className="container">
            <h2 className="text-center mb-5">Education</h2>
            <form className="row g-3">
                <div className="col-6">
                    <label htmlFor="name" className="form-label">School Name</label>
                    <input type="text" className="form-control" name="name" />
                </div>

                <div className="col-6">
                    <label htmlFor="location" className="form-label">School Location</label>
                    <input type="text" className="form-control" name="location" />
                </div>

                <div className="col-6">
                    <label htmlFor="degree" className="form-label">Degree</label>
                    <input type="text" className="form-control" name="degree" />
                </div>

                <div className="col-6">
                    <label htmlFor="study" className="form-label">Field of Study</label>
                    <input type="text" className="form-control" name="study" />
                </div>

                <div className="col-12">
                    <button type="submit" className="btn">+ Add</button>
                </div>

                <div className="d-flex justify-content-end mt-5" style={{ gap: '32px' }}>
                    <Link to="/experience">
                        <button className="btn btn-outline-secondary" type="submit">Back</button>
                    </Link>
                    <Link to="/education">
                        <button className="btn btn-primary" type="submit">Continue</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Education