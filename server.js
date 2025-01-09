const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const ExcelJS = require('exceljs');
const cron = require('node-cron');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/websiteData', { useNewUrlParser: true, useUnifiedTopology: true });

const visitorSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  type: String,
  url: String
});

const Visitor = mongoose.model('Visitor', visitorSchema);

// Track visitor
app.post('/track', async (req, res) => {
  const { type, url } = req.body;
  const visitor = new Visitor({ type, url });
  await visitor.save();

  // Send email
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password'
    }
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'eziqhyorj@emlpro.com',
    subject: 'New Visitor Data',
    text: `Type: ${type}, URL: ${url}, Timestamp: ${new Date()}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  res.sendStatus(200);
});

// Get visitor count for today
app.get('/visitorCount', async (req, res) => {
  const startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0);

  const count = await Visitor.countDocuments({ timestamp: { $gte: startOfDay } });
  res.json({ count });
});

// Generate and send monthly report
cron.schedule('0 0 1 * *', async () => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Monthly Report');

  worksheet.columns = [
    { header: 'Timestamp', key: 'timestamp', width: 30 },
    { header: 'Type', key: 'type', width: 10 },
    { header: 'URL', key: 'url', width: 50 }
  ];

  const visitors = await Visitor.find({});
  visitors.forEach(visitor => {
    worksheet.addRow(visitor);
  });

  const buffer = await workbook.xlsx.writeBuffer();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password'
    }
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'eziqhyorj@emlpro.com',
    subject: 'Monthly Visitor Report',
    text: 'Please find the attached monthly visitor report.',
    attachments: [
      {
        filename: 'Monthly_Report.xlsx',
        content: buffer
      }
    ]
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
