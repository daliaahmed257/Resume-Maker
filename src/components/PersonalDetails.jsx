import { useState } from "react"

const PersonalDetails = ({onFormSubmit}) => {

    const [userDetails, setUserDetails] = useState({
        firstname: '',
        lastname: '',
        jobtitle: '',
        address1: '',
        address2: '',
        phone: '',
        email: '',
    })

    const handleChange = (e) => {
        setUserDetails({...userDetails, [e.target.name]: e.target.value})
        console.log(userDetails)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(userDetails)
    }
    

    return (
        <div className="container personal">
            <h1 className="text-center">Personal Details</h1>
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-6">
                    <label htmlFor="firstname" className="form-label">First Name</label>
                    <input type="text" className="form-control" name="firstname" onChange={handleChange}/>
                </div>

                <div className="col-6">
                    <label htmlFor="lastname" className="form-label">Last Name</label>
                    <input type="text" className="form-control" name="lastname" onChange={handleChange}/>
                </div>

                <div className="col-12">
                    <label htmlFor="jobtitle" className="form-label">Job Title</label>
                    <input type="text" className="form-control" name="jobtitle" onChange={handleChange}/>
                </div>

                <div className="col-6">
                    <label htmlFor="adress1" className="form-label">Address 1</label>
                    <input type="text" className="form-control" name="address1" onChange={handleChange}/>
                </div>

                <div className="col-6">
                    <label htmlFor="adress2" className="form-label">Address 2</label>
                    <input type="text" className="form-control" name="address2" onChange={handleChange}/>
                </div>

                <div className="col-6">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="text" className="form-control" name="phone" onChange={handleChange}/>
                </div>

                <div className="col-6">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="email" className="form-control" name="email" onChange={handleChange}/>
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Add</button>
                </div>
            </form>
        </div>
    )
}

export default PersonalDetails