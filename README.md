# User List Management App 🧑‍💼

A React-based user management system built using **Ant Design** for UI components and styled with **Tailwind CSS**/**Bootstrap**. Developed as part of the **Front-End Developer Assessment** by Leo Club of Kathmandu Marigold under the CareerBridge Internship/Mentorship Campaign.

---

## ✨ Features

- 📋 Display list of all users in a responsive table
- 🟢 Color-coded user types (Admin/System User)
- 🔍 View user details in a read-only form
- ✏️ Edit and update user details
- ➕ Create new users with validation
- ❌ Delete existing users
- 🚦 Route-based navigation for Create/View/Edit
- ✅ Form validation for required fields

---

## 🛠️ Tech Stack

- **Frontend Framework**: React
- **Component Library**: Ant Design
- **Styling**: Tailwind CSS / Bootstrap (choose one)
- **Routing**: React Router DOM

---

## 🧑‍💻 User Schema

Each user profile includes:

| Field        | Type   | Description                         |
| ------------ | ------ | ----------------------------------- |
| `userId`     | Number | Auto-generated unique ID            |
| `firstName`  | String | User's first name                   |
| `lastName`   | String | User's last name                    |
| `userName`   | String | Unique user name                    |
| `userType`   | Enum   | Admin User / System User            |
| `department` | Enum   | Frontend / Backend / QA / Marketing |

---

## 📂 Pages & Routes

| Route                  | View Description                        |
| ---------------------- | --------------------------------------- |
| `/`                    | User list with table and actions        |
| `/user/create`         | Form to create a new user               |
| `/user/view/:userId`   | Read-only user details                  |
| `/user/update/:userId` | Editable user details and update button |

---

## 📸 Screenshots

![User List Screenshot](./public/screenshot-1.png)
![Create New User Screenshot](./public/screenshot-2.png)
![View User Details Screenshot](./public/screenshot-3.png)
![Edit User Details Screenshot](./public/screenshot-4.png)
![Delete User Screenshot](./public/screenshot-5.png)

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18 (preferably latest LTS)
- npm or yarn

### Installation

```bash
git clone https://github.com/it-is-it/user-list-management-app.git
cd user-list-management-app
npm install
npm start
```

---

## 📁 Project Structure (Sample)

```
user-list-management-app/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.js
│   └── index.js
├── tailwind.config.js / bootstrap.css
├── package.json
└── README.md
```

---

## 📬 Submission Details

- 🔗 [GitHub Repository](https://github.com/it-is-it/user-list-management-app)
- 📄 Submitted to: Leo Club of Kathmandu Marigold
- 🧠 Focus: Code structure, problem-solving approach, form validation, UI design

---

## 📃 License

This project is for educational and assessment purposes only.

---

### 👨‍💻 Developed by: Ishwor Timalsina
