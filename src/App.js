import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./Components/User";
import Post from "./Components/Post";
import Home from "./Components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<User />} />
        <Route path="/posts" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
