import './App.css';
import Home from './pages/Home';
import SignIn from './pages/SignIn'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
