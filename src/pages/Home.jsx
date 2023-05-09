import Header from "../component/Header/index";
import Content from "../component/Homecontent/index";
import Footer from "../component/Footer";



function Home(){
    return(
        <div className="main-layout main-container">
            <Header />
            <Content className="content-layout"/>
            <Footer className="footer-layout"/>
        </div>
    );
}
export default Home;