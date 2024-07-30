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
            <h2>Summary</h2>
            <p className="mb-5">Create a powerful statment that explains who you are and your role</p>
            <form onSubmit={handleSubmit}>
                <div className="row g-3 form">

                    <div className="col-12">
                        <textarea className="form-control" name="summary" onChange={handleChange} style={{minHeight: '150px'}} id="summary"/>
                    </div>
                </div>


                <div className="d-flex justify-content-between mt-5 mb-5" style={{ gap: '32px' }}>
                    <Link to="/">
                        <button className="btn btn-outline-secondary" type="submit">Back</button>
                    </Link>
                    <button className="btn btn-primary" type="submit">Add and continue</button>
                </div>
            </form>
        </div>
    )
}

export default Summ