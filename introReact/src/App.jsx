import "./App.css";
import HomePage from "./components/pages/HomePage/HomePage.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ArticlePage from "./components/pages/ArticlePage/ArticlePage.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Header } from "./components/Header/Header.jsx";
import ClientsPage from "./components/pages/ClientsPage/ClientsPage.jsx";

function App() {
    return (
      
      

      <BrowserRouter>
        <Header/>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles" element={<ArticlePage/>} />
          <Route path="/clients" element={<ClientsPage/>} />
 
        </Routes>

        <Footer/>
      
      </BrowserRouter>
    );
}

export default App;
