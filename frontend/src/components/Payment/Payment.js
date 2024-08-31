// Payment.js
import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

function Payment() {
    const navigate = useNavigate();

    const handleSelectPlan = (plan) => {
        // Ensure plan is a valid string and navigate with the state
        navigate("/register", { state: { plan } });
    };

    return (
        <>
            <Nav />
            <section className="mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1 className="text-center">OUR PRICE</h1>
                            <p className="color text-center">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                <br />
                                The point of using Lorem Ipsum is that
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        {[
                            { title: "BEGINNER PLAN", price: "₹3,000", features: ["limited access to the gym", "3 classes per week", "3 month memberships", "FREE drinking package", "Free personal training"] },
                            { title: "PREMIUM PLAN", price: "₹5,800", features: ["limited access to the gym.", "3 classes per week", "6 month memberships", "FREE drinking package", "1 Free personal training"] },
                            { title: "ULTIMATE PLAN", price: "₹10,500", features: ["Unlimited access to the gym", "3 classes per week", "One Year memberships", "FREE drinking package", "personal & zumba training"] }
                        ].map((plan, index) => (
                            <div className="col-lg-4 col-md-6" key={index}>
                                <div className="card mx-auto border-0 text-center align-items-center mt-5">
                                    <div className="card-body">
                                        <h5 className="opacity-78 text-danger mt-4">{plan.title}</h5>
                                        <h1 className="card-title mt-4"><b>{plan.price}</b></h1>
                                        <p className="card-text mt-4 fs-5">
                                            {plan.features.map((feature, idx) => (
                                                <React.Fragment key={idx}>
                                                    {feature}
                                                    <br />
                                                </React.Fragment>
                                            ))}
                                        </p>
                                        <button className="card-button btn rounded-pill px-5 py-3 text-white" type="button" onClick={() => handleSelectPlan(plan.title)}>
                                            SELECT PLAN
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Payment;
