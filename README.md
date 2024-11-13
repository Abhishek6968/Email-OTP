# OTP Verification Project

## Overview
This is a simple OTP (One-Time Password) verification project that includes a frontend built with React and a backend using Node.js, Express, and MongoDB. The project sends OTPs to users via email using Nodemailer and verifies the OTPs entered by users.

## Features
- Send OTP to user’s email using Nodemailer.
- Save OTPs to a MongoDB database.
- Verify OTPs entered by the user.
- Simple React frontend for OTP input and validation.

## Tech Stack
### Frontend
- **React**: For building the user interface.
- **React Router**: For navigation.

### Backend
- **Node.js**: Server runtime environment.
- **Express.js**: Framework for building the REST API.
- **MongoDB**: Database to store OTPs.
- **Nodemailer**: For sending emails.
- **dotenv**: To manage environment variables.

## Prerequisites
- Node.js and npm installed.
- MongoDB set up locally or use MongoDB Atlas.
- An email account configured with an [App Password](https://myaccount.google.com/security-checkup) for sending emails via Nodemailer.

## Set up environment variables: Create a .env file in the root of the project with:
- Email_User=your-email@gmail.com
- Email_Passkey=your-app-password
- MONGO_URI=your-mongodb-connection-string



https://github.com/user-attachments/assets/62cdeb00-59ef-4d4e-aa79-b379cb167aee

