## **Deployment**
This project is deployed using continous deployment with Netlify.
Deployment link is: https://doodlechatt.netlify.app/

## **Getting Started**
*```git clone "name of repo"```
*```yarn install```
*```yarn start```

## **Installation**
```yarn test```
```node-sass```
```prettier```
```axios```
```prop-types```
`eslint`

## **Tools/Technologies**
* React
* Js
* Sass for styling
* Jest for testing


## **Best Practice**
* Added prop-types making the code easy to use and ensuring the type of data in a component is rendered correctly
* CI/CD best practices was put in place, commiting early and often
* Errors were handled well
* Accessibilty was put in check using the right semantic tags (forms, input label, button etc)
* Routes was handed properly although this is a one page app
* Comments were added where neccessary
* Codes were linted to analyze and find error in code, prettier for formatting
* All files related to a single components are in a folder
* Ensure that I make use of code splitting to reduce load time and allow load chunk only when a neccessary component/page is rendered or needed, Using suspense and lazy.

## **Features**
* Funtions for Converting dates in 24-hour format were written without using any library to avoid the app being too heavy
* Sass was used for styling every components
* Added a snackbar to give user notification that a message has been delivered or sent
* User friendly interface-wise for all screen size resolution
* I chose not to use Redux since there is only a single top level view (the chat message) and very few actions. However, more feature set of this app could increase over time, I've written API methods and related state changes in such a way that they could be easily turned into actions and reducers with minimal refactoring.

## **Proposed Improvement**
* More unit tests can be added
