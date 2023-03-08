export default function Header (){
    return(
        <header className="header">
        <div className="container d-flex flex-column align-items-center">
          <img src="images/avatar.png" alt="" className="header__avatar"/>
          <h1 className="header__title">WEN YI JIE</h1>
          <hr className="divider--light"/>
        </div>
      </header>
    );
}