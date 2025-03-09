import React, { useState } from 'react';
import notify from '@/utils/notify'; // ✅ Import notify utility
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contactus = () => {
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("/api/sendMail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                notify.success("Email sent successfully! 📩");
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                notify.error(`Error: ${result.message}`);
            }
        } catch (err) {
            notify.error("Something went wrong! ❌");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-title">
                    <h2>Contact</h2>
                    <p>Get in touch with us for any inquiries or collaborations.</p>
                </div>

                <div className="row">
                    <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                        <form onSubmit={handleSubmit} className="php-email-form">
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="name">Your Name</label>
                                    <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="email">Your Email</label>
                                    <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" name="subject" className="form-control" value={formData.subject} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea name="message" className="form-control" rows="5" value={formData.message} onChange={handleChange} required></textarea>
                            </div>
                            {loading && <div className="loading text-center">Sending...</div>}
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary" disabled={loading}>Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* ✅ Toast Container (Global Notifications) */}
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
        </section>
    );
};

export default Contactus;
