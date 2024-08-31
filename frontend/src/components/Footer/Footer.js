/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
function Footer() {
    return (
      <>
        <section>
          <div class="bg-secondary-subtle">
            <div class="container">
              <div class="row">
                <div class="col-lg-3">
                  <h5 class="nav-underline">SkyGymClub</h5>
                  <p class="mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro quas aspernatur numquam reprehenderit quae praesentium?</p>
                </div>
                <div class="col-lg-3">
                  <h5 class="nav-underline">Office</h5>
                  <p class="mt-5">AMAROLI ROAD VIP, SURAT,GUJARAT INDIA .</p>
                  <a href="#" class="text-dark">skygymclub@outlook.com</a>
                  <p class="mt-3">+91 0123698547</p>
                </div>
                <div class="col-lg-3">
                  <h5 class="nav-underline mb-2">Links</h5>
                  <div class="mb-3"><a href="#" class="text-dark link-underline-light">Home</a></div>
                  <div class="mb-3"><a href="#" class="text-dark link-underline-light">About</a></div>
                  <div class="mb-3"><a href="#" class="text-dark link-underline-light">Contect</a></div>
                  <div class="mb-3"><a href="#" class="text-dark link-underline-light">Trainers</a></div>
                  <div class="mb-3"><a href="#" class="text-dark link-underline-light">Photos</a></div>
                </div>
                <div class="col-lg-3">
                  <h5 class="nav-underline">News Letter</h5>
                  <div class="input-group mb-3">
                    <input type="email" class="form-control border border-danger" placeholder="Enter your Email Id" aria-label="Recipient's username" aria-describedby="button-addon2" required />
                    <button class="btn btn-outline-danger" type="button" id="button-addon2"><a href="/register" class="underlin text-danger">Submit</a></button>
                  </div>
                  <div class="d-flex">
                    <a href="#" class="text-dark link-underline-light"><i class="ri-facebook-circle-fill display-6 me-5"></i></a>
                    <a href="#" class="text-dark link-underline-light"><i class="ri-twitter-fill display-6 me-5"></i></a>
                    <a href="#" class="text-dark link-underline-light"><i class="ri-whatsapp-fill display-6 me-5"></i></a>
                    <a href="#" class="text-dark link-underline-light"><i class="ri-pinterest-line display-6 me-5"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <p class="text-center">Copyright © 2023 SkyGym Company. All rights reserved.</p>
          </div>
        </section>
      </>
    );
  }
  export default Footer;