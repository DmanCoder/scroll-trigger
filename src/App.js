import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import image1 from './img/img_greensock-logo.png';
import image2 from './img/img_project01-icon.svg';
import image3 from './img/img_project02-icon.svg';
import image4 from './img/img_project03-icon.svg';

import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // gsap.to('#intro img', {
    //   opacity: 0,
    //   scrollTrigger: {
    //     trigger: '#intro',
    //     start: 'top top',
    //     end: 'bottom center',
    //     scrub: true,
    //     markers: true,
    //   },
    // });

    // gsap.set('#project02', {
    //   scrollTrigger: {
    //     trigger: '#project02',
    //     start: 'top bottom-=150',
    //     end: 'bottom center-=150',
    //     toggleClass: 'active',
    //     markers: true,
    //   },
    // });

    // const parallaxTl = gsap.timeline({
    //   ease: 'none',
    //   scrollTrigger: {
    //     trigger: '.bcg-parallax',
    //     start: 'top bottom',
    //     scrub: true,
    //   },
    // });

    // parallaxTl
    //   .from('.content-wrapper', { duration: 1, autoAlpha: 0 })
    //   .from('.bcg', { duration: 2, y: '-30%' }, 0);

    // gsap.to(['#intro h1', '#intro p'], {
    //   autoAlpha: 0,
    //   ease: 'none',
    //   scrollTrigger: {
    //     trigger: '#intro .content',
    //     pin: true,
    //     scrub: true,
    //     markers: true,
    //     start: 'top top+=5%',
    //   },
    // });

    // const project = document.querySelectorAll('.project');
    // console.log(project);

    // project.forEach((el) => {
    //   gsap.from(el, {
    //     opacity: 0,
    //     yPercent: 5,
    //     scrollTrigger: {
    //       trigger: el.querySelector('img'),
    //       start: 'top bottom-=300',
    //       end: 'top center',
    //       toggleActions: 'play none none reverse',
    //       markers: true,
    //     },
    //   });
    // });

    // gsap.from('.project', {
    //   opacity: 0,
    //   yPercent: 5,
    //   scrollTrigger: {
    //     trigger: '.project img',
    //     start: 'top bottom-=300',
    //     end: 'top center',
    //     markers: true,
    //     toggleActions: 'play none none reverse',
    //   },
    // });

    const project = document.querySelectorAll('.project');
    console.log(project);

    project.forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        yPercent: 5,
        scrollTrigger: {
          trigger: el.querySelector('img'),
          start: 'top bottom-=300',
          end: 'top center',
          scrub: true,
          // onUpdate: ({ progress, direction, isActive, getVelocity }) =>
          //   console.log(progress, direction, isActive, getVelocity()),

          // onToggle: () => {
          //   console.log('toggle');
          // },
          toggleActions: 'play none none reverse',
          markers: true,
        },
      });
    });
  }, []);

  return (
    <div className="App">
      <div id="intro">
        <div className="content">
          <img src={image1} alt="AYYY" />
          <h1>The Basics</h1>
          <p>
            Short and sharp ScrollTrigger demos, teaching you the basics of
            GreenSock's ScrollTrigger API.
          </p>
        </div>
      </div>

      <div id="main" className="main-container">
        <div id="project01" className="project">
          <img src={image2} alt="AYYY" />
          <h2>Project Title</h2>
          <p className="info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed.
          </p>
        </div>

        <div className="bcg-parallax">
          <div className="bcg"></div>
          <div className="content-wrapper">
            <h1>Section With Parallax Effect</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
              dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.
              Sed.
            </p>
          </div>
        </div>

        <div id="project02" className="project">
          <img src={image3} alt="AYYY" />
          <h2>Project Title</h2>
          <p className="info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed.
          </p>
        </div>

        <div id="project03" className="project">
          <img src={image4} alt="AYYY" />
          <h2>Project Title</h2>
          <p className="info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed.
          </p>
        </div>
      </div>

      <div className="footer-container">
        <footer className="wrapper">
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
