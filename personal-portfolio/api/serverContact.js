const nodemailer = require('nodemailer');

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    if (req.method === 'POST') {
        const { firstName, lastName, email, phone, message } = req.body;

        const mail = {
            from: `${firstName} ${lastName}`,
            to: process.env.EMAIL_ADDRESS,
            subject: "Dewald's Website Form",
            html: `<p>Name: ${firstName} ${lastName}</p>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
                <p>Message: ${message}</p>
                `,
        };

        const contactEmail = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_ADDRESS,
            pass: process.env.EMAIL_PASS,
        },
        });

        try {
        await contactEmail.sendMail(mail);
        res.status(200).json({ code: 200, status: "Message Sent" });
        } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to send email" });
        }
    } else {
        res.status(405).end();
    }
};
