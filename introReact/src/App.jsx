import "./App.css";
import HomePage from "./components/pages/HomePage/HomePage.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import OfferPage from "./components/pages/OfferPage/OfferPage.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import UniversityPage from "./components/pages/UniversityPage/UniversityPage.jsx";

function App() {
    return (
      
      

      <BrowserRouter>
        <Header/>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ofertas/:id" element={<OfferPage/>} />
          <Route path="/universidades" element={<UniversityPage/>} />
 
        </Routes>

        <Footer/>
      
      </BrowserRouter>
    );
}

export default App;
