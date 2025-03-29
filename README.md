# EmployWise Frontend Assignment

A **React.js** project that displays a list of users with functionalities to **edit**, **delete**, and **navigate** through paginated data. It integrates with the **ReqRes API** for CRUD operations and supports **dark/light themes** using Material UI.

---
## **Live Demo**

The project is deployed using netlify and can be viewed here [EmployWise Assignment](https://employwise-task.netlify.app/)
---

## **Table of Contents**
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Installation & Setup](#installation--setup)  
- [Running the Project](#running-the-project)  
- [Project Structure](#project-structure)  
- [API Endpoints](#api-endpoints)  
- [Assumptions & Considerations](#assumptions--considerations)  
- [Future Enhancements](#future-enhancements)
- [Author](#author)

---

## **Features**
- Fetch users from ReqRes API **(paginated)**.  
- View user details in a **card format**.  
- **Search** users by name or email.  
- **Edit** user details via a modal form.  
- **Delete** users from the list.  
- **Dark/Light Mode** using Material UI theme provider.  
- **Context API** for global state management.  
- **Lazy Loading** for performance optimization.  
- **Smooth Animations** using Framer Motion.  

---

## **Tech Stack**
🔹 **Frontend:** React.js, Material UI, Axios, Framer Motion  
🔹 **State Management:** Context API  
🔹 **API:** [ReqRes API](https://reqres.in/)  
🔹 **API Testing:** Postman  
🔹 **Routing:** React Router Dom  
🔹 **Deployment :** Netlify

---

## **Installation & Setup**
### **Prerequisites**  
- Ensure you have **Node.js** and **npm** (or yarn) installed.  
- Recommended Node.js version: `16+`  

### **Steps to Install**  
1. **Clone the repository:**  
```
   git clone https://github.com/pathakjatin/EmployWise-Assignment
   cd EmployWise-Assignment
```
2. **Install dependencies**
```
   npm install
```
### **Running the project**
   ```
      npm run dev
   ```
Visit the url localhost:5173 to view the project locally

### **Project Structure**
```
📦 EmployWise-Assignment
 ┣ 📂 public
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 UserCard.jsx  
 ┃ ┃ ┣ 📜 EditUserForm.jsx  
 ┃ ┃ ┣ 📜 Input.jsx  
 ┃ ┃ ┣ 📜 Label.jsx  
 ┃ ┃ ┣ 📜 Logout.jsx
 ┃ ┃ ┣ 📜 TypeWriterEffect.jsx   
 ┃ ┃ ┣ 📜 Footer.jsx   
 ┃ ┣ 📂 context
 ┃ ┃ ┣ 📜 UsersContext.jsx  
 ┃ ┣ 📂 lib
 ┃ ┃ ┣ 📜 utils.js 
 ┃ ┣ 📂 pages
 ┃ ┃ ┣ 📜 HomePage.jsx  
 ┃ ┃ ┣ 📜 LoginPage.jsx  
 ┃ ┃ ┣ 📜 UserPage.jsx  
 ┃ ┣ 📜 ThemeContext.jsx  
 ┃ ┣ 📜 App.jsx  
 ┃ ┣ 📜 main.jsx 
 ┃ ┣ 📜 index.css 
 ┃ ┣ 📜 PrivateRoute.jsx 
 ┃ ┣ 📜 ThemeContext.jsx 
 ┣ 📜 index.html
 ┣ 📜 .gitignore
 ┣ 📜 package.json
 ┣ 📜 package-lock.json
 ┣ 📜 README.md
 ┣ 📜 vite.config.js

```

### **API Endpoints**
THe project uses [reqres.in](https://reqres.in) api to perform CRUD operations
1. Fetching users
```
Get: /api/users?page={page}
```
The api calling takes place in the UsersContext so that the data can be shared globally and avoid prop drilling

2. Update users
```
Put: /api/users/{id}
```

3. Delete users
```
Delete: /api/users/{id}
```

### **Assumptions & Considerations**

- The API does not persist data, meaning updates and deletions reset after a refresh.
- The Edit form only allows updating first name, last name and email.
- The UsersContext fetches users on page load and updates state after API actions.
- Error handling is included for failed API requests.

### **Future Enhancements**

- Store user changes persistently using localStorage or a backend.

### **Author**
**Jatin Pathak**  
[Github](https://github.com/pathakjatin/)  
[Portfolio](https://pathakjatin.netlify.app)  
[LinkedIn](https://www.linkedin.com/in/pathakjatin)