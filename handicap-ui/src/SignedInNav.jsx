import "./Nav.css"
import { signOut } from "firebase/auth";
import { auth } from "./firebase";



const SignedInNav = () => {


    const logoutUser = async (e) => {
        e.preventDefault();
        await signOut(auth);
    }

    return (
        <nav style={{font: ""}} className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Menu Bar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            
            <li className="nav-item">
              <a className="nav-link" href="/profile">Profile</a>
            </li>
                  <li className="nav-item">
              <a className="nav-link" onClick={(e) => logoutUser(e)}>Signout</a>
            </li>
                  {/* <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li> */}
          </ul>
        </div>
      </nav>
    )
}

export default SignedInNav