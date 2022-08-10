import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Dashboard from "./components/dashboard/dashboard";
function App() {
  return (
    <>
      <Toaster
          position="top-center"
          reverseOrder={false}
        />
      <Header />
      <div className="app-body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
      
    </>
  );
}

export default App;
