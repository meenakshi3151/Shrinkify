# URL Shortener with Authentication

This project is a backend-based URL Shortener application built using Node.js, Express, MongoDB, and EJS for server-side rendering. The application allows users to register, log in, and generate shortened URLs. Authentication is handled through cookies, and middleware is used to restrict certain routes to logged-in users only. MongoDB is used to store user details and URL mappings, while EJS is responsible for rendering frontend pages such as login, signup, dashboard, and homepage.

The system includes modular components such as controllers, routes, middleware, models, and service utilities. It also integrates an authentication flow using cookies and custom middleware, ensuring that only authenticated users can create and manage short URLs. Environment variables are managed through a .env file, which contains the server port and MongoDB connection URI.

## Features

- User registration and login functionality  
- Cookie-based authentication  
- Middleware for route protection  
- URL shortening for authenticated users  
- EJS-based server-side rendering  
- MongoDB database integration  
- Modular and scalable backend architecture  

## How It Works

Users can visit the homepage sign up, or log in. After successful login, a cookie is set to maintain the session. Protected routes ensure only authenticated users can access URL creation and management features. Generated short URLs redirect users to the original long URL. All views are rendered using EJS templates.

## Requirements

- Node.js  
- MongoDB  
- npm or yarn  
- Environment variables for PORT and MONGO_URI  

## Setup Instructions

1. Install dependencies using npm install  
2. Create a .env file and add PORT and MONGO_URI  
3. Start the server using npm start  
4. Access the UI via EJS-rendered pages through the browser  

## Tech Stack

- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- EJS  
- Cookie-parser  
- dotenv  

This project demonstrates backend authentication, session handling, URL shortening logic, and server-side rendering in a clean and modular structure.
