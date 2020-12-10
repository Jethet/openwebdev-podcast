import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";

const Header = () => {
  return (
    <div className="home-page">
      <section className="heroe-banner">
        <div className="container-header">
          <div className="header-navbar">
            <Navbar bg="light" expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#home" className="link" style={{ color: "black" }}>
                    La Bocacalle
                  </Nav.Link>
                  <Nav.Link href="#link" className="link" style={{ color: "black" }}>
                    Episodios
                  </Nav.Link>
                  <Nav.Link href="#home" className="link" style={{ color: "black" }}>
                    Proyectos
                  </Nav.Link>
                  <Nav.Link href="#link" className="link" style={{ color: "black" }}>
                    Pregúntanos
                  </Nav.Link>
                  <Nav.Link href="#home" className="link" style={{ color: "black" }}>
                    Donar
                  </Nav.Link>
                </Nav>
                <div className="header-iconos">
                  <a href="#">
                    <svg
                      width="42"
                      height="42"
                      viewBox="0 0 42 42"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="M20.9998 15.8331C19.978 15.8331 18.979 16.1361 18.1294 16.7038C17.2797 17.2715 16.6175 18.0784 16.2265 19.0225C15.8354 19.9666 15.7331 21.0054 15.9324 22.0077C16.1318 23.0099 16.6239 23.9305 17.3465 24.6531C18.069 25.3757 18.9896 25.8678 19.9919 26.0671C20.9941 26.2665 22.0329 26.1641 22.977 25.7731C23.9211 25.382 24.728 24.7198 25.2958 23.8702C25.8635 23.0205 26.1665 22.0216 26.1665 20.9997C26.1665 20.3212 26.0329 19.6494 25.7732 19.0225C25.5136 18.3957 25.133 17.8261 24.6532 17.3463C24.1735 16.8666 23.6039 16.486 22.977 16.2263C22.3502 15.9667 21.6783 15.8331 20.9998 15.8331ZM41.6873 10.7289C41.6764 9.12005 41.3801 7.52591 40.8123 6.02055C40.3942 4.91901 39.7472 3.91866 38.914 3.08552C38.0809 2.25238 37.0805 1.60538 35.979 1.18722C34.4736 0.619431 32.8795 0.323175 31.2707 0.312215C28.5832 0.166382 27.7915 0.166382 20.9998 0.166382C14.2082 0.166382 13.4165 0.166382 10.729 0.312215C9.12017 0.323175 7.52603 0.619431 6.02067 1.18722C4.91913 1.60538 3.91878 2.25238 3.08564 3.08552C2.2525 3.91866 1.6055 4.91901 1.18734 6.02055C0.619553 7.52591 0.323297 9.12005 0.312337 10.7289C0.166504 13.4164 0.166504 14.208 0.166504 20.9997C0.166504 27.7914 0.166504 28.5831 0.312337 31.2706C0.334762 32.8851 0.630617 34.4841 1.18734 35.9997C1.60365 37.0962 2.25011 38.0908 3.08317 38.9164C3.91274 39.7545 4.91523 40.4015 6.02067 40.8122C7.52603 41.38 9.12017 41.6763 10.729 41.6872C13.4165 41.8331 14.2082 41.8331 20.9998 41.8331C27.7915 41.8331 28.5832 41.8331 31.2707 41.6872C32.8795 41.6763 34.4736 41.38 35.979 40.8122C37.0844 40.4015 38.0869 39.7545 38.9165 38.9164C39.7496 38.0908 40.396 37.0962 40.8123 35.9997C41.3796 34.487 41.6758 32.8861 41.6873 31.2706C41.8332 28.5831 41.8332 27.7914 41.8332 20.9997C41.8332 14.208 41.8332 13.4164 41.6873 10.7289ZM36.3957 27.3955C36.3288 28.6812 36.0544 29.9475 35.5832 31.1456C35.1787 32.1449 34.5775 33.0527 33.8152 33.815C33.0528 34.5774 32.145 35.1786 31.1457 35.583C29.9363 36.028 28.6629 36.2743 27.3748 36.3122H14.6248C13.3368 36.2743 12.0634 36.028 10.854 35.583C9.82089 35.1991 8.88791 34.5866 8.12484 33.7914C7.36998 33.044 6.78701 32.1411 6.4165 31.1456C5.96975 29.9375 5.73027 28.6626 5.70817 27.3747V20.9997V14.6247C5.73027 13.3369 5.96975 12.062 6.4165 10.8539C6.80042 9.82076 7.41291 8.88779 8.20817 8.12472C8.95887 7.37393 9.8608 6.79158 10.854 6.41638C12.0634 5.97139 13.3368 5.72515 14.6248 5.68722H27.3748C28.6629 5.72515 29.9363 5.97139 31.1457 6.41638C32.1788 6.8003 33.1118 7.41279 33.8748 8.20805C34.6297 8.95544 35.2127 9.85833 35.5832 10.8539C36.0282 12.0632 36.2744 13.3367 36.3123 14.6247V20.9997C36.3123 25.2914 36.4582 25.7289 36.3957 27.3747V27.3955ZM33.0623 11.8955C32.8143 11.2226 32.4232 10.6115 31.9161 10.1043C31.4089 9.59718 30.7978 9.2061 30.1248 8.95805C29.2008 8.63776 28.2276 8.48261 27.2498 8.49972H14.7498C13.7671 8.50932 12.7937 8.6927 11.8748 9.04138C11.2122 9.27817 10.6075 9.65328 10.1011 10.1418C9.59458 10.6303 9.19788 11.221 8.93734 11.8747C8.63479 12.8026 8.48698 13.7739 8.49984 14.7497V27.2497C8.52049 28.2314 8.70352 29.2028 9.0415 30.1247C9.28955 30.7977 9.68064 31.4088 10.1878 31.9159C10.6949 32.4231 11.3061 32.8142 11.979 33.0622C12.8679 33.3891 13.8033 33.572 14.7498 33.6039H27.2498C28.2326 33.5943 29.2059 33.4109 30.1248 33.0622C30.7978 32.8142 31.4089 32.4231 31.9161 31.9159C32.4232 31.4088 32.8143 30.7977 33.0623 30.1247C33.411 29.2058 33.5944 28.2325 33.604 27.2497V20.9997V14.7497C33.6046 13.766 33.4209 12.7908 33.0623 11.8747V11.8955ZM20.9998 28.958C19.9557 28.9581 18.9218 28.7521 17.9575 28.3519C16.9931 27.9517 16.1171 27.3651 15.3798 26.6258C14.6425 25.8866 14.0582 25.0091 13.6606 24.0437C13.2629 23.0782 13.0596 22.0438 13.0623 20.9997C13.0623 19.4248 13.5296 17.8853 14.405 16.5761C15.2804 15.267 16.5246 14.2469 17.98 13.6452C19.4354 13.0435 21.0366 12.8871 22.5809 13.1959C24.1253 13.5046 25.5433 14.2647 26.6554 15.3797C27.7676 16.4948 28.5239 17.9148 28.8286 19.4599C29.1333 21.0051 28.9728 22.6059 28.3672 24.0597C27.7617 25.5135 26.7384 26.755 25.4269 27.627C24.1154 28.4989 22.5747 28.9622 20.9998 28.958ZM29.3332 14.6039C28.8726 14.5551 28.4464 14.3377 28.1367 13.9934C27.8269 13.6491 27.6555 13.2024 27.6555 12.7393C27.6555 12.2762 27.8269 11.8295 28.1367 11.4852C28.4464 11.1409 28.8726 10.9235 29.3332 10.8747C29.7937 10.9235 30.2199 11.1409 30.5297 11.4852C30.8394 11.8295 31.0108 12.2762 31.0108 12.7393C31.0108 13.2024 30.8394 13.6491 30.5297 13.9934C30.2199 14.3377 29.7937 14.5551 29.3332 14.6039Z"
                        fill="black"
                      />
                    </svg>
                  </a>

                  <a href="#">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="M35.5355 0.94397H4.46411C2.40161 0.94397 0.714111 2.63807 0.714111 4.70864V35.9016C0.714111 37.9722 2.40161 39.6663 4.46411 39.6663H35.5355C37.598 39.6663 39.2855 37.9722 39.2855 35.9016V4.70864C39.2855 2.63807 37.598 0.94397 35.5355 0.94397ZM23.5248 6.57484H25.2193V13.5083C25.2193 13.9095 25.2193 14.1176 25.2402 14.1725C25.2777 14.4371 25.4105 14.5721 25.6388 14.5721C25.9784 14.5721 26.3357 14.3075 26.7123 13.7729V6.57484H28.4127V15.9919H26.7123V14.9647C26.0357 15.744 25.3902 16.1226 24.7704 16.1226C24.2229 16.1226 23.8452 15.8994 23.6754 15.4218C23.5816 15.1373 23.5248 14.6861 23.5248 14.0214V6.57484ZM17.1032 9.64465C17.1032 8.63841 17.2741 7.90215 17.6357 7.42619C18.1061 6.78297 18.7682 6.46082 19.6146 6.46082C20.4664 6.46082 21.1275 6.78297 21.5984 7.42619C21.9541 7.90215 22.1261 8.63841 22.1261 9.64465V12.9441C22.1261 13.9444 21.9546 14.6866 21.5984 15.1594C21.1275 15.801 20.467 16.1231 19.6146 16.1231C18.7677 16.1231 18.1055 15.801 17.6357 15.1594C17.2741 14.6866 17.1032 13.9444 17.1032 12.9441V9.64465ZM12.5571 3.35443L13.8959 8.3168L15.1811 3.35443H17.0871L14.82 10.8741V15.9919H12.9343V10.8741C12.7639 9.96626 12.3868 8.63787 11.7825 6.87547C11.385 5.70305 10.9709 4.52524 10.5739 3.35443H12.5571ZM33.4318 34.0289C33.0921 35.5149 31.8804 36.611 30.4232 36.7739C26.9711 37.1611 23.4777 37.1633 19.9998 37.1612C16.5214 37.1633 13.028 37.1611 9.57643 36.7739C8.11875 36.6104 6.90911 35.5144 6.56893 34.0289C6.08411 31.9121 6.08411 29.6017 6.08411 27.4236C6.08411 25.2433 6.08947 22.9345 6.57483 20.8171C6.91447 19.3317 8.12465 18.2362 9.58233 18.0727C13.0339 17.6844 16.5273 17.6833 20.0057 17.6844C23.4836 17.6833 26.977 17.6844 30.4291 18.0727C31.8857 18.2362 33.097 19.3317 33.4371 20.8171C33.922 22.935 33.9193 25.2433 33.9193 27.4236C33.9198 29.6017 33.9171 31.9121 33.4318 34.0289Z"
                        fill="black"
                      />
                    </svg>
                  </a>
                </div>
              </Navbar.Collapse>
            </Navbar>
          </div>
          <div className="heroe-banner-text">
            <h1 className="hero-h1">
              Somos el PODCAST <br></br>
              <strong> La BOCACALLE</strong>
            </h1>
            <h4 className="hero-h4">Un espacio de expressión para personas sin hogar</h4>
            <div className="hero-button">
            <button className="form-button">
              <img src="/images/bar-chart.png" alt="" className="soundbars" />
              IR AL PODCAST
            </button>
          </div>
          </div>
          
          <nav className="new-navbar">
            <ul className="web-navbar">
              <li>
                <div className="first-link">
                  <a href="#">La Bocacalle</a>
                </div>
              </li>
              <li>
                <div className="rest-links">
                  <a href="#">EPISODIOS</a>
                  <a href="contact.asp">PROYECTO</a>
                  <a href="about.asp">PREGÚNTANOS</a>
                  <button classname="nav-button">DONAR</button>
                </div>
              </li>
            </ul>
          </nav>
          <div className="new-hero">
            <h1 className="first-header">SOMOS EL PODCAST</h1>
            <h1 className="second-header">LA BOCACALLE</h1>
            <h3>Un espacio de expresión para personas sin hogar</h3>
            <h4>Escucha los episodios a tu medida</h4>
          </div>
          <button className="button-form-header">
            <img src="/images/bar-chart.png" alt="" className="soundbars" />
            IR AL PODCAST
          </button>
        </div>
      </section>
    </div>
  );
};

export default Header;
