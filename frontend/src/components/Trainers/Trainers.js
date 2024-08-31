/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Nav from '../Nav/Nav'; 
import Footer from '../Footer/Footer';
import Section1_Img1 from '../../assets/images/img-1.jpg';
import Section1_Img2 from '../../assets/images/img-2.jpg';
import Section1_Img3 from '../../assets/images/img-3.jpg';
import Section1_Img4 from '../../assets/images/img-4.jpg';
import Section1_Img5 from '../../assets/images/img-5.jpg';
import Section1_Img6 from '../../assets/images/img-6.jpg';
import Section1_Img7 from '../../assets/images/img-7.jpg';
import Section1_Img8 from '../../assets/images/img-8.jpg';

function Trainers() {
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
                                    <h1 class="display-4">Our Trainers</h1>
                                    <p class="py-3 fs-5">"Training for work, rest and play including Health & Social Care High quality, affordable training"</p>
                                    {/* <button type="button" class="btn btn-outline-light px-5 py-2 rounded-pill">View more</button> */}
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* section 1 end */}

                    {/* section 1 strat */}
                    <section>
                        <div class="container">
                            {/* row 1 strat */}
                            <div class="row g-4">
                                <div class="col-lg-3 col-md-6">
                                    <div class="card">
                                        <img src={Section1_Img1} class="card-img-top img-fluid" alt="Section1_Img1" />
                                        <div class="card-body">
                                            <h5 class="card-title">Devin Miller</h5>
                                            <p class="card-text">I'm Boys Group (Trainer).</p>
                                            <p class="card-text">Phone No: 9178635207</p>
                                            <p class="card-text">"I'm in a relationship with my gym. We're working out things."</p>
                                            <div class="text-center">
                                                <a href="#" class="text-dark link-underline-light"><i class="ri-facebook-circle-fill fs-2 me-3"></i></a>
                                                <a href="#" class="text-dark link-underline-light"><i class="ri-twitter-fill fs-2 me-3"></i></a>
                                                <a href="#" class="text-dark link-underline-light"><i class="ri-whatsapp-fill fs-2 me-3"></i></a>
                                                <a href="#" class="text-dark link-underline-light"><i class="ri-pinterest-line fs-2 me-3"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <div class="card">
                                        <img src={Section1_Img2} class="card-img-top img-fluid" alt="Section1_Img1" />
                                        <div class="card-body">
                                            <h5 class="card-title">Aaron James</h5>
                                            <p class="card-text">I'm Boys Group (Trainer).</p>
                                            <p class="card-text">Phone No: 8653215487</p>
                                            <p class="card-text">"I'm in a relationship with my gym. We're working out things."</p>
                                            <div class="text-center">
                                                <a href="#" class="text-dark link-underline-light"><i class="ri-facebook-circle-fill fs-2 me-3"></i></a>
                                                <a href="#" class="text-dark link-underline-light"><i class="ri-twitter-fill fs-2 me-3"></i></a>
                                                <a href="#" class="text-dark link-underline-light"><i class="ri-whatsapp-fill fs-2 me-3"></i></a>
                                                <a href="#" class="text-dark link-underline-light"><i class="ri-pinterest-line fs-2 me-3"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <div class="card">
                                        <img src={Section1_Img3} class="card-img-top img-fluid" alt="Section1_Img1" />
                                        <div class="card-body">
                                            <h5 class="card-title">Ethan Smith</h5>
                                            <p class="card-text">I'm Boys Group (Trainer).</p>
                                            <p class="card-text">Phone No: 7542515487</p>
                                            <p class="card-text">"I'm in a relationship with my gym. We're working out things."</p>
                                            <div class="text-center">
                                                <a href="#" class="text-dark link-underline-light"><i class="ri-facebook-circle-fill fs-2 me-3"></i></a>
                                                <a href="#" class="text-dark link-underline-light"><i class="ri-twitter-fill fs-2 me-3"></i></a>
                                                <a href="#" class="text-dark link-underline-light"><i class="ri-whatsapp-fill fs-2 me-3"></i></a>
                                                <a href="#" class="text-dark link-underline-light"><i class="ri-pinterest-line fs-2 me-3"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <div class="card">
                                        <img src={Section1_Img4} class="card-img-top img-fluid" alt="Section1_Img1" />
                                        <div class="card-body">
                                            <h5 class="card-title">Antonio Johnson</h5>
                                            <p class="card-text">I'm Boys Group (Trainer).</p>
                                            <p class="card-text">Phone No: 8637465852</p>
                                            <p class="card-text">"I'm in a relationship with my gym. We're working out things."</p>
                                            <div class="text-center">
                                                <a href="#" class="text-dark link-underline-light"><i class="ri-facebook-circle-fill fs-2 me-3"></i></a>
                                                <a href="#" class="text-dark link-underline-light"><i class="ri-twitter-fill fs-2 me-3"></i></a>
                                                <a href="#" class="text-dark link-underline-light"><i class="ri-whatsapp-fill fs-2 me-3"></i></a>
                                                <a href="#" class="text-dark link-underline-light"><i class="ri-pinterest-line fs-2 me-3"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* row 1 end */}
                            {/* row 2 strat */}
                            <div class="row g-4 mt-3">
                                <div class="col-lg-3 col-md-6">
                                    <div class="card">
                                        <img src={Section1_Img5} class="card-img-top img-fluid" alt="Section1_Img1" />
                                        <div class="card-body">
                                            <h5 class="card-title">Braden Lopez</h5>
                                            <p class="card-text">I'm Boys Group (Trainer).</p>
                                            <p class="card-text">Phone No: 8963214752</p>
                                            <p class="card-text">"I'm in a relationship with my gym. We're working out things."</p>
                                            <div class="text-center">
                                                <a href="#" class="text-dark link-underline-light"><i class="ri-facebook-circle-fill fs-2 me-3"></i></a>
                                                <a href="#" class="text-dark link-underline-light"><i class="ri-twitter-fill fs-2 me-3"></i></a>
                                                <a href="#" class="text-dark link-underline-light"><i class="ri-whatsapp-fill fs-2 me-3"></i></a>
                                                <a href="#" class="text-dark link-underline-light"><i class="ri-pinterest-line fs-2 me-3"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <div class="card">
                                        <img src={Section1_Img6} class="card-img-top img-fluid" alt="Section1_Img1" />
                                        <div class="card-body">
                                            <h5 class="card-title">Drizz Alen</h5>
                                            <p class="card-text">I'm Boys Group (Trainer).</p>
                                            <p class="card-text">Phone No: 7514862591</p>
                                            <p class="card-text">"I'm in a relationship with my gym. We're working out things."</p>
                                            <div class="text-center">
                                                <a href="#" class="text-dark link-underline-light"><i class="ri-facebook-circle-fill fs-2 me-3"></i></a>
                                                <a href="#" class="text-dark link-underline-light"><i class="ri-twitter-fill fs-2 me-3"></i></a>
                                                <a href="#" class="text-dark link-underline-light"><i class="ri-whatsapp-fill fs-2 me-3"></i></a>
                                                <a href="#" class="text-dark link-underline-light"><i class="ri-pinterest-line fs-2 me-3"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <div class="card">
                                        <img src={Section1_Img7} class="card-img-top img-fluid" alt="Section1_Img1" />
                                        <div class="card-body">
                                            <h5 class="card-title">Eoin Lee</h5>
                                            <p class="card-text">I'm Boys Group (Trainer).</p>
                                            <p class="card-text">Phone No: 7521489632</p>
                                            <p class="card-text">"I'm in a relationship with my gym. We're working out things."</p>
                                            <div class="text-center">
                                                <a href="#" class="text-dark link-underline-light"><i class="ri-facebook-circle-fill fs-2 me-3"></i></a>
                                                <a href="#" class="text-dark link-underline-light"><i class="ri-twitter-fill fs-2 me-3"></i></a>
                                                <a href="#" class="text-dark link-underline-light"><i class="ri-whatsapp-fill fs-2 me-3"></i></a>
                                                <a href="#" class="text-dark link-underline-light"><i class="ri-pinterest-line fs-2 me-3"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <div class="card">
                                        <img src={Section1_Img8} class="card-img-top img-fluid" alt="Section1_Img1" />
                                        <div class="card-body">
                                            <h5 class="card-title">Deigo Jackson</h5>
                                            <p class="card-text">I'm Boys Group (Trainer).</p>
                                            <p class="card-text">Phone No: 7412369852</p>
                                            <p class="card-text">"I'm in a relationship with my gym. We're working out things."</p>
                                            <div class="text-center">
                                                <a href="#" class="text-dark link-underline-light"><i class="ri-facebook-circle-fill fs-2 me-3"></i></a>
                                                <a href="#" class="text-dark link-underline-light"><i class="ri-twitter-fill fs-2 me-3"></i></a>
                                                <a href="#" class="text-dark link-underline-light"><i class="ri-whatsapp-fill fs-2 me-3"></i></a>
                                                <a href="#" class="text-dark link-underline-light"><i class="ri-pinterest-line fs-2 me-3"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* row 2 end */}

                        </div>
                    </section>
                    {/* section 1 end */}

                    <Footer />
                </div>
            </div>
        </>
    );
}
export default Trainers;