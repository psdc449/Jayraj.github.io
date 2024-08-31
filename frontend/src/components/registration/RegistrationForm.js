// RegistrationForm.js
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const RegistrationForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    console.log("Location state:", location.state);

    const { plan } = location.state || {};

    const [formData, setFormData] = useState({
        username: "",
        mobileno: "",
        address: "",
        paymentMethod: "",
        joiningDate: "",
        plan: plan || "",
    });

    if (!plan) {
        navigate("/"); // Redirect to home if no plan is selected
        return null;
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/payments/register", formData);
            alert("User registered successfully");
            navigate("/Home"); // Navigate back to home page
        } catch (error) {
            console.error("There was an error registering the user!", error);
        }
    };

    return (
        <div className="container mt-5">
            <div className="card mx-auto shadow-lg p-4" style={{ maxWidth: '500px' }}>
                <h2 className="text-center mb-4">Register for {plan}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input 
                            type="text" 
                            name="username" 
                            className="form-control" 
                            placeholder="Enter your username" 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Mobile Number</label>
                        <input 
                            type="text" 
                            name="mobileno" 
                            className="form-control" 
                            placeholder="Enter your mobile number" 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Address</label>
                        <input 
                            type="text" 
                            name="address" 
                            className="form-control" 
                            placeholder="Enter your address" 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Payment Method</label>
                        <select 
                            name="paymentMethod" 
                            className="form-select" 
                            onChange={handleChange} 
                            required
                        >
                            <option value="">Choose Payment Method</option>
                            <option value="Credit Card">Credit Card</option>
                            <option value="Debit Card">Debit Card</option>
                            <option value="Net Banking">Net Banking</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Joining Date</label>
                        <input 
                            type="date" 
                            name="joiningDate" 
                            className="form-control" 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary me-2">Submit</button>
                        <button type="button" className="btn btn-secondary" onClick={() => navigate("/Payment")}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;
