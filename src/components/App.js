import React from "react";
import Home from "./Home";
import About from "./About";
import NavBar from "./Navbar";
import Login from "./Login";


function App(){
    return(
        <div>
        <NavBar />
        <Routes>
          <Route path="/"element={<Home />} />
          <Route path="/about"element={<About />} />
          <Route path="/login"element={<Login />} />
        </Routes>
        </div>
    )
}

export default App