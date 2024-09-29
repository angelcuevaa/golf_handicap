import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import { auth } from "./firebase";
import { useState } from "react";
import SignedInNav from "./SignedInNav";

const Layout = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    auth.onAuthStateChanged(function(user){
        if (user){
            setIsLoggedIn(true)
            console.log(user)
        }
        else{
            setIsLoggedIn(false)
        }
    })
    return(
       <>
       {isLoggedIn ? (<SignedInNav/>) : <Nav/>}
        <Outlet />
    </>
            
    )
}

export default Layout