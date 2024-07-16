import { useState } from "react"
import { Link } from "react-router-dom"

const Skills = ({ onFormSubmit }) => {
    const [skills, setSkills] = useState('')
    const [newSkill, setNewSkill] = useState('')

    const handleChange = (e) => {
        setNewSkill([e.target.value] )
        console.log(skills)
    }

    const handleAddSkill = () => {
        setSkills([...skills, newSkill]);
        setNewSkill('');
        console.log(skills)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(skills)
    }


    return (
        <div className="container">
            <h2 className="text-center">Key Skills</h2>
            <p>Add skills that align with the job requirements. Show employers you're confident of the work you do!</p>
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-12">
                    <label htmlFor="skills" className="form-label">Skill</label>
                    <input type="text" className="form-control" name="skills" onChange={handleChange} />
                </div>

                    <div className="col-12">
                        <button type="submit" className="btn" onClick={handleAddSkill}>+ Add</button>
                    </div>

                <div className="d-flex justify-content-end mt-5" style={{ gap: '32px' }}>
                    <Link to="/summary">
                        <button className="btn btn-outline-secondary" type="submit">Back</button>
                    </Link>
                    <Link to="/summary">
                        <button className="btn btn-primary" type="submit">Continue</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Skills