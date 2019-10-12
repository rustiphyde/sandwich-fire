# Sandwich Fire

**Sandwich Fire** is a basic practice project created to teach **Savvy Coders** students how to use **Firebase**. It is written in _HTML5, CSS3,_ and _JavaScript ES6_. It is open for anyone to use for the purpose of learning **Firebase**. So fork it, clone it, recreate it, and completely revamp it at your leisure ;

You're welcome, &mdash; _Rusty Hoppins, 10/11/2019_ ;

This lesson uses Postman, if you want to follow along, download Postman at https://getpostman.com.

**Step 1.** Fork it, clone it, cd into it and open it in your favorite editor. We will be using VS Code for this lesson but feel free to use the editor of your choosing if you know how to perform the similar tasks.
 Type ```npm install``` and press **Enter** to install the dependencies for this project.

**Step 2.** Make sure you're logged in to a Gmail account and navigate to https://firebase.google.com.

**Step 3.** Click the **Get Started** button and then click the **Create a project** button. Name your project "Sandwich Fire", accept the Firebase terms and hit **Continue**.
You can choose to have Google Analytics enabled or not, up to you, then hit **Continue**. Make sure the correct region is selected for where yu live, accept all agreements, and click **Create Project**.When your project is done being created, click **Continue**.

**Step 4.** We will be creating a web app so click the third circle with the open/closing angle brackets, under the "Get started by adding Firebase to your app" heading. Give your app a nickname you will remember, if you try to use just **sandwich fire** you will get a message that it isn't available, so, if you want to use "Sandwich Fire" in the name, you will have to follow it with something else, such as a group of numbers. Once you decide on a name click **Register App**.

**Step 5.** In VS Code, hit **Ctrl+Shift+`** to open a new terminal that is interactive. Type ```npm install -g firebase-tools``` and hit **Enter** to install Firebase Tools globally on your machine.
Now, type ```npm install --save axios``` to add axios to your project's dependencies.

**Step 6.** Type ```firebase login``` and hit **Enter**, then type **y** or **n** (up to you) and hit **Enter**. This will open a pronpt from Google asking you to choose an account and accept some terms. Click **Allow** and you will be logged in.

**Step 7.** In the same terminal type ```firebase init`` and hit **Enter**. Type **y** and hit **Enter**. Using the arrow keys on your keyboard, press **down** twice to highlight Functions, hit the **Space Bar** to select Functions and hit **Enter**. Hit **Enter** again to choose **Use an existing project**. You should have only one project since you've never used Firebase before, so just hit **Enter** again. We will be using JavaScript for this lesson so hit **Enter** again to choose that option. Next type **y** or **n** (up to you whether you want to have ESLint) and hit **Enter**. Hit **y** to install dependencies and hit **Enter**. You now have your local project connected to your Firebase project.




