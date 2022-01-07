## Dynamic Form Task

### General
1. Please clone this project and perform the task on your local machine.
2. Please submit this project by a Github repo or a zip file.
3. Good Luck :) 

### Overview
1. The purpose of this task is to build a simple dynamic form with matching types and validations based on a configuration scheme we provide to you.
2. The form should be built dynamically on run time based on the form configuration located in the configuration folder.

### Requirements:
1. The form will load inputs and render components based on the configuration where order matters
2. Based on the JSON configuration, the form input will inherit its type and validation

### Technical requirements: 
1. The form builder should be built using React.JS Hooks with Typescript
2. All validations should be in place 
3. The form MUST be responsive

### The form fields scheme includes the following properties:
<ol>
  <li>key - this is the field key to be which is sent on the submit of the form in the result</li>
  <li>Label - the input label</li>
  <li>type - The type of the input field: 
    <ul>
      <li>string - an alphanumeric string</li>
      <li>phone - phone number with country code</li>
      <li>email - an email address</li>
      <li>boolean</li>
      <li>gender - male / female / other</li>
      <li>options - a dropdown of options</li>
    </ul>
  </li>
  <li>required - whether this field is mandatory or not</li>
    <li>placeholder - the placeholder of the input</li>
    <li>width - width of the input in a row (0.5 for 50% and 1 for 100</li>
</ol>

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
