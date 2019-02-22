# Folder structure for React-Redux:  

Using this [tutorial](https://levelup.gitconnected.com/structure-your-react-redux-project-for-scalability-and-maintainability-618ad82e32b7) to help me maintain my App's (past, present or future) folder structure and always keep scalability in mind. 

Let's always keep in mind this example when structuring client side code: 
```
+-- /src
|   +-- /app
|   |   +-- /home
|   |   |   +-- /duck
|   |   |   |   +-- types.js
|   |   |   |   +-- actions.js
|   |   |   |   +-- operations.js
|   |   |   |   +-- reducers.js
|   |   |   |   +-- tests.js
|   |   |   |   +-- index.js
|   |   |   +-- HomeComponent.js
|   |   |   +-- HomeContainer.js
|   |   |   +-- RedditComponent.js
|   |   |   +-- RedditContainer.js
|   |   +-- /trending
|   |   +-- /about
|   |   +-- /common
|   |   +-- App.js
|   +-- /utils
|   +-- index.js
|   +-- reducers.js
|   +-- registerServiceWorker.js
+-- /public
+-- /assets
+-- package.json
```

__*Please note any file that has 'Component' in it was originally using `.jsx` but i had changed it to `.js` due to recent discussion that the jsx extension is dead.*__

Let's break this down as we go: 
- Any direct folder within `/app` repersents your route. So like `/login`, `/home`, `/about`, etc. would all contain their own folder. 
-  The `/common` directory repersents any **Repeated Components**. Things like Navbars, Modals, Buttons, etc.
- You will also place all related redux code in the respected directory. 