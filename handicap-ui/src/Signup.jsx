import { useState } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [notice, setNotice] = useState("");

    const loginWithGoogle = () =>{
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider).then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(credential)
            navigate("/profile"); 
            // IdP data available using getAdditionalUserInfo(result)
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
    }

    const signupWithUsernameAndPassword = async (e) => {
        e.preventDefault();

        if (password === confirmPassword) {
            try {
                await createUserWithEmailAndPassword(auth, email, password);
                navigate("/");
            } catch {
                setNotice("Sorry, something went wrong. Please try again.");
            }     
        } else {
            setNotice("Passwords don't match. Please try again.");
        }
    };

    return(
        <div className="login-outer">
        <div className="signup-container" id="container">
        <div className="form-container sign-in-container">
            <form action="#">
                <h1>Sign Up</h1>
                <div className="social-container">
                    {/* <a href="#" className="social"><i className="fab fa-facebook-f"></i></a> */}
                    <a onClick={ (e) => loginWithGoogle()} className="social"><i className="fab fa-google-plus-g"></i></a>
                    {/* <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a> */}
                </div>
                <span>or create an account</span>
                <input type="email" placeholder="Email" value = { email } onChange = { (e) => setEmail(e.target.value) }/>
                <input type="password" placeholder="Password" value = { password } onChange = { (e) => setPassword(e.target.value) }/>
                <input type="password" placeholder="Confirm Password" value = { confirmPassword } onChange = { (e) => setConfirmPassword(e.target.value) }/>

                { "" !== notice &&
                    <div className = "alert alert-warning" role = "alert">
                        { notice }    
                    </div>
                }
                <p>Have an account? <a href="/login"> Login</a></p>
                <button onClick = {(e) => signupWithUsernameAndPassword(e)}>Create Account</button>
            </form>
        </div>
        </div>
        </div>
       
    )
}

export default Signup

 {/* <div className = "container">
            <div className = "row justify-content-center">
                <form className = "col-md-4 mt-3 pt-3 pb-3">
                    { "" !== notice &&
                        <div className = "alert alert-warning" role = "alert">
                            { notice }    
                        </div>
                    }
                    <div className = "form-floating mb-3">
                        <input id = "signupEmail" type = "email" className = "form-control" aria-describedby = "emailHelp" placeholder = "name@example.com" value = { email } onChange = { (e) => setEmail(e.target.value) }></input>
                        <label htmlFor = "signupEmail" className = "form-label">Enter an email address for your username</label>
                    </div>
                    <div className = "form-floating mb-3">
                        <input id = "signupPassword" type = "password" className = "form-control" placeholder = "Password" value = { password } onChange = { (e) => setPassword(e.target.value) }></input>
                        <label htmlFor = "signupPassword" className = "form-label">Password</label>
                    </div>
                    <div className = "form-floating mb-3">
                        <input id = "confirmPassword" type = "password" className = "form-control" placeholder = "Confirm Password" value = { confirmPassword } onChange = { (e) => setConfirmPassword(e.target.value) }></input>
                        <label htmlFor = "confirmPassword" className = "form-label">Confirm Password</label>
                    </div>                    
                    <div className = "d-grid">
                        <button type = "submit" className = "btn btn-primary pt-3 pb-3" onClick = {(e) => signupWithUsernameAndPassword(e)}>Signup</button>
                    </div>
                    <div className = "mt-3 text-center">
                        <span>Go back to login? <Link to = "/">Click here.</Link></span>
                    </div>                    
                </form>
            </div>
        </div> */}