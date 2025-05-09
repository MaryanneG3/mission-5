# Z Energy

## Overview

Z Energy is a leading New Zealand fuel distributor, providing high-quality fuel and convenience services. This project aims to redesign the Z Energy station locator and fuel price information pages to enhance user experience, addressing issues faced by users like Alex, a road trip enthusiast. The application allows users to efficiently locate gas stations, filter services, compare fuel prices across different locations, and order products online.

## Features

- **Station Locator**: Easily find gas stations based on specific criteria such as service offerings.
- **Fuel Price Comparison**: View and compare fuel prices at different stations on a map.
- **Order Online**: Conveniently order products from Z Energy stations directly through the app.
- **Responsive Design**: Optimized for mobile devices to ensure easy navigation and selection without zooming.

## File Structure

### Backend (`z-fuel-backend`)

- **Controllers**: Handles the business logic and API requests.
- **Models**: Defines the database schema using Mongoose.
- **Routes**: Manages the API endpoints for station and price data.
- **Scripts**: Contains utility scripts, including data seeding.

### Frontend (`z-fuel-frontend`)

- **Components**: Reusable UI elements for building the interface.
- **Pages**: Contains the main pages like Price Comparison, Station Locator, and Order Online.
- **Layouts**: Defines the structure of the application.
- **Assets**: Stores images and other static resources.

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed.
- **MongoDB**: A running instance of MongoDB is required for data storage.
- **Docker (Optional)**: Docker is available on Maryanne's branch for containerized deployment.

---

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/MaryanneG3/mission-5.git
   ```

2. **Backend Setup**:

   - Navigate to `z-fuel-backend` and install dependencies:

     ```bash
     cd mission-5/z-fuel-backend
     npm install
     ```

3. **Frontend Setup**:

   - Navigate to `z-fuel-frontend` and install dependencies:

     ```bash
     cd ../z-fuel-frontend
     npm install
     ```

---

### Running the Application

1. **Start the backend server**:

   ```bash
   npm run dev
   ```

2. **Start the frontend development server**:

   ```bash
   npm run dev
   ```

   Alternatively, to run with Docker (available on Maryanne's branch `mary`):

   ```bash
   docker build -t z-fuel-backend .
   docker run -p 5002:5002 --name z-fuel-backend-container zfuel-backend
   ```

## Usage

- Access the application via the frontend server URL.
- Use the station locator to filter stations by services.
- Compare fuel prices directly on the map interface.
- Order products online through the "Order Online" page.

## Developers and Contributions

- **Developer 1**: Maryanne Galo ([https://github.com/MaryanneG3](https://github.com/MaryanneG3)) - Homepage, Order Online
- **Developer 2**: Rhya Johns ([https://github.com/rhyaj1](https://github.com/rhyaj1)) - Find Fuel Station, Share Tank
- **Developer 3**: Caitlin Sanderson ([https://github.com/caitlincode](https://github.com/caitlincode)) - Price Comparison

## Design Process

Utilized Figma for prototyping, focusing on intuitive navigation, enhanced filtering options, and improved visibility of fuel prices. The redesign addresses key pain points and aims to provide a seamless user experience.

## Docker Setup (Recommended)

> ⚠️ Docker setup is only available on the **`mary`** branch.

### Getting Started with Docker (Only on Maryanne's Branch : mary)

- Switch to the `mary` branch:

  ```bash
  git switch mary
  ```

- Build and run the app using Docker:

  ```bash
  docker-compose build
  docker-compose up
  ```

- Visit the app at [http://localhost:5173](http://localhost:5173)

### Cleanup Docker Resources

To clean up Docker containers:

```bash
docker ps        # Get container ID
docker stop <id> && docker rm <id>
```
