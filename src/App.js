import './App.css';
import Home from './Pages/Home/Home/Home';
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}>
          </Route>
          <Route path="/home" element={<Home></Home>}>
          </Route>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
