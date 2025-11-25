import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./components/homepage/hero";
import AItools from "./components/homepage/aitools";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";

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
            </>
          }
        />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
