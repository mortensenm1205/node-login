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
- Your redux code will be under the `/duck` directory. This is following the Redux, Ducks method.
- All container files shouldn't really return any Components/JSX it's only purpose is to connect the presentational component to redux.
 - And if you need to reference other components within other places, be sure to reference their containers files. 

### **Ducks**
I'll just go over quick points about what this directory should contain, why and some additional points.
- Each directory will have a `types.js` file. This is your actions types but done in object format to reducer errors amoungst files (this is scalability at it's finest). 
- There will also be an `actions.js` file. And this will contain our action creators. Just a function that returns an object that contains the action type and payload. 
- `operations.js` is where we will define our logic surrounding those action creators. In other words, this is where we will do our async actions like api calls.
- And finally our `reducers.js` file. Of course here is where we will place our reducers but something to note is that the reducer should be grouped by one single actions broken down by steps. These steps include starting, successfull, error, ending actions. If one reducer is doing one more than thing than you need to break it up. And example would be, having a user reducer contain form error and user data.... yeah don't do that. 
- You will also have a `index.js` file in the ducks directory but you will be exporting all the files above such as; operations, reducers, and actions types. Another good thing to note is that in the `index.js` file we don't export our action creators and that is because it's being used and exported within our `opertions.js` file.