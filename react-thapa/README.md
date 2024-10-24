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
