import Header from "../../component/Header/index";

import Footer from "../../component/Footer";
import GraphicContent from "../../component/GraphicContent/GraphicContent";




function Graphic(){
    return(
        <div className="main-layout main-container">
            <Header />
           <GraphicContent />
            <Footer className="footer-layout"/>
        </div>
    );
}
export default Graphic;