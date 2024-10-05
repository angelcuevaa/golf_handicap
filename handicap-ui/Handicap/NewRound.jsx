import { useState } from "react"
import "./NewRound.css"
import { doc, setDoc, updateDoc, arrayUnion, getDoc, collection, serverTimestamp, writeBatch } from "firebase/firestore"; 
import { db, auth } from "../src/firebase";

//we want to save a user's round
//need course, hole count, front or back 9, tees, total score
const NewRound = () => {
    const [courseName, setCourseName] = useState("")
    const [roundType, setRoundType] = useState("")
    const [tees, setTees] = useState("")
    const [score, setScore] = useState("")
    const [slope, setSlope] = useState("")
    const [rating, setRating] = useState("")



    const submitRecord = async (e)=> {
        e.preventDefault()

        try{
            const batch = writeBatch(db);

            //set timestamp in user collection
            const userRef = doc(db, 'users', auth.currentUser.uid);
            batch.set(userRef, {timestamp: serverTimestamp() });
            
            //create new document in scorecard collection with new scorecard details
            const scorecardRef = collection(userRef, "scorecards");
            const newDocRef = doc(scorecardRef);
            batch.set(newDocRef, {courseName: courseName, score: score, tees: tees, timestamp: serverTimestamp()});


            await batch.commit();
            console.log("success")
        }
        catch(e){
            console.log("Submitted another scorecard too fast!")
        }
            
        

        // updateDoc(userRef, {
        //     scores: arrayUnion({courseName: courseName, score: score, tees: tees })
        // });

        // setDoc(userRef, { scores:[{courseName: courseName, score: score, tees: tees}] }, { merge: true });

        // const docRef = doc(db, "users", auth.currentUser.uid);
        // const docSnap = await getDoc(docRef);
        // if (docSnap.exists()) {
        //     console.log("Document data:", docSnap.data());
        //   } else {
        //     // docSnap.data() will be undefined in this case
        //     console.log("No such document!");
        //   }

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
                    <input type="radio" name="roundType" value="nine" onChange={(e) => setRoundType(e.target.value)}/>
                    <label>9 holes</label>
                   
                </div>
                {/* <div className="newRound-tees">
                    <p>Tees</p>
                    <select className="newRound-select" value={tees} onChange={(e) => setTees(e.target.value)}>
                        <option>Red</option>
                        <option>White</option>
                        <option>Blue</option>
                    </select>
                </div> */}
                <div>
                    <p>Rating</p>
                    <input className="newRound-input" value={score} onChange={(e) => setRating(e.target.value)}/>
                </div>
                <div>
                    <p>Slope</p>
                    <input className="newRound-input" value={score} onChange={(e) => setSlope(e.target.value)}/>
                </div>
                <div>
                    <p>Score</p>
                    <input className="newRound-input" value={score} onChange={(e) => setScore(e.target.value)}/>
                </div>
                <button onClick={async (e) => await submitRecord(e)}>Submit</button>
            </form>
        </div>
    )

}

export default NewRound