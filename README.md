# Kal-Hans Fullstack

A modern, full-stack web application for a skincare brand ("Kal-Hans"). This repository contains both the client-side single-page application and the server-side REST API in a monorepo structure.

## Overview

The project is divided into two distinct applications:

1.  **Client**: A responsive landing page and e-commerce interface built with React, TypeScript, and Tailwind CSS.
2.  **Server**: A backend API managing products, blog posts, and social media feeds using Node.js, Express, and MongoDB.

## Tech Stack

### Frontend (Client)
* **Framework**: React (via Vite)
* **Language**: TypeScript
* **Styling**: Tailwind CSS
* **Deployment**: Netlify

### Backend (Server)
* **Runtime**: Node.js
* **Framework**: Express.js
* **Database**: MongoDB (Atlas)
* **Language**: TypeScript
* **Deployment**: Render

## Project Structure

* `client/` - Contains the React frontend application.
* `server/` - Contains the Express backend API.

## Getting Started

To work on this project, you will need to run the client and server separately.

### Prerequisites
* Node.js (v16 or higher)
* npm or yarn
* A MongoDB Atlas connection string

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/OleksandrZadvornyi/kal-hans-fullstack.git
    cd kal-hans-fullstack
    ```

2.  **Setup the Server:**
    ```bash
    cd server
    npm install
    ```
    * Create a `.env` file in the `server/` directory.
    * Add your `MONGO_URI` and `PORT` variables (refer to `server/README.md` for details).
    * Start the server:
        ```bash
        npm run start
        ```

3.  **Setup the Client:**
    * Open a new terminal tab.
    * Navigate to the client folder:
        ```bash
        cd client
        npm install
        ```
    * Create a `.env` file in the `client/` directory.
    * Add the `VITE_API_URL` variable pointing to your local or hosted server.
    * Start the client:
        ```bash
        npm run dev
        ```

## Deployment

The application is deployed as two separate services:

* **Frontend**: [https://kal-hans.netlify.app/](https://kal-hans.netlify.app/)
* **Backend**: [https://kal-hans-backend.onrender.com](https://kal-hans-backend.onrender.com)

## License

This project is licensed under the MIT License.