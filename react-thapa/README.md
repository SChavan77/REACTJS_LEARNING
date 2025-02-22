# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## About Folder Structure

* Node-Module : All necessary libraries & dependencies to run react project
* public: All static files -img, vid, fonts etc.
* src: all source files (components, css, js files)- .jsx file,
* .eslint: static code analysis tool. To make sure coding is as per convention.
* .gitignore: To ignore any files when we share/push in the git repo. We can mention those files there. eg: NodeModules: we never save in git. password protected keys related files.
* index.html: Entry point to the web Server/browser
* package.json: all details or configs of the project mentioned.: name, version, scripts(to run),dependencies.
* react, react-dom: react: is just a library. react-dom: it manages, to render the components on our web Page.
(in Mobile application: React Native does this job)
* vite.config.js: as we are using vite. it's version etc

Conventions:
* camelCase: functions/variables/ fileNames
* PascalCase: Component Names, Class names, types 
* snake_case: not much used ('_')
* kebab-case: file names, css classes, ids etc ('-')

Tool to React JSX to JS code converter: https://babeljs.io/repl

## Components of REACT

Refer: Class Based Components, Functional Components
In Class Based Components: We need to import {Components} in import react line, explicitly.

Hot Module replacement: Automatic rendering in web server. (provided by Vite-frontend build tool)

## REACT FRAGMENTS

Earlier, 

`return[<p>Hii</p>, <strong>02</strong>];`

Reach 16, Fragment introduced. 

 `<Fragment>` or `<>` (shorthand version)
 
 Using Fragment, we can return multiple elements wihtout adding extra nodes to the DOM.

If we see here,
```javascript
    <div>  //<----extra divs
      <NetFlixSeries /> 
      <NetFlixSeries />
      <NetFlixSeries />
    </div> 
 ````

 So using Array, we can eliminate the extra div(node), which is hectic OR using Fragment

 ```javascript
    <React.Fragment>
      <NetFlixSeries /> 
      <NetFlixSeries />
      <NetFlixSeries />
    </React.Fragment>
 ```
 We can use `<React.Fragment>` OR `<Fragment>` OR `<>`


 ## Dynamic Values/Expressions/FunctionCall in JSX

 If we want to pass a dynamic value to a component, we need a variable in the Component.
 To add any variable in the component in JSX, we use `{}` syntax.
 
 JSX allows to write JS expressions inside `{}`.
 It could be operations, function calls & other JS expressions which produce a value.
 
 ## Conditional Values in JSX
 Usually, ternary in `{}`.
 
 Eg: 
 `<button>{age>=18? "Watch Now":"Not Available"}</button>`

If complex conditions, 
do it outside the tags. And return via dynamic value way.
`if(ag>=18) canWatch="Watch Now";`

`<button>{canWatch}</button>`

Another way: Encapsulate such logic inside a function. 
Additional benefic, to apply such logic, if it requires some dynamic value to be checked, then we can pass those variables as a paremeter to undergo a logic operations.


## Export & Import in ReactJS
* Default Exp & Imp
* Named Exp & Imp
* Mixed Exp & Imp


**1) DEFAULT**

Default Export: A file can have only one default export.
Default Import: When importing a def export. you can name the import whatver we like.
But best practice is to use the same name.


**2) NAMED**

Named Export: declare the component as export. A file can have multiple named exports.
Named Import: mention the import in {} whenever we're importing.
        {Importing name} should be same as export declared component name

Eg: Header & Footer combined as one .jsx file. here, 2 components export block will come.


**3) MIXED**

Mixed Export: can have 1 default & multiple exports in any file.
Mixed Import: All named in {}s, default can be imported in a separate line or followed by ','

Eg:
import NetFlixSeries,{Header,Footer} from "./components/NetflixSeries";

OR
import NetFlixSeries from "./omponents/NetflixSeries";
import {Header,Footer} from "./components/NetflixSeries";

## LOOPING:
.map()
Key is mandotary.

## PROPS:
App-> NetflixSeries -> map:ul,il
The Map & Card make a separate component & use it.

## REACT DESTRUCTURING PROPS:

react/prop-types: 
https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md
Add this 'react/prop-types':'off', in eslint.cofig.js file.

### How to pass JSX in Props
If the JSX has directly tags, props= <div>...</div>
How to access these parts of the components?

