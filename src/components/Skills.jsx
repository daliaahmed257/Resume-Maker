import { useState } from "react"
import { Link } from "react-router-dom"

const Skills = ({ onFormSubmit }) => {
    const [skills, setSkills] = useState('')
    const [newSkill, setNewSkill] = useState('')

    const handleChange = (e) => {
        setNewSkill([e.target.value])
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
            <h2 className="mb-5">Key Skills</h2>
            <form onSubmit={handleSubmit}>
                <div className="row g-3 form">
                    <div className="col-12">
                        <label htmlFor="skills" className="form-label">Skill</label>
                        <input type="text" className="form-control" name="skills" onChange={handleChange} />
                    </div>

                    <div className="col-12">
                        <button type="submit" className="btn btn-save fw-medium" onClick={handleAddSkill}>+ Add</button>
                    </div>
                </div>

                <div className="d-flex justify-content-between mt-5" style={{ gap: '32px' }}>
                    <Link to="/summary">
                        <button className="btn btn-outline-secondary" type="submit">Back</button>
                    </Link>
                    <Link to="/experience">
                        <button className="btn btn-primary" type="submit">Continue</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Skills