# Prescripto - Doctor Appointment System

Prescripto is a full-stack MERN application designed for seamless doctor appointment booking. It features role-based authentication, appointment management, and payment integration, catering to admins, doctors, and patients.

## 🚀 Live Demo

🔗 [Prescripto Live](https://prescripto-akash.vercel.app/)

## 📧 Contact

- **Author:** Akash Biswas
- **Email:** [akashrahul2006@gmail.com](mailto:akashrahul2006@gmail.com)
- **Phone:** +91 8101602709
- **LinkedIn:** [Akash Biswas](https://www.linkedin.com/in/akash-biswas-486435289/)

---

## 🛠 Tech Stack

### Frontend:

- **React.js** (JSX)
- **Tailwind CSS** (Highly optimized UI)
- **Axios** (API requests)
- **Context API** (State management)
- **TanStack Query** (Data fetching and caching)
- **React Router** (Client-side routing)
- **Highly performant reusable components**
- **Fully responsive design**

### Backend:

- **Node.js** (Backend server)
- **Express.js** (REST API framework)
- **JWT** (Authentication)
- **Bcrypt** (Password hashing)
- **Optimized and scalable architecture**

### Database:

- **MongoDB** (NoSQL database)
- **MongoDB Atlas** (Cloud storage)

### Deployment:

- **Frontend:** Vercel
- **Backend:** Render
- **Database:** MongoDB Cluster (AWS)

---

## 📌 Features

### 🔹 Authentication & Authorization

- Role-based authentication for Admin, Doctor, and Patient.
- Secure login and registration.
- JWT-based authentication for API protection.

### 🔹 Admin Panel

- **Login authentication** (`/api/admin/login`)
- **Manage doctors:** Add, update availability, and fetch doctor list.
- **Manage appointments:** Cancel and delete appointments.
- **View users:** Fetch all registered users.

### 🔹 Doctor Panel

- **Login authentication** (`/api/doctor-login`)
- **Manage profile:** View and update doctor profile.
- **Manage appointments:** View booked appointments and mark as completed.
- **View earnings.**

### 🔹 Patient Panel

- **Register/Login** (`/api/register`, `/api/login`)
- **Book an appointment** (`/api/book-appointment`)
- **View profile & update details** (`/api/user/profile`, `/api/user/profile/update`)
- **Cancel appointment** (`/api/user/appointment/cancel`)
- **Secure payments using Razorpay**

---

## ⚙️ Installation & Setup

### Prerequisites

Ensure you have the following installed:

- Node.js (v16+ recommended)
- MongoDB (Local or Atlas)
- Vercel CLI (for deployment)

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/Dev-akash77/prescripto.git
cd prescripto
```

### 2️⃣ Install Dependencies

#### Backend

```sh
cd backend
npm install
```

#### Frontend

```sh
cd frontend
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the backend root directory and add:

```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY=your_razorpay_key
```

### 4️⃣ Run the Project

#### Start Backend

```sh
cd backend
npm run dev
```

#### Start Frontend

```sh
cd frontend
npm start
```

---

## 📡 API Endpoints

### 🔹 Admin Routes

```javascript
POST   /api/admin/login                 // Admin login
POST   /api/admin/cancle-appointment    // Cancel appointment
POST   /api/admin/delete-appointment    // Delete appointment
GET    /api/admin/all-doctors           // Get all doctors
GET    /api/admin/all-appointment       // Get all appointments
GET    /api/admin/all-user              // Get all users
PUT    /api/admin/update-doctors-available // Update doctor availability
```

### 🔹 Doctor Routes

```javascript
POST   /api/admin/add-doctor            // Add doctor
GET    /api/all-doctors                 // Get all doctors
GET    /api/earning-doctor              // Get doctor earnings
GET    /api/apoointment-doctor          // Get doctor appointments
GET    /api/user-doctor                 // Get doctor’s patients
GET    /api/doctor-profile              // Get doctor profile
POST   /api/complete-doctor             // Complete an appointment
POST   /api/doctor/:id                  // Doctor pagination
POST   /api/doctor-login                // Doctor login
POST   /api/doctor-cancle-appointment   // Doctor cancels appointment
PUT    /api/doctor-update-profile       // Update doctor profile
```

### 🔹 Patient Routes

```javascript
POST   /api/register                    // Register new user
POST   /api/login                        // User login
POST   /api/book-appointment             // Book an appointment
GET    /api/user/appointment             // Get user appointments
GET    /api/user/profile                 // Get user profile data
PUT    /api/user/profile/update          // Update user profile
POST   /api/user/appointment/cancel      // Cancel an appointment
POST   /api/user/payment                 // Razorpay payment
POST   /api/user/verify-payment          // Verify Razorpay payment
```

---

## 🎯 Deployment

### Frontend Deployment on Vercel

```sh
cd frontend
vercel deploy
```

### Backend Deployment on Render

1. Push backend code to GitHub.
2. Go to [Render](https://render.com/), create a new web service.
3. Connect GitHub repo and deploy.

---

## 📜 License

This project is licensed under the **MIT License**.

---

## ⭐ Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

```sh
git checkout -b feature-branch
git commit -m "New Feature Added"
git push origin feature-branch
```

---

## 💡 Future Enhancements

- **Appointment Reminders** (Email & SMS notifications)
- **Doctor Review & Rating System**
- **AI-based Doctor Recommendation**

---

## 📌 Conclusion

Prescripto is a powerful doctor appointment booking system built with the latest MERN stack technologies, optimized for performance, scalability, and security.

🔹 **Professional UI** ✨\
🔹 **Role-Based Authentication** 🔒\
🔹 **Secure Payment Integration** 💳\
🔹 **Fast & Scalable Backend** ⚡

🚀 **Ready to revolutionize online doctor appointment booking? Try Prescripto today!**
