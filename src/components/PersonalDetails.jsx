import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const PersonalDetails = ({ onFormSubmit }) => {

    const navigate = useNavigate();

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
        navigate('/summary')
    }

    return (
        <div className="container">
            <div className="forms">
                <h2 className="text-center mb-5">Personal Details</h2>
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-6">
                        <label htmlFor="firstname" className="form-label">First Name</label>
                        <input type="text" className="form-control" name="firstname" onChange={handleChange} />
                    </div>

                    <div className="col-6">
                        <label htmlFor="lastname" className="form-label">Last Name</label>
                        <input type="text" className="form-control" name="lastname" onChange={handleChange} />
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

                    {/* <div className="col-12">
                        <button type="submit" className="btn btn-primary">Add</button>
                    </div> */}

                    <div className="d-flex justify-content-end mt-5">
                        <button className="btn btn-primary" type="submit">Continue</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default PersonalDetails