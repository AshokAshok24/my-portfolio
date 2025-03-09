import React, { useState } from 'react'

const Contactus = () => {

    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess("");

        try {
            const response = await fetch("/api/sendMail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setSuccess(result.message);
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                setError(result.message);
            }
        } catch (err) {
            setError("Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <React.Fragment>
            <section id="contact" class="contact">
                <div class="container">

                    <div class="section-title">
                        <h2>Contact</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div class="row" data-aos="fade-in">

                        <div class="col-lg-5 d-flex align-items-stretch">
                            <div class="info">
                                <div class="address">
                                    <i class="bi bi-geo-alt"></i>
                                    <h4>Location:</h4>
                                    <p>Tirupur, TamilNadu</p>
                                </div>

                                <div class="email">
                                    <i class="bi bi-envelope"></i>
                                    <h4>Email:</h4>
                                    <p>ashok246445@gamail.com</p>
                                </div>

                                <div class="phone">
                                    <i class="bi bi-phone"></i>
                                    <h4>Call:</h4>
                                    <p>+91 8220315426</p>
                                </div>

                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d350.1712354661749!2d77.35332406224397!3d11.088209496452501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1724516605414!5m2!1sen!2sin" frameborder="0" style={{ border: "0px", width: "100%", height: "300px" }} allowfullscreen></iframe>
                                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d350.1712354661749!2d77.35332406224397!3d11.088209496452501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1724516605414!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                            </div>

                        </div>

                        <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
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
                                {loading && <div className="loading">Sending...</div>}
                                {error && <div className="error-message">{error}</div>}
                                {success && <div className="sent-message">{success}</div>}
                                <div className="text-center">
                                    <button type="submit" disabled={loading}>Send Message</button>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
            </section>
        </React.Fragment>
    )
}

export default Contactus