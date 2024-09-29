import { useState } from "react";
import { auth } from "./firebase";
import { signInWithEmailAndPassword, GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [notice, setNotice] = useState("");

    const loginWithGoogle = () =>{
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

    const loginWithUsernameAndPassword = async (e) => {
        e.preventDefault();
        setNotice("")
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/profile");
        } catch {
            setNotice("You entered a wrong username or password.");
        }
    }
    return (
        <div className="login-outer">
        <div className="container" id="container">
        <div className="form-container sign-in-container">
            <form action="#">
                <h1>Login</h1>
                <div className="social-container">
                    {/* <a href="#" className="social"><i className="fab fa-facebook-f"></i></a> */}
                    <a onClick={ (e) => loginWithGoogle()} className="social"><i className="fab fa-google-plus-g"></i></a>
                    {/* <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a> */}
                </div>
                <span>or use your account</span>
                <input type="email" placeholder="Email" value = { email } onChange = { (e) => setEmail(e.target.value) }/>
                <input type="password" placeholder="Password" value = { password } onChange = { (e) => setPassword(e.target.value) }/>
                { "" !== notice &&
                    <div className = "alert alert-warning" role = "alert">
                        { notice }    
                    </div>
                }
                <a style={{marginBottom: "0px"}} href="#">Forgot your password?</a>
                <p>Not a member?<a href="/signup"> Join now</a></p>
                <button onClick = {(e) => loginWithUsernameAndPassword(e)}>Sign In</button>
            </form>
        </div>
            
    </div>
    </div>
    )
}

export default Login