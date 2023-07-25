import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin:"0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "blue",
};

function Home() {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

function About() {
   return(

    <div>
      <h1>This is about you,Reader!</h1>
    </div>
   )
}

function Login() {

  return(
   <div>
    <h1>Login</h1>
   <form>
    <div>
      <input type="text" name="username" placeholder="Username"/>
    </div>
    <div>
      <input type="password" name="password" placeholder="Password" />
    </div>
    <input type="submit" value="Submit" />
   </form>
   </div>

  )
}

function App() {
  return <Home />;
}

function NavBar() {
  return (
    <div>
      <NavLink
      to="/"
      style={linkStyles}
      activeStyle={{
        background: "navyblue"
      }}
      >
        Home
      </NavLink>

      <NavLink
      to="/about"
      style={linkStyles}
      activeStyle={{
        background: "navyblue"
      }}
      >
        About
      </NavLink>

      <NavLink
      to="/login"
      style={linkStyles}
      activeStyle={{
        background: "navyblue"
      }}
      >
        Login
      </NavLink>

      <h1>Navigations</h1>
    </div>
  )

}

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(
  <BrowserRouter>
  <NavBar />
  <Routes>
    <Route path="/"element={<Home />} />
    <Route path="/about"element={<About />} />
    <Route path="/login"element={<Login />} />
  </Routes>
  </BrowserRouter>,
  document.getElementById("root")
)