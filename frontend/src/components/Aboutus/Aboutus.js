/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Nav from '../Nav/Nav'; 
import Footer from '../Footer/Footer';

import Section_2Img_1 from '../../assets/images/about.jpg';  // Adjust the relative path as needed
import Section_2Img_2 from '../../assets/images/u-1.png';    // Adjust the relative path as needed
import Section_3Img_1 from '../../assets/images/t1.jpg';     // Adjust the relative path as needed
import Section_3Img_2 from '../../assets/images/t2.jpg';     // Adjust the relative path as needed
import Section_3Img_3 from '../../assets/images/t3.jpg';     // Adjust the relative path as needed


function About() {
  return (
    <>
      <div class="body">


        <div class="hero_beener">
          <Nav />
          {/* section 1 strat */}
          <section class="text-center text-light bg_margin">
            <div class="container">
              <div class="row">
                <div class="col">
                  <h1 class="display-4">About Us</h1>
                  <p class="pb-3 fs-5">In 1993, the first Fitness First club opened in Bournemouth in the South Of England. Over the next decade and a half, Fitness first was present in over 16 countries, including India making it a leader in the global fitness industry. In 2018, Fitness First India was acquired by cure.fit, India's largest chain of fitness centres that offers energetic group workouts and multiple workout formats to choose from.</p>
                  {/* <button type="button" class="btn btn-outline-light px-5 py-2 rounded-pill">View more</button> */}
                </div>
              </div>
            </div>
          </section>
          {/* section 1 end */}
        </div>
        {/* section 2 strat */}
        <section>
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <img src={Section_2Img_1} class="img-fluid rounded " alt="About" />
              </div>
              <div class="col-md-6">
                <h1 class="display-4">10 Years Experience</h1>
                <p class="fs-5 pt-3">SkyGym.com is amazing! Positively surprised by the efficiency
                  at responding and helping out!</p>
                <img src={Section_2Img_2} class="img-fluid rounded py-5 " alt="About" />
                <h1>Certified GYM Center</h1>
                <p class="fs-5 pt-3">" Our overall experience with SkyGym.com is a breeze. We love how easy it is to integrate this website with our current workflow while providing great fitness programs for our customers and save us time in the process. "</p>

                {/* <button type="button" class="btn btn-outline-dark px-5 py-2 mt-3 rounded-pill">Read More</button> */}
              </div>

            </div>
          </div>
        </section>
        {/* section 2 end */}

        {/* section 3 strat */}
        <section class="text-center">
          <div class="container">
            <div class="row">
              <div class="col">
                <h1 class="display-5 mb-3">Our Team </h1>
                <p class="mb-3">“Working with SkyGym.com and their team has been
                  an amazing experience and a dream <br />come true in terms of accomplishing a vision!”</p>
              </div>
            </div>
            <div class="row" >
              <div class="col-md-4">
                <div class="card mb-2">
                  <img src={Section_3Img_1} class="img-fluid rounded " alt="About" />
                  <div class="card-body">
                    <h4 class="card-title text-danger">Radadiya Avadh</h4>
                    <h5 class="card-title">Supervisor</h5>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card mb-2">
                  <img src={Section_3Img_2} class="img-fluid rounded " alt="About" />
                  <div class="card-body">
                    <h4 class="card-title text-danger">Radadiya Avadh</h4>
                    <h5 class="card-title">Supervisor</h5>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card mb-2">
                  <img src={Section_3Img_3} class="img-fluid rounded " alt="About" />
                  <div class="card-body">
                    <h4 class="card-title text-danger">Radadiya Avadh</h4>
                    <h5 class="card-title">Supervisor</h5>
                  </div>
                </div>
              </div>

            </div>
            <button type="button" class="btn btn-outline-dark rounded-pill px-5 py-2 mt-3">Read More</button>
          </div>

        </section>
        {/* section 3 end */}

        <Footer />

      </div>

    </>
  );
}
export default About;