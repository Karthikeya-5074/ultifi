 import React from "react";
 import '../components/footer.css';
 import img from '../images/logo.svg';
//  import '../components/footer.css';
import './footer.css';
 
function Foot() {
        return(
            <footer  id="footer">
            <div className="container-fluid">
              <div className="row d-flex align-items-center">
                <div className="col-lg-4 text-lg-left">
                  <nav className="footer-links text-lg-right text-lg-left pt-lg-0 px-5">
                    <img src={img} alt="" />
                  </nav>
                  {/*  <div class="credits">
                      Designed by <a href="#">Yug</a>
                   </div> */}
                </div>
                <div className="col-lg-4 text-lg-left">
                  <div className="copyright">
                    © Copyright <strong>General Motors, LLC</strong>.All rights reserved.
                  </div>
                </div>
                <div className="col-lg-4 text-lg-right">
                  <nav className="footer-links text-lg-right text-center pt-2 pt-lg-0">
                    <a href="#intro" className="scrollto">
                      Terms &amp; Conditions
                    </a>
                    <a href="#about" className="scrollto">
                      Help and FAQs
                    </a>
                    <a href="/">Feedback</a>
                  </nav>
                </div>
              </div>
            </div>
          </footer>
          
        );
}
export default Foot;