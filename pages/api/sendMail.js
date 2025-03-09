const fs = require('fs')
const path = require('path')
const nodemailer = require('nodemailer');

export default async function handler(req, res) {

    console.log(`req.body :- ${JSON.stringify(req.body)}`);

    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { name, email, subject, message } = req.body;

    const to = email;

    if (!to || !subject || !message) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    console.log(`EMAIL_USER :- ${process.env.EMAIL_USER}`);
    console.log(`EMAIL_PASS :- ${process.env.EMAIL_PASS}`);

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, // Your email
            pass: process.env.EMAIL_PASS, // Your app password
        },
    });

    try {
        // Send email
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to,
            subject,
            text:message,
        });

        // Save email data to JSON file
        const logFilePath = path.join(process.cwd(), 'emails.json');
        const newEntry = { to, subject, message, date: new Date().toISOString() };

        let emailLogs = [];

        if (fs.existsSync(logFilePath)) {
            const fileData = fs.readFileSync(logFilePath, 'utf8');
            emailLogs = JSON.parse(fileData);
        }

        emailLogs.push(newEntry);
        fs.writeFileSync(logFilePath, JSON.stringify(emailLogs, null, 2));

        res.status(200).json({ message: 'Email sent and saved successfully' });

    } catch (error) {
        res.status(500).json({ message: 'Error sending email', error: error.message });
    }
}
