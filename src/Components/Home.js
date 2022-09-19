import React from "react";
import NavBar from "./Navbar";

function Home(props) {
  console.log(`props`, props)
  return (
    <div>
      <NavBar />
      <h1>Home</h1>
    </div>
  );
}

export default Home;
