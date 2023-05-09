import Header from "../component/Header/index";

import Footer from "../component/Footer";



function Model(){
    return(
        <div className="main-layout main-container">
            <Header />
           
            <Footer className="footer-layout"/>
        </div>
    );
}
export default Model;