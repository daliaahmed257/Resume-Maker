const PersonalDetails = () => {

    return (
        <div className="container personal">
            <h1 className="text-center">Personal Details</h1>
            <form className="row g-3">
                <div className="col-6">
                    <label htmlFor="first-name" className="form-label">First Name</label>
                    <input type="text" class="form-control" name="first-name" />
                </div>

                <div className="col-6">
                    <label htmlFor="last-name" className="form-label">Last Name</label>
                    <input type="text" class="form-control" name="last-name" />
                </div>

                <div className="col-12">
                    <label htmlFor="job-title" className="form-label">Job Title</label>
                    <input type="text" class="form-control" name="job-title" />
                </div>

                <div className="col-6">
                    <label htmlFor="adress-1" className="form-label">Address 1</label>
                    <input type="text" class="form-control" name="address-1" />
                </div>

                <div className="col-6">
                    <label htmlFor="adress-2" className="form-label">Address 2</label>
                    <input type="text" class="form-control" name="address-2" />
                </div>

                <div className="col-6">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="text" class="form-control" name="phone" />
                </div>

                <div className="col-6">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="email" class="form-control" name="email" />
                </div>

                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Add</button>
                </div>
            </form>
        </div>
    )
}

export default PersonalDetails