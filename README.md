# Node-Login

[**Check out App**](https://mern-node-login.herokuapp.com/login)

This MERN stack app will demonstate the use of Passport JS, JWT and Bcyrpt.js

### **Passport.js**
Using `jwt` strategy to send a JWT back to the user once they've signed up or logged in. 

### **Bcyrpt.js**
Hashing the user's password and compairing the hash within `Passport.js`.

## **v1**
- User can create an account with an valid email, and a password more than 6 characters. 
- User can login with said email and password
- Will display errors if User doens't required fields. 
- Returns an Authorized Bearer Token whenever a user loggs in or when a user is created.  
- Takes User to profile (once Bearer token is verified) with their info displayed and a logout button. 
- Logout button deletes JWT and redirects user back to `/login`.
- Redirects user back to `/login` if JWT isn't present. 

## **v2**
- User can reset thier password if forgotten. 
- User can fetch thier password and have it sent to them via email. 
- User can create and login with existing Facebook, Twitter, and/or Google accounts. 