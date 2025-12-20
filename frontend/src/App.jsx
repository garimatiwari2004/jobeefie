import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./components/homepage/hero";
import AItools from "./components/homepage/aitools";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import HowItWorks from "./components/homepage/howitworks";
import TestimonialCarousel from "./components/homepage/carousel";

import ResumeUploader from "./components/ResumeUploader/ResumeUploader";

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
              <Footer/>
            </>
          }
        />
        <Route path="/resume" element={<ResumeUploader />} />
        
        
        
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
