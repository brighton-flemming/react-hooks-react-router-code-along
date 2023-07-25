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

function App() {
  return <Home />;
}

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/"element={<Home />} />
  </Routes>
  </BrowserRouter>,
  document.getElementById("root")
)