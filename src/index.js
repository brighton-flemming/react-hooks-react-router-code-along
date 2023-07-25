import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/"element={<Home />} />
    <Route path="/about"element={<About />} />
    <Route path="/login"element={<Login />} />
  </Routes>
  </BrowserRouter>,
  document.getElementById("root")
)