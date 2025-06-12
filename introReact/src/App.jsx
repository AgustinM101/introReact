import "./App.css";
import { Header } from "./components/Header/Header";
import { AcademicOffer } from "./components/AcademicOffer/AcademicOffer";
import { Banner } from "./components/Banner/Banner";
import { Universities } from "./components/Universities/Universities";
import { DualBanner } from "./components/DualBanner/DualBanner";
import { Footer } from "./components/Footer/Footer";

function App() {
    return (
        <>
            <Header />

            <AcademicOffer />

            <Banner
                image="images/Banner1.jpg"
                title="Comenzá tu camino universitario"
            />

            <Universities />

            <Banner image="images/Banner2.jpg" title="Más de 15 años juntos" />

            <DualBanner
                image="images/Banner3.jpg"
                title='"El conocimiento es el único bien que aumenta cuando se comparte" Aristóteles'
            />

            <Footer />
        </>
    );
}

export default App;
