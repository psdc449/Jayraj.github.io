/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
function Nav() {
    return (
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand pe-4 text-light" href="#">Sky Gym !</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav-underline">
              <li class="nav-item">
                <a class="nav-link me-5 text-light" href="/Home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link me-5 text-light" href="/Aboutus">About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link me-5 text-light" href="/Trainers">Trainers</a>
              </li>
              <li class="nav-item">
                <a class="nav-link me-5 text-light" href="/Gallery">Gallery</a>
              </li>
              <li class="nav-item">
                <a class="nav-link me-5 text-light" href="/Payment">Payment</a>
              </li>
            </ul>
            <div class="d-flex">
              <button type="button" class="btn btn-outline-light rounded-pill py-2 px-5"> <a class="underlin text-danger"href="/" >Sign Out</a></button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
  export default Nav;