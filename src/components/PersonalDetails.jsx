import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const PersonalDetails = ({ onFormSubmit }) => {

    const navigate = useNavigate();

    const [userDetails, setUserDetails] = useState({
        firstname: 'John',
        lastname: 'Doe',
        city: 'Newark',
        state: 'NJ',
        phone: 'xxx-xxx-xxxx',
        email: 'johndoe@gmail.com',
        link: 'https://www.linkedin.com/',
        linkName: 'LinkedIn',
        title: 'Accountant',
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
            <h2 className=" mb-5">Personal Details</h2>
            <form onSubmit={handleSubmit}>
                <div className="row g-3 form">
                    <div className="col-6">
                        <label htmlFor="firstname" className="form-label">First Name</label>
                        <input type="text" className="form-control" name="firstname" onChange={handleChange} />
                    </div>

                    <div className="col-6">
                        <label htmlFor="lastname" className="form-label">Last Name</label>
                        <input type="text" className="form-control" name="lastname" onChange={handleChange} />
                    </div>

                    <div className="col-12">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" name="title" onChange={handleChange} />
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

                    <div className="col-6">
                        <label htmlFor="link" className="form-label">Add Personal Link</label>
                        <input type="text" className="form-control" name="link" onChange={handleChange} />
                    </div>

                    <div className="col-6">
                        <label htmlFor="linkName" className="form-label">Name of Link</label>
                        <input type="text" className="form-control" name="linkName" onChange={handleChange} />
                    </div>

                </div>

                <div className="d-flex justify-content-end mt-5">
                    <button className="btn btn-primary" type="submit">Continue</button>
                </div>
            </form>

        </div>
    )
}

export default PersonalDetails