import Header from "../component/Header/index";

import Footer from "../component/Footer";
import ModelContent from "../component/3DART/index";



function Model(){
    return(
        <div className="main-layout main-container">
            <Header />
           <ModelContent />
            <Footer className="footer-layout"/>
        </div>
    );
}
export default Model;