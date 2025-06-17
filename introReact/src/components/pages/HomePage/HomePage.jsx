import "./Homepage.css";
import { Header } from "../../Header/Header";
import { Banner } from "../../Banner/Banner";
import { Articles } from "../../Articles/Articles";
import { DualBanner } from "../../DualBanner/DualBanner";
import { Footer } from "../../Footer/Footer";



function HomePage() {
    return (
        <>
            <Header />

           

            <Banner
                image="images/Banner1.jpg"
                title="Comenzá tu camino universitario"
            />



            <Articles />

            <Banner image="images/Banner2.jpg" title="Más de 15 años juntos" />

            <DualBanner
                image="images/Banner3.jpg"
                title='"El conocimiento es el único bien que aumenta cuando se comparte" Aristóteles'
            />

            <Footer />
        </>
    );
}

export default HomePage;
