import Header from "../component/Header/index";

import Footer from "../component/Footer";

import WebContent from "../component/WebContent/index";

function Web(){
    return(
        <div className="main-layout main-container">
            <Header />
           <WebContent />
            <Footer className="footer-layout"/>
        </div>
    );
}
export default Web;