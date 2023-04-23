import Header from "../component/Header";
import Content from "../component/MainContent";
import Footer from "../component/Footer";

// import { feedImages } from './api';
// feedImages();


function Home(){
    return(
        <div className="main-layout main-container">
            <Header className="header-layout"/>
            <Content className="content-layout"/>
            <Footer className="footer-layout"/>
        </div>
    );
}
export default Home;