# Branches

Since we're deploying in Github Pages and we're using React, we use the technique described at https://dev.to/javascripterika/deploy-a-react-app-as-a-github-user-page-with-yarn-3fka to create production deploys.  This technique uses branches in a somewhat unusual way.  The branches are:

* `main`: this branch contains the compiled, minimized, production code.  DO NOT EDIT THIS BRANCH DIRECTLY.
* `source`: this branch contains the uncompiled code you would normally edit.

To change code, you'd normally do something like:

* `git checkout source`
* `git pull`
* `git checkout -b [YOUR BRANCH NAME]`
* make your changes
* `git commit`
* `git push origin [YOUR BRANCH NAME]`
* Code review, and merge to **source** branch (NOTE: do NOT merge to **main** branch!)
* Deploy as noted below

# Deploying

See https://dev.to/javascripterika/deploy-a-react-app-as-a-github-user-page-with-yarn-3fka for details on how build/deploy is set up

To deploy:

* `git checkout source`
* `git pull`
* `yarn deploy`

# Running Locally

* [Install git](https://github.com/git-guides/install-git)
* [Set up](https://docs.github.com/en/get-started/getting-started-with-git/caching-your-github-credentials-in-git) your Github credentials in git
* Open a terminal
* [Clone](https://github.com/git-guides/git-clone) the `source` branch locally via `git clone git@github.com:Bes-friend/Bes-friend.github.io.git` or similar
* Change to the Bes-friend.github.io directory, e.g. `cd Bes-friend.github.io`
* Install [Node.js](https://nodejs.org/en/)
* Install [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable) (one approach is to run `npm install --global yarn`)
* Run `yarn start`


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)