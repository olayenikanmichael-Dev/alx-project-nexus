
# 🏡 Habita — ALX Project Nexus  
*A Full-Stack Property Listing Platform (Airbnb Clone)*

Habita is a modern **full-stack property listing web application** built as part of the **ALX Project Nexus**. Inspired by Airbnb, Habita allows users to discover, list, and manage properties seamlessly. The name **Habita** means **“Home”**, reflecting the platform’s goal of helping people find places where they truly belong.

---

## 🚀 Project Overview

Habita is designed with **scalability, security, and performance** in mind. It combines a modern frontend with a powerful backend and containerized deployment to deliver a smooth user experience and production-grade architecture.

---

## 🛠 Tech Stack

### Frontend
- **Next.js (TypeScript)**
- **Tailwind CSS**
- React Query / Axios
- Responsive & accessible UI

### Backend
- **Django (Python)**
- Django REST Framework (DRF)
- PostgreSQL
- JWT Authentication

### DevOps & Infrastructure
- **Docker & Docker Compose**
- Nginx (reverse proxy)
- Environment-based configuration

---

## ✨ Key Features

- 🔐 Secure authentication & authorization
- 🏠 Property listing creation & management
- 🔎 Advanced property search & filtering
- ❤️ Favorites & saved listings
- 🗓 Booking system (planned)
- 📊 Admin dashboard
- 🌍 Responsive, mobile-first UI

---

## 🏗 Architecture

```

habita/
│
├── frontend/   → Next.js + TypeScript + Tailwind CSS
├── backend/    → Django + DRF API
├── docker/     → Docker & Nginx configs
└── docker-compose.yml

````

---

## ⚙️ Installation & Setup

### Prerequisites
- Docker & Docker Compose
- Node.js (18+)
- Python (3.10+)

---

### 🔹 Clone Repository
```bash
git clone https://github.com/olayenikanmichael-Dev/alx-project-nexus.git
cd alx-project-nexus
````

---

### 🔹 Environment Variables

Create `.env` files inside both **frontend** and **backend** directories.

#### Backend (.env)

```env
DEBUG=True
SECRET_KEY=your_secret_key
DATABASE_URL=postgres://user:password@db:5432/habita
```

#### Frontend (.env.local)

```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

---

### 🔹 Run With Docker

```bash
docker-compose up --build
```

**Frontend:** [http://localhost:3000](http://localhost:3000)
**Backend API:** [http://localhost:8000/api](http://localhost:8000/api)

---

## 🧪 Testing

```bash
# Backend tests
docker-compose exec backend pytest

# Frontend tests
npm run test
```

---

## 📌 Roadmap

* [ ] Booking & reservation system
* [ ] Payment integration (Stripe / Paystack)
* [ ] Real-time messaging
* [ ] Notifications system
* [ ] CI/CD pipeline

---

## 👨‍💻 Author

**Olayenikan Michael**
Full-Stack Software Engineer | Blockchain Developer

* Portfolio: [https://your-portfolio-link.com](https://your-portfolio-link.com)
* GitHub: [https://github.com/your-username](https://github.com/your-username)
* LinkedIn: [https://linkedin.com/in/your-profile](https://linkedin.com/in/your-profile)

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 🌟 Acknowledgments

* ALX Africa Software Engineering Program
* Airbnb (for inspiration)
* Open-source community



`
