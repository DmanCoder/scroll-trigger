import React from 'react';
import './App.css';

import image1 from './img/img_greensock-logo.png';
import image2 from './img/img_project01-icon.svg';
import image3 from './img/img_project02-icon.svg';
import image4 from './img/img_project03-icon.svg';

function App() {
  return (
    <div className="App">
      <div id="intro">
        <div class="content">
          <img src={image1} alt="AYYY" />
          <h1>The Basics</h1>
          <p>
            Short and sharp ScrollTrigger demos, teaching you the basics of
            GreenSock's ScrollTrigger API.
          </p>
        </div>
      </div>

      <div id="main" class="main-container">
        <div id="project01" class="project">
          <img src={image2} alt="AYYY" />
          <h2>Project Title</h2>
          <p class="info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed.
          </p>
        </div>

        <div class="bcg-parallax">
          <div class="bcg"></div>
          <div class="content-wrapper">
            <h1>Section With Parallax Effect</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
              dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.
              Sed.
            </p>
          </div>
        </div>

        <div id="project02" class="project">
          <img src={image3} alt="AYYY" />
          <h2>Project Title</h2>
          <p class="info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed.
          </p>
        </div>

        <div id="project03" class="project">
          <img src={image4} alt="AYYY" />
          <h2>Project Title</h2>
          <p class="info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed.
          </p>
        </div>
      </div>

      <div class="footer-container">
        <footer class="wrapper">
          <h3>
            2020 &copy;
            <a href="https://ihatetomatoes.net" target="_blank">
              Ihatetomatoes.net
            </a>
            |
            <a href="https://twitter.com/ihatetomatoes" target="_blank">
              @ihatetomatoes
            </a>
            | Animate responsibly!
          </h3>
        </footer>
      </div>
    </div>
  );
}

export default App;
