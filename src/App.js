import './App.css';
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Home from './component/Home';
import About from './component/About'
import Navbar from './component/Navbar'
// import Page404 from './component/Page404';
import User from './component/User'
import Filter from './component/Filter'

export default function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/*" element={<Page404/>}/>  */}

          <Route path="/*" element={<Navigate to="/" />} />

          <Route path="/contact" element={<h1>Contact</h1>} />
          <Route path="/user/:name" element={<User />} />
          <Route path="/filter" element={<Filter />}  />
        </Routes>
      </BrowserRouter>

    </div>
  );
}
