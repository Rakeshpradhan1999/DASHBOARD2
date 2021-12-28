import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Swap from "./pages/Swap";
import Buy from "./pages/Buy";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/swap" element={<Swap />}></Route>
          <Route path="/buy" element={<Buy />}></Route>

          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
