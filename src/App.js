import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Login from "./components/login/login";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
