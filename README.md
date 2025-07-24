# HealthHub - Workout Analytics Dashboard

HealthHub is a full-stack workout tracking and analytics application that allows users to log their workouts, track progress over time, and gain insights through visual analytics. Built with the MERN stack (MongoDB, Express.js, React, Node.js), the app ensures seamless user experience with authentication, dynamic charts, and performance summaries.

## Features

* User Authentication (Sign Up / Login)
* Add daily workouts with sets, reps, weights, and duration
* View dashboard with total workouts, calories burnt, and weekly stats
* View today's workout and workout history
* Protected routes with JWT-based authentication
* Modern UI with responsive design

## Tech Stack

### Frontend

* React.js
* Redux Toolkit
* Styled-components
* Axios

### Backend

* Node.js
* Express.js
* MongoDB & Mongoose
* JWT Authentication

## Project Structure

* `/client` - Frontend React app
* `/server` - Backend Express API
* `/controllers` - API business logic
* `/routes` - Express route handlers
* `/middleware` - JWT verification logic

## Deployment

* **Frontend:** [Vercel](https://workout-analytics-dashboard.vercel.app/)
* **Backend:** [Render](https://workout-analytics-dashboard.onrender.com)

## Usage

1. Clone the repository
2. Set up `.env` with your MongoDB URI and JWT secret in `/server`
3. Run backend with `npm start` in `/server`
4. Run frontend with `npm start` in `/client`
5. Sign up and start tracking your workouts!


