require('dotenv').config()
const nodemailer = require("nodemailer")
const mg = require("nodemailer-mailgun-transport")
const fs = require("fs")
const handlebars = require("handlebars")
const path = require("path")
const projectName = 'Quick Nurse Application';
const executionTimeStamp = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
const emailTemplateSource = fs.readFileSync(path.join(__dirname, "/template.hbs"), "utf8")
const readJson = JSON.parse(fs.readFileSync('reports/html-reports/master-report.json', 'utf8'))
const pmcLogo = 'https://i.imgur.com/pmlWcHP.png'

var ifEq = handlebars.registerHelper('ifEq', function(a, b, options) {
  if (a == b) return options.fn(this)
  else return options.inverse(this)
});

console.log(process.env.API_KEY, process.env.DOMAIN)

summaryStats = {
    "metrics": {
      "Suites": `${readJson.suites.length}`,
      "Passes": `${readJson.metrics.passed}`,
      "Failures": `${readJson.metrics.failed}`,
      "Skipped": `${readJson.metrics.skipped}`
    }
}

const mailgunAuth = {
  auth: {
    api_key: process.env.API_KEY,
    domain: process.env.DOMAIN
  }
}

const smtpTransport = nodemailer.createTransport(mg(mailgunAuth))

const template = handlebars.compile(emailTemplateSource)

const htmlToSend = template({message: `Please find attached the execution report of ${projectName} executed on ${executionTimeStamp}.`, 
                              array: summaryStats, 
                              newStats: readJson.suites,
                              ifEq,
                              pmcLogo
                            })

const mailOptions = {
  from: "PMC Automation Team<nimesh.bhatt@pmcretail.com>",
  to: ["nimesh.bhatt@pmcretail.com"],
  subject: `Automation Execution Report: ${projectName} (${executionTimeStamp}) with ${readJson.metrics.failed} failures`,
  // attachment: 'reports/master-report.pdf',
  html: htmlToSend,
  attachments: [{
    filename: 'master-report.pdf',
    path: path.join(__dirname, '../../reports/master-report.pdf'),
    contentType: 'application/pdf'
  }]
}
console.log("file path is: " + path.join(__dirname, '../../reports/master-report.pdf'));
// console.log(htmlToSend)

smtpTransport.sendMail(mailOptions, function(error, response) {
  if (error) {
    console.log(error)
  } else {
    console.log("Successfully sent email.")
  }
})