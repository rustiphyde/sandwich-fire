# **Sandwich Fire**

![Sandwich Fire Logo](/sandwich-fire-logo.png)

**Sandwich Fire** is a basic practice project created to teach **Savvy Coders** students how to use **Firebase**. It is written in _HTML5, CSS3,_ and _JavaScript ES6_. 

It utilizes **Firebase Authentication, Cloud Firestore, Functions, and Storage**. Students will learn how to create a Login, a Sign-Up, and a Users page on a website that let's people share Sandwich Recipes. 

It is open for anyone to use for the purpose of learning **Firebase**. So fork it, clone it, recreate it, and completely revamp it at your leisure ;

You're welcome, &mdash; _Rusty Hoppins, 10/11/2019_ ;

This lesson uses Postman, if you want to follow along, download Postman at https://getpostman.com.

## <ins>**Setup**</ins>

**Step 1.** Fork it, clone it, cd into it and open it in your favorite editor. We will be using VS Code for this lesson but feel free to use the editor of your choosing if you know how to perform the similar tasks.
 Type ```npm install``` and press **Enter** to install the dependencies for this project. We probably won't use them all in this project but they are there just in case.

**Step 2.** Make sure you're logged in to a Gmail account and navigate to https://firebase.google.com.

**Step 3.** Click the **Get Started** button and then click the **Create a project** button. Name your project "Sandwich Fire", accept the Firebase terms and hit **Continue**.
You can choose to have Google Analytics enabled or not, up to you, then hit **Continue**. Make sure the correct region is selected for where you live, accept all agreements, and click **Create Project**.When your project is done being created, click **Continue**.

**Step 4.** We will be creating a web app so click the third circle with the open/closing angle brackets, under the "Get started by adding Firebase to your app" heading. Give your app a nickname you will remember, if you try to use just **sandwich fire** you will get a message that it isn't available, so, if you want to use "Sandwich Fire" in the name, you will have to follow it with something else, such as a group of numbers. Once you decide on a name click **Register App**.

**Step 5.** In VS Code, hit **Ctrl+Shift+`** to open a new terminal that is interactive. Type ```npm install -g firebase-tools``` and hit **Enter** to install Firebase Tools globally on your machine.

**Step 6.** Type ```firebase login``` and hit **Enter**, then type **y** or **n** (up to you) and hit **Enter**. This will open a prompt from Google asking you to choose an account and accept some terms. Click **Allow** and you will be logged in.

**Step 7.** In the same terminal type ```firebase init``` and hit **Enter**. Type **y** and hit **Enter**. Using the arrow keys on your keyboard, press **down** twice to highlight Functions, hit the **Space Bar** to select Functions and hit **Enter**. Hit **Enter** again to choose **Use an existing project**. You should have only one project since you've never used Firebase before, so just hit **Enter** again. We will be using JavaScript for this lesson so hit **Enter** again to choose that option. Next type **y** or **n** (up to you whether you want to have ESLint) and hit **Enter**. Hit **y** to install dependencies and hit **Enter**. You now have your local project connected to your Firebase project.

**Step 8.** At this time, we need to go into our **index.js** file located in our brand new **functions** directory. Next, we need to delete the commented stuff and add the following code in its place ```const admin = require('firebase-admin');
admin.initializeApp()```.

**Step 9.** Now, in our terminal, we need to type ```cd functions``` to enter our brand new functions directory and then type the following, ```npm install --save express cors```. This installs express and CORS as dependencies to our project. Express makes navigating the app a lot quicker when it comes to routes, and CORS (which stands for Cross-Origin-Resource-Sharing) makes it easier for our app to connect with Firebase and other outside APIs, which stands for **Application Programming Interface**.

**Step 10.** Next, we need to type ```npm install --save firebase```. This is necessary to use the Firebase Auth methods, which we will now dive into.

## <ins>**Authentication**</ins>

**Step 1.** In the Firebase console sidebar, toggle open the **Develop** tab and click on **Authentication** which will open up the Authentication Manager. Click the button marked **Set up sign-in method**. We will be using the first option **Email/Password** which by default is Disabled along with the other methods. Click on **Email/Password** and a modal will open for enabling the sign-in method. There are two switches to enable sign-in methods here, we only need to make sure the first switch is turned on to enable the  sign-in method we'll be using. Once it has been enabled, click **Save**. Notice the other methods that Firebase offers, feel free to explore them in your own time, but for right now we have the method we require enabled so it's time to put it to use.

**Step 2.** 












