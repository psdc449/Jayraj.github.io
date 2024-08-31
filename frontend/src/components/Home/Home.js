/* eslint-disable jsx-a11y/anchor-is-valid */
import Nav from '../Nav/Nav'; 
import Footer from '../Footer/Footer';
import Section_2Img_1 from '../../assets/images/about.jpg';
import Section_2Img_2 from '../../assets/images/u-1.png';
import Section_3Img_1 from '../../assets/images/t1.jpg';
import Section_3Img_2 from '../../assets/images/t2.jpg';
import Section_3Img_3 from '../../assets/images/t3.jpg';
// import { FaFacebook } from "react-icons/fa";



// import { FaDumbbell } from "react-icons/fa6";

function Home() {
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
                  <h5>FITNESS</h5>
                  <h1 class="pb-3">Are You Ready To Change Your Body And health</h1>
                  <button type="button" class="btn btn-outline-light px-5 py-2 rounded-pill"> <a href="/Gallery" class="underlin text-danger">View more</a></button>
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
                <img src={Section_2Img_2} class="img-fluid rounded py-4 " alt="About" />
                <h1>Certified GYM Center</h1>
                <p class="fs-5 pt-3">" Our overall experience with SkyGym.com is a breeze. We love how easy it is to integrate this website with our current workflow while providing great fitness programs for our customers and save us time in the process. "</p>

                <button type="button" class="btn btn-outline-dark px-5 py-2 mt-3 rounded-pill u"> <a href="/Aboutus" class="underlin text-danger">Read More</a></button>
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
                <h1 class="display-5 mb-4">Our Team</h1>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="card mb-2">
                  <img src={Section_3Img_1} class="img-fluid rounded " alt="About" />
                  <div class="card-body">
                    <h4 class="card-title text-danger">John Doe</h4>
                    <h5 class="card-title">Supervisor</h5>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card mb-2">
                  <img src={Section_3Img_2} class="img-fluid rounded " alt="About" />
                  <div class="card-body">
                    <h4 class="card-title text-danger">Emiliy Johnson</h4>
                    <h5 class="card-title">Supervisor</h5>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card mb-2">
                  <img src={Section_3Img_3} class="img-fluid rounded " alt="About" />
                  <div class="card-body">
                    <h4 class="card-title text-danger">Alex Standford</h4>
                    <h5 class="card-title">Supervisor</h5>
                  </div>
                </div>
              </div>

            </div>
            <button type="button" class="btn btn-outline-dark rounded-pill px-5 py-2 mt-4"><a href="/Trainers" class="text-danger underline">Read More</a></button>
          </div>

        </section>
        {/* section 3 end */}

        <Footer />

      </div>
    </>
  );
}
export default Home;