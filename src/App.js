// import logo from './logo.svg';
import './App.css';
import React from 'react';
import img from './images/logo.svg';
import img1 from './images/night.svg';
import img2 from './images/Toggle.svg';
import img3 from './images/user.svg';
import light from './images/light.svg';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Nav } from 'react-bootstrap';
function App() {
  return (
    <div className="App">
     <header
  id="header"
  className="header fixed-top sticked"
  data-scrollto-offset={0}
>
  <div className="container-fluid d-flex align-items-center justify-content-between">
    <a
      href="index.html"
      className="logo d-flex align-items-center scrollto me-auto me-lg-0"
    >
      <img src={img} alt="" />
    </a>
    <nav id="navbar" className="navbar">
      <ul>
        <li>
          <a href="index.html" className="active">
            {/* Home */}
          </a>
        </li>
        {/* <li class="dropdown">
      <a href="#"><span>Dropdown</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
      <ul>
        <li><a href="#">Development</a></li>
        <li class="dropdown">
          <a href="#"><span>Deep Dropdown</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
          <ul>
            <li><a href="#">Deep Dropdown 1</a></li>
            <li><a href="#">Deep Dropdown 2</a></li>
            <li><a href="#">Deep Dropdown 3</a></li>
            <li><a href="#">Deep Dropdown 4</a></li>
            <li><a href="#">Deep Dropdown 5</a></li>
          </ul>
        </li>
        <li><a href="#">Dropdown 2</a></li>
        <li><a href="#">Dropdown 3</a></li>
        <li><a href="#">Dropdown 4</a></li>
      </ul>
    </li> */}
        {/* <li><a href="#">Documents</a></li> */}
        <li>
          <a href="/">App Gallery</a>
        </li>
        <li>
          <a href="/">FAQ</a>
        </li>
        <li>
          <a href="/">Contact Us</a>
        </li>
      </ul>
    </nav>
    <div></div>
    <div>
      <span className="pr-4">
        <img src={img3} alt=" "/>
        <a
          className="btn-getstarted scrollto login-text"
          href="index.html#about"
        >
          Login
        </a>
      </span>
      <img src={img1} alt=" " />
      <img src={img2}  alt=" "/>
      <img src={light} alt=" "/>
    </div>
  </div>
</header>

    </div>
  );
}

export default App;
