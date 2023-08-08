# EmployeeReviewSystem
An employee review system is a structured process organizations use to assess and evaluate employees' performance, skills, and contributions. It typically involves regular feedback sessions, goal-setting, and performance discussions between employees and their supervisors to facilitate workplace growth, alignment, and improvement.

#tech stack
Node JS, Express, MongoDB, Javascript, EJS, HTML, CSS

#start Project
1. Git clone the repo: git clone https://github.com/Skyboy14/EmployeeReviewSystem.git
2. install all the necessary packages:  npm i 
3. start the app: node index.js

# Walk through of the Application and each screen

1. Login screen:
Sign In page allows the existing employee/admin to log in to the ERS app. Even if you are new you can go for sign-up by clicking on sign-up on the nav bar or clicking on register user below submit button
<img width="960" alt="image" src="https://github.com/Skyboy14/EmployeeReviewSystem/assets/96543258/7cf79044-8764-4250-902f-d18e5b41f640">

2. Sign-Up page:
The signUp page allows users to register to the app, If you are the first user to register you will be default Adim, but after that, you will be assigned as an employee and promoting to admin can do by the other admin/admins.
<img width="960" alt="image" src="https://github.com/Skyboy14/EmployeeReviewSystem/assets/96543258/adf6d1e9-3b4c-4c48-8c1a-110de8951f1a">

3. Forget Password Screen:
Here users can be able to reset the password, only need to add their name, email, and a new password and confirm it.



4. Home Page:
This screen shows the assigned review task assigned by the admin which has to be completed by the user and also the reviews the user has received from other users.
<img width="960" alt="image" src="https://github.com/Skyboy14/EmployeeReviewSystem/assets/96543258/6ed39116-ca89-4691-b4fe-4b5fbfb9501c">

5. AssignTask Page (Only Admin View):
This screen is only available for the admin to assign the review task to an employee and also to promote an existing employee to admin.
<img width="960" alt="image" src="https://github.com/Skyboy14/EmployeeReviewSystem/assets/96543258/1b3aca52-afb7-450b-b4d7-02aecdb09207">

6. Employee list screen (Only Admin View):
This screen is only available for the Admin to see the data of the user and also to delete any user from the database.
<img width="960" alt="image" src="https://github.com/Skyboy14/EmployeeReviewSystem/assets/96543258/60a8e829-a758-4ee1-9ac4-fb4dd4ec6fb7">

7. Add a new Employee screen (Only Admin View):
This screen is only available for the Admin to add new users to the database.
<img width="960" alt="image" src="https://github.com/Skyboy14/EmployeeReviewSystem/assets/96543258/f462116d-8d15-41ad-a693-551de71a35e1">

#Folder Structure 
```
Employee_review_system/
│
├── config/
│   ├── mongoose.js
│   └── passport-local.js
|
├── controllers/
│   ├── admin_controllers.js
|   ├── home_controllers.js
|   ├── review_controllers.js
│   └── user_controller.js
|
├── models/
│   ├── review.js
│   └── user.js
|
├── node_modules/
│   ├── review.js
│   └── user.js
│
├── public/
│   ├── css/
│   └── images/
|
├── routes/
│   ├── admin.js
|   ├── index.js
|   ├── review.js
│   └── user.js
│
├── views/
│   ├── layouts/
│   └── partials/
|
├── .gitignore
├── index.js
├── package-lock.json
├── package.json
└── README.md
```

  
