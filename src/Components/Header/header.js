import React from 'react';
import './header.css';

class Header extends React.Component {
  render() {
    return (
      <div >

        <nav class="navbar navbar-expand-md navbar-dark bg-white">
          
         <div class="navbar-toggler-right">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>


          <div class="collapse navbar-collapse flex-column " id="navbar">

            <ul class="navbar-nav  w-100  px-3">
              <li class="nav-item ">
                <a class="nav-link" href="#">Blue-light-filtering lenses for any pair<span><i class="fa -angle-right"></i></span></a>
              </li>


              <li class="nav-item center">
                <a class="nav-link" href="#">WARBY PARKER</a>
              </li>

              <li class="nav-item Right-align">
                <a class="nav-link" href="#"><span><i class="fa fa-search"></i></span></a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="#">Location</a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="#">Sign-in</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><span><i class="fa fa-shopping-cart"></i></span></a>
              </li>
            </ul>


            <ul class="navbar-nav justify-content-center w-100 bg-white px-3">
              <li class="nav-item ">
                <a class="nav-link" href="#">Home Try-On</a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="#">Eyeglasses</a>
              </li>

              <li class="nav-item ">
                <a class="nav-link" href="#">Sunglassess</a>
              </li>

              <li class="nav-item ">
                <a class="nav-link" href="#">Contacts</a>
              </li>


            </ul>


          </div>

        </nav>
      </div>
    )
  }
}

export default Header;