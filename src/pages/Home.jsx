import Header from "../component/Header/index";
import Content from "../component/Homecontent/index";
// import Footer from "../component/Footer";
import PictureGallery from "../component/Homecontent/PictureGallery/PictureGallery";



function Home(){
    return(
        <div className="main-layout main-container">
            <Header />
            <PictureGallery />
            <Content className="content-layout"/>
           
        </div>
    );
}
export default Home;