import { useState } from "react"
import { Link } from "react-router-dom"

const PersonalDetails = ({ onFormSubmit }) => {

    const [userDetails, setUserDetails] = useState({
        firstname: 'John',
        lastname: 'Doe',
        jobtitle: 'Accountant',
        city: 'Newark',
        state: 'NJ',
        phone: 'xxx-xxx-xxxx',
        email: 'johndoe@gmail.com',
    })

    const handleChange = (e) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value })
        console.log(userDetails)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(userDetails)
    }


    return (
        <div className="container">
            <div className="forms">
                <h1 className="text-center">Personal Details</h1>
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-6">
                        <label htmlFor="firstname" className="form-label">First Name</label>
                        <input type="text" className="form-control" name="firstname" onChange={handleChange} />
                    </div>

                    <div className="col-6">
                        <label htmlFor="lastname" className="form-label">Last Name</label>
                        <input type="text" className="form-control" name="lastname" onChange={handleChange} />
                    </div>

                    <div className="col-12">
                        <label htmlFor="jobtitle" className="form-label">Job Title</label>
                        <input type="text" className="form-control" name="jobtitle" onChange={handleChange} />
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
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input type="text" className="form-control" name="phone" onChange={handleChange} />
                    </div>

                    <div className="col-6">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input type="email" className="form-control" name="email" onChange={handleChange} />
                    </div>

                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Add</button>
                    </div>
                </form>
            </div>
            <div className="d-flex justify-content-end mt-2">
                <Link to="/summary">
                    <button className="btn btn-secondary">Next</button>
                </Link>
            </div>

        </div>
    )
}

export default PersonalDetails