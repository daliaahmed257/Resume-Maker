import { useState } from "react"
import { Link } from "react-router-dom"

const Summ = ({ onFormSubmit }) => {

    const [summary, setSummary] = useState({
        jobtitle: 'Accountant',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    })

    const handleChange = (e) => {
        setSummary({ ...summary, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(summary)
    }


    return (
        <div className="container ">
            <div className="forms">
                <h1 className="text-center">Summary</h1>
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-12">
                        <label htmlFor="jobtitle" className="form-label">Job Title</label>
                        <input type="text" className="form-control" name="jobtitle" onChange={handleChange} />
                    </div>

                    <div className="col-12">
                        <label htmlFor="summary" className="form-label">Summary</label>
                        <textarea className="form-control" name="summary" onChange={handleChange} />
                    </div>

                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Add</button>
                    </div>
                </form>
            </div>
            <div className="d-flex justify-content-between mt-2">
                <Link to="/">
                    <button className="btn btn-outline-secondary">Back</button>
                </Link>
                <Link to="/summary">
                    <button className="btn btn-secondary">Next</button>
                </Link>
            </div>

        </div>
    )
}

export default Summ