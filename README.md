# 🎓 Shiksha-Sangam - ClassroomHub

ClassroomHub is a modern and responsive web application built with **ReactJS** for managing virtual classrooms. This frontend connects with a backend server to enable role-based access for teachers and students, providing features like classroom creation, OTP-based join requests, and real-time post sharing.

---

## ✨ Features

- 🧑‍🏫 **Teachers**
  - Register and verify via OTP
  - Create and manage classrooms
  - Share posts and updates in classrooms
  - Approve student join requests using OTP

- 👨‍🎓 **Students**
  - Register and verify via OTP
  - Request to join classes
  - Enter OTP sent by teacher to join
  - View classroom posts and updates

- 🔐 **Secure**
  - OTP-based email verification and classroom access
  - Role-based UI and access controls

- 🎨 **Modern UI**
  - Fully responsive and visually engaging design
  - Smooth animations and clean layout

---

## 🚀 Tech Stack

- **Frontend:** React.js, HTML5, CSS3
- **Routing:** React Router DOM
- **Notifications:** React Toastify
- **Styling:** Pure CSS (modular CSS files per page)
- **Authentication:** Cookie-based sessions via API (credentials: 'include')

---

## 📂 Project Structure


/src
├── pages/
│ ├── HomePage.js & HomePage.css
│ ├── Signup.js & Signup.css
│ ├── Login.js & Login.css
│ ├── ProfilePage.js & ProfilePage.css
│ └── ClassesDetails.js & ClassesDetails.css
└── context/
└── AuthContext.js (for global auth state)

yaml
Copy
Edit




---

## 🔧 Getting Started

### Prerequisites

- Node.js v14 or later
- npm or yarn

### 1. Clone the repository

```bash
git clone https://github.com/your-username/classroomhub-frontend.git
cd classroomhub-frontend

```

2. Install dependencies
   
```bash
npm install
```

3. Create .env file

```bash
REACT_APP_API_BASE_URL=http://localhost:5000
```
Replace the base URL with your backend endpoint.


4. Start the development server
```bash
npm start
```

📸 Screenshots

![Screenshot 2025-06-05 225638](https://github.com/user-attachments/assets/479894cf-edbd-49c4-861b-92d30ec649f4)

![Screenshot 2025-06-05 225826](https://github.com/user-attachments/assets/ef0c5fdf-d1dd-4caa-8582-9c7586deaf07)

![Screenshot 2025-06-05 225758](https://github.com/user-attachments/assets/7ba78175-33e8-4284-b121-d69a1bd5e3c2)


👨‍💻 Author
Made with ❤️ by Sandeep Sharma
Connect on [LinkedIn](https://www.linkedin.com/in/sandeep--sharma/) | [LeetCode](https://leetcode.com/u/Sandeep-Sharma/) | sandeesharma09@gmail.com


📄 License
This project is licensed under the MIT License.

---



