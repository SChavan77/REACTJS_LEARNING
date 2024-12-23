# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


#### STYLING:

  ``` <ul class="grid grid-three--cols" >```

  We can't use this directly.
  We get, 
  
  ``chunk-373CG7ZK.js?v=57765123:519 Warning: Invalid DOM property `class`. Did you mean `className`?
    at ul
    at NetFlixSeries
    at App``
Because, class is a reserved keyword in React

Use ``className`` instead.

#### CONDITIONAL STYLING
