# **Sandwich Fire**

![Sandwich Fire Logo](/sandwich-fire-logo.png)

**Sandwich Fire** is a basic practice project created to teach **Savvy Coders** students how to use **Firebase**. It is written in _HTML5, CSS3,_ and _JavaScript ES6_. 

It utilizes **Firebase Authentication, Cloud Firestore, Functions, and Storage**. Students will learn how to create a Login, a Sign-Up, and a Users page on a website that let's people share Sandwich Recipes. 

It is open for anyone to use for the purpose of learning **Firebase**. So fork it, clone it, recreate it, and completely revamp it at your leisure ;

You're welcome, &mdash; _Rusty Hoppins, 10/11/2019_ ;

This lesson uses Postman, if you want to follow along, download Postman at https://getpostman.com.


**Step 1.** Fork it, clone it, cd into it and open it in your favorite editor. We will be using VS Code for this lesson but feel free to use the editor of your choosing if you know how to perform the similar tasks.
 Type ```npm install``` and press **Enter** to install the dependencies for this project. We probably won't use them all in this project but they are there just in case.

**Step 2.** Make sure you're logged in to a Gmail account and navigate to https://firebase.google.com.

**Step 3.** Click the **Get Started** button and then click the **Create a project** button. Name your project **Sandwich Fire**, accept the Firebase terms and hit **Continue**.
You can choose to have Google Analytics enabled or not, up to you, then hit **Continue**. Make sure the correct region is selected for where you live, accept all agreements, and click **Create Project**.When your project is done being created, click **Continue**.

**Step 4.** We will be creating a web app so click the third circle with the open/closing angle brackets, under the "Get started by adding Firebase to your app" heading. Give your app a nickname you will remember, if you try to use just **sandwich fire** you will get a message that it isn't available, so, if you want to use "Sandwich Fire" in the name, you will have to follow it with something else, such as a group of numbers. Once you decide on a name click **Register App**.

**Step 5.** In VS Code, hit **Ctrl+Shift+`** to open a new terminal that is interactive. Type ```npm install -g firebase-tools``` and hit **Enter** to install Firebase Tools globally on your machine.

**Step 6.** Type ```firebase login``` and hit **Enter**, then type **y** or **n** (up to you) and hit **Enter**. This will open a prompt from Google asking you to choose an account and accept some terms. Click **Allow** and you will be logged in.

**Step 7.** In the same terminal type ```firebase init``` and hit **Enter**. Type **y** and hit **Enter**. Using the arrow keys on your keyboard, press **down** twice to highlight Functions, hit the **Space Bar** to select Functions and hit **Enter**. Hit **Enter** again to choose **Use an existing project**. You should have only one project since you've never used Firebase before, so just hit **Enter** again. We will be using JavaScript for this lesson so hit **Enter** again to choose that option. Next type **y** or **n** (up to you whether you want to have ESLint) and hit **Enter**. Hit **y** to install dependencies and hit **Enter**. You now have your local project connected to your Firebase project.

**Step 8.** At this time, we need to go into our **index.js** file located in our brand new **functions** directory. Next, we need to delete the commented stuff and add the following code in its place: ```const admin = require('firebase-admin');
admin.initializeApp()```.

**Step 9.** Now, in our terminal, we need to type ```cd functions``` to enter our brand new functions directory and then type the following, ```npm install --save express cors```. This installs express and CORS as dependencies to our project. Express makes navigating the app a lot quicker when it comes to routes, and CORS (which stands for Cross-Origin-Resource-Sharing) makes it easier for our app to connect with Firebase and other outside APIs, which stands for **Application Programming Interface**. 

**Step 10.** Next, we need to type ```npm install --save firebase```. This is necessary to use the Firebase Auth methods and communicate with our Database.

**Step 11.** In the Firebase console sidebar, toggle open the **Develop** tab and click on **Authentication** which will open up the Authentication Manager. Click the button marked **Set up sign-in method**. We will be using the first option **Email/Password** which by default is Disabled along with the other methods. Click on **Email/Password** and a modal will open for enabling the sign-in method. There are two switches to enable sign-in methods here, we only need to make sure the first switch is turned on to enable the  sign-in method we'll be using. Once it has been enabled, click **Save**. Notice the other methods that Firebase offers, feel free to explore them in your own time, but for right now we have the method we require enabled.

**Note:** We will be utilizing the built-in Firebase methods for Login, Sign-up and Logout but we will also be creating a username called an **epithet** which is going to be stored along with some other information in Cloud Firestore under a collection called Users which will be dynamically created and added to when users sign up. First we need to setup some routes so that we can fetch, post, update, and delete data.

**Step 12.** In your functions directory, open your index.js file and add the following code to it: 
```
const app = require('express')()


exports.api = functions.https.onRequest(app);
``` 
This piece of code makes it easier to wrap all of our functions into nice little routes to use with axios later. At the top of the code on line 3 type the following: 
```
const config = require('./util/config');
``` 
This is the file we are going to create now to store our configuration information in a safe place.

**Step 13.** In your terminal, make sure you in your functions directory and type the following: ```mkdir util``` and hit **Enter**.
After that type ```touch util/config.js```. Before we do anything with this file we need to make sure it is in our **.gitignore** file so that it doesn't get added to Github. With that in mind, open your **.gitignore** file under your **functions** directory and type ```util/config.js```. Now if we commit and push to Github that file will not be included. Open your Firebase console and click on the **Gear Icon** next to the words **Project Overview**. In the dropdown, choose **Project Settings** and then scroll all the way down to the information about your firebaseConfig object. Click inside the radio button that says **Config** and click on the **Copy Icon** in the bottom right-hand corner to copy the information to your clipboard. Now navigate to your **config.js** file in your **util** directory in VS Code and type the following: ```module.exports =```. Then press **Ctrl+V**(on Windows) or **Cmd+V** (on Mac) to paste your configuration information into the file. Delete the section that says ```const firebaseConfig =```.

**Step 14.** Now, navigate back to your **index.js** file in your **functions** directory. Under the code where we required and called express, type the following: 
```
const cors = require('cors');
app.use(cors());
```
We are setting up the communication between our app, Firebase, and other applications such as **Postman**. We need one more piece of the puzzle before we can use Postman. 

**Step 15.** In your terminal, make sure you are in your **functions** directory and type ```touch serviceAccountKey.json```.
You immediately need to add this file to your **.gitignore** in your **functions** directory as well. Now you need to open Firebase back up and on the same page you got the config information scroll to the top and click on the option **Service accounts**. Once that opens, click the button that says **Generate new private key**. You will notice a file downloaded to your machine. Right-click on the file in your Downloads and choose **Open**. This should open the file in your VS Code. Press **Ctrl+A** (on Windows) or **Cmd+A** (on Mac) to select all. Then press **Ctrl+X** (on Windows) or **Cmd+X** (on Mac) to cut the entirety of the file to the clipboard. You no longer need this file so you can delete it whenever you want to. Now open up the newly created **serviceAccountKey.json** file and press **Ctrl+V** (on Windows) or **Cmd+V** (on Mac) to paste the information you just cut into the new file. 

**Step 16.** Navigate back to your **index.js** file in your **functions** directory and add the following code directly under the admin require: 
```
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({ 
  credential: admin.credential.cert(serviceAccount), 
  databaseURL: **WHATEVER YOUR DATABASE URL IS IN YOUR CONFIG.JS FILE** 
  });
  ``` 
  Afterwards, underneath the ```const app``` declaration type the following: 
  ```
  const firebase = require('firebase');
  firebase.initializeApp(config);

  const db = admin.firestore();
  ``` 
  This creates a nice abbreviation for all that code. We are now ready to start our first function.

## Function 1 - **Sign Up Route**

Underneath all the require statements and initializers but before the exports.api declaration type the following code

```
// Sign Up Route
app.post("/signup", (req, res) => {
  const newUser = {
    email: req.body.email,
    password: req.body.password,
    epithet: req.body.epithet.replace(/\s/g, "-").toLowerCase()
  };

  // TODO validate data
  let token, userId;
  db.doc(`/Users/${newUser.epithet}`)
    .get()
    .then(doc => {
      if (doc.exists) {
        return res
          .status(400)
          .json({ epithet: "This Epithet is already taken." });
      } else {
        return firebase
          .auth()
          .createUserWithEmailAndPassword(newUser.email, newUser.password);
      }
    })
    .then(data => {
      userId = data.user.uid;
      return data.user.getIdToken();
    })
    .then(idToken => {
      token = idToken;
      const userCredentials = {
        epithet: newUser.epithet,
        email: newUser.email,
        createdAt: new Date().toISOString(),
        userId
      };
      return db.doc(`/Users/${newUser.epithet}`).set(userCredentials);
    })
    .then(() => {
      return res.status(201).json({ token });
    })
    .catch(err => {
      console.error(err);
      if (err.code === "auth/email-already-in-use") {
        return res.status(400).json({ email: "Email is already in use" });
      } else {
        return res.status(500).json({ general: "Something went wrong, please try again" });
      }
    });
});
  ```
  Now in your terminal, make sure you are still in your **functions** directory and type ```firebase deploy```.

  Now we are ready to use **Postman**.














