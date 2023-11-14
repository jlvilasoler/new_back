import nodemailer from 'nodemailer';

async function sendMail(res: any) {
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'kailyn.okon21@ethereal.email',
            pass: 'KJJ9QuyNcZ1csT92ep'
        }
    });

    // Datos del mensaje a enviar
    var message = {
        from: "sender@server.com",
        to: "kailyn.okon21@ethereal.email",
        subject: "PRUEBA EMAIL NUEVO SEND",
        text: "Esta es una prueba para la entrega de back-end",
        html: "<p>HTML version of the message</p>"
    };

    try {
        await transporter.sendMail(message);
        res.send("MENSAJE NUEVO ENVIADO DE FORMA EXITOSA!!!");
    } catch (error) {
        console.error("Error sending mail:", error);
        res.status(500).send("Error sending mail");
    }
}

export default sendMail;