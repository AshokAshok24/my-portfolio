import React, { useEffect, useState } from 'react';

const AdminPage = () => {
    const [emails, setEmails] = useState([]);

    useEffect(() => {
        fetch('/api/getMail')
            .then(response => response.json())
            .then(data => setEmails(data))
            .catch(error => console.error("Error fetching emails:", error));
    }, []);

    return (
        <React.Fragment>
            <section id="admin" className="admin">
                <div className="container">
                    <div className="section-title">
                    <h2 className="text-primary">Admin Panel</h2>
                        <p className="lead text-muted">
                            View all received emails with subject, message, and timestamps.
                        </p>
                    </div>
 
                    <div className="card shadow-lg p-4">
                        <h3 className="text-center text-dark mb-3">Email Data</h3>

                        <div className="table-responsive">
                            <table className="table table-bordered table-striped table-hover text-center">
                                <thead className="table-primary">
                                    <tr>
                                        <th>#</th>
                                        <th>To</th>
                                        <th>Subject</th>
                                        <th>Message</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {emails.length > 0 ? (
                                        emails.map((email, index) => (
                                            <tr key={index}>
                                                <td className="fw-bold">{index + 1}</td>
                                                <td className="text-nowrap">{email.to}</td>
                                                <td className="fw-semibold">{email.subject}</td>
                                                <td className="text-start">{email.message}</td>
                                                <td className="text-nowrap">{new Date(email.date).toLocaleString()}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="5" className="text-center text-muted">No emails found</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default AdminPage;
