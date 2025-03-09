import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    const filePath = path.join(process.cwd(), 'emails.json');

    try {
        if (!fs.existsSync(filePath)) {
            return res.status(200).json([]); // Return empty if file doesn't exist
        }

        const data = fs.readFileSync(filePath, 'utf8');
        const emails = JSON.parse(data);

        res.status(200).json(emails);
    } catch (error) {
        res.status(500).json({ message: "Error reading emails.json", error: error.message });
    }
}
