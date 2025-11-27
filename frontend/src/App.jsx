import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./components/homepage/hero";
import AItools from "./components/homepage/aitools";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import HowItWorks from "./components/homepage/howitworks";
import TestimonialCarousel from "./components/homepage/carousel";
// import Login from "./components/auth/login";
// import Signup from "./components/auth/signup";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <AItools />
              <HowItWorks/>
              <TestimonialCarousel/>
            </>
          }
        />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
