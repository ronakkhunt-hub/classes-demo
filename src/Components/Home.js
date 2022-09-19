import React from "react";
import NavBar from "./Navbar";

function Home(props) {
  console.log(`props`, props)
  return (
    <div>
      <NavBar />
      <div className="homeContainer">
        <h1>Home</h1>
      </div>
    </div>
  );
}

export default Home;
