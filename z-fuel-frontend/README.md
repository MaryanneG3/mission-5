# Z-Fuel Frontend – Order Online Service

The Z-Fuel Backend service includes three main features, each developed by different team members.

1. The Online Order feature, created by Maryanne, allows users to browse and place orders for products through a seamless API integration with MongoDB.

2. The Fuel Map feature, developed by Rhya, provides users with access to an interactive map that shows fuel stations and their locations, enhancing the user experience for locating fuel services.

3. Lastly, the Fuel Prices feature, created by Caitlin, enables users to view real-time fuel prices, offering transparency and helping customers make informed decisions.

These features work together to provide a comprehensive service to users, leveraging MongoDB and Docker for smooth, containerized deployment.

---

## 🚀 Getting Started (Docker Only on Maryanne's Branch : mary)

> ⚠️ Docker setup is only available on the **`mary`** branch.

### 📁 Prerequisites

- Docker installed on your machine.
- Git installed to clone the repository.
- Backend server running at `http://localhost:5002` (see [backend README](../z-fuel-backend/README.md)).

---

### 🛠 Clone the Repository and Switch to Branch mary

```bash
git clone https://github.com/MaryanneG3/mission-5.git
cd z-fuel-frontend
git switch mary
```

---

### 🐳 Run the App Using Docker

```bash
docker build -t vite-dev .
docker run -p 5173:5173 --name vite-container vite-dev
```

Visit the app at:
**[http://localhost:5173](http://localhost:5173)**

---

## 🚀 Local Development

If you'd rather not use Docker, after cloning you can run the app manually:

```bash
cd z-fuel-frontend
git switch <desired branch name>
npm install
npm run dev
```

---

### 🔗 Dependencies

- React + Vite
- CSS Modules
- REST API connection to backend

---

### 👩‍💻 Last Updated by

Maryanne Galo – Full Stack Developer, Z-Fuel Project – Mission Ready
date: 05/09/2025
