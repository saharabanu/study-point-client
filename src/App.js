import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import AuthProvider from "./Pages/contexts/AuthProvider";
import CourseDetails from "./Pages/Home/CourseDetails/CourseDetails";
import Home from './Pages/Home/Home/Home';
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          
          <Route path="/home" element={<Home/>}/>
          
          <Route path="/courses/:courseId" element={<CourseDetails/>}/>
          
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
         
        </Routes>
      </BrowserRouter>
      </AuthProvider>


    </div>
  );
}

export default App;
