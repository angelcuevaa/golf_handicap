import { useState } from "react"
import "./NewRound.css"
//we want to save a user's round
//need course, hole count, front or back 9, tees, total score
const NewRound = () => {
    const [courseName, setCourseName] = useState("")
    const [roundType, setRoundType] = useState("")
    const [tees, setTees] = useState("")
    const [score, setScore] = useState("")



    const submitRecord = (e)=> {
        console.log(roundType)
        e.preventDefault()

    }
    return(
        <div className="newRound-outer">
            <form className="newRound-form">
                <div>
                    <p>Course name</p>
                    <input className="newRound-input" value={courseName} onChange={(e) => setCourseName(e.target.value)}/>
                </div>
                <div className="newRound-radio">
                    <p>Round Type</p>
                    <input type="radio" name="roundType" value="full" onChange={(e) => setRoundType(e.target.value)}/>
                    <label>18 holes</label>
                    <input type="radio" name="roundType" value="front" onChange={(e) => setRoundType(e.target.value)}/>
                    <label>Front 9</label>
                    <input type="radio" name="roundType" value="back" onChange={(e) => setRoundType(e.target.value)}/>
                    <label>Back 9</label>
                </div>
                <div className="newRound-tees">
                    <p>Tees</p>
                    <select className="newRound-select" value={tees} onChange={(e) => setTees(e.target.value)}>
                        <option>Red</option>
                        <option>White</option>
                        <option>Blue</option>
                    </select>
                </div>
                <div>
                    <p>Score</p>
                    <input className="newRound-input" value={score} onChange={(e) => setScore(e.target.value)}/>
                </div>
                <button onClick={(e) => submitRecord(e)}>Submit</button>
            </form>
        </div>
    )

}

export default NewRound