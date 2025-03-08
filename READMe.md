# Medicine E-Commerce Shop (Backend)

![Medicine E-Commerce Shop Logo](https://via.placeholder.com/150x50?text=Medicine+Shop+Logo)  
The **Medicine E-Commerce Shop Backend** is a RESTful API built with **Node.js**, **Express**, and **MongoDB**. It powers the frontend application by handling user authentication, medicine management, order processing, and more. This backend ensures secure and efficient data management for the Medicine E-Commerce Shop.

---

## 🚀 Live Deployment

- **Live**: [https://medicine-client-rust.vercel.app/](https://medicine-client-rust.vercel.app/)

---

## ✨ Key Features

## 🔑 Admin Credentials

For testing purposes, use the following admin credentials:

- **Email**: `ruhitbaidya01@gmail.com`
- **Password**: `123456`

---

### Authentication:

- **User Registration**: Register new users with email/phone and password.
- **User Login**: Secure login using JWT (JSON Web Tokens).
- **Password Hashing**: Passwords are hashed using bcrypt for security.

### Medicine Management:

- **Add Medicines**: Admins can add new medicines to the inventory.
- **Update Medicines**: Admins can update medicine details (name, price, stock, etc.).
- **Delete Medicines**: Admins can remove medicines from the inventory.
- **Search Medicines**: Users can search medicines by name, category, or symptoms.

### Order Management:

- **Place Orders**: Users can place orders with delivery details.
- **Order Tracking**: Users can track their orders (Pending, Processing, Shipped, Delivered).
- **Prescription Upload**: Users can upload prescriptions for prescription-based medicines.
- **Admin Order Management**: Admins can approve/reject orders and update order statuses.

### User Management:

- **View Users**: Admins can view all registered users.
- **View Orders**: Admins can view all orders placed by users.

### Security:

- **Role-Based Access Control**: Different permissions for admins and customers.
- **JWT Authentication**: Secure API endpoints using JSON Web Tokens.
- **Data Validation**: Input validation for all API requests.

---

## 🛠️ Tech Stack

- **Node.js**: Runtime environment for building the backend.
- **Express**: Framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing user data, medicines, and orders.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **JWT**: For secure user authentication.
- **bcryptjs**: For password hashing.
- **CORS**: For handling cross-origin requests.
- **Dotenv**: For managing environment variables.

---

## 🛠️ Setup Instructions

### Prerequisites:

- Node.js (v16 or higher)
- MongoDB Atlas or local MongoDB instance
- npm or yarn

### Steps:

1. **Clone the Repository**:
   ```bash
   frontend git clone https://github.com/ruhitbaidya/medicine-shop-client.git
   backend git clone https://github.com/ruhitbaidya/medicine-shop-server.git
   ```
