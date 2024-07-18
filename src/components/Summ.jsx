import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const Summ = ({ onFormSubmit }) => {

    const navigate = useNavigate()

    const [summary, setSummary] = useState({
        personalTitle: 'Accountant',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    })

    const handleChange = (e) => {
        setSummary({ ...summary, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(summary)
        navigate('/skills')
    }


    return (
        <div className="container">
            <h2 className="text-center">Summary</h2>
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-12">
                    <label htmlFor="personalTitle" className="form-label">Job Title</label>
                    <input type="text" className="form-control" name="personalTitle" onChange={handleChange} />
                </div>

                <div className="col-12">
                    <label htmlFor="summary" className="form-label">Summary</label>
                    <textarea className="form-control" name="summary" onChange={handleChange} />
                </div>

                <div className="d-flex justify-content-end mt-5" style={{ gap: '32px' }}>
                    <Link to="/">
                        <button className="btn btn-outline-secondary" type="submit">Back</button>
                    </Link>
                    <button className="btn btn-primary" type="submit">Continue</button>
                </div>
            </form>
        </div>
    )
}

export default Summ