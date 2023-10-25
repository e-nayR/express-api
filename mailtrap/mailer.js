const path = require('path')

const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");

const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "0402186e6060af",
        pass: "35d332a1ce95ad"
    }
});

transport.use('compile', hbs({
    viewEngine: {
        defaultLayout: undefined,
        partialsDir: path.resolve(__dirname)
    },
    viewPath:path.resolve(__dirname),
    extName: '.html'

}))

module.exports = transport