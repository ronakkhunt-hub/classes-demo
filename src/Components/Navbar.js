import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase-config";
import '../App.css'
import { onAuthStateChanged } from "firebase/auth";

function NavBar() {
  const [userProfile, setUserProfile] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUserProfile(currentUser);
  });

  return (
    <header className="header">
      <nav className="navbar">
        <ul className="left">
          <li><Link to="/"><img src="/logo.png" /></Link></li>
          <li><Link className="links" to="/users">Users</Link></li>
          <li><Link className="links" to="/posts">Posts</Link></li>
        </ul>
        <ul className="right">
          <li>
            {userProfile ?
              <Link className="links" to="/logout">{userProfile.name}</Link>
              :
              <Link className="links" to="/login">Login</Link>
            }
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default NavBar;
