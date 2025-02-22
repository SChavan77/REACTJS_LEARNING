# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


### EVENT HANDLING

SYTHETIC BASED EVENTS-

If any event carried out, it should be common across all browsers.
React wraps the native browser events in something called SyntheticEvent.

Various React.js events- (camelCase)
onClick
onChange
onSubmit
onMouseEnter
onMouseLeave
onKeyDown
onKeyUp
onFoucs
onBlur
onInput

Convention of function Name to handle these events: prefix -"handle"
eg: handleSubmit, handleChange



#### PASSING EVENT HANDLERS AS PROPS

Passing event handlers as props in react, is a common pattern used to allow child components to communicate with parent components. This pattern is useful in various scenarios, including:

FORM HANDLING-
Passing event handlers like onChange or onSubmit to form components allows the child components to update the form data & notify the parent component of changes.

USER INTERACTION-
Event handlers like onClick can be passed to interactive elements (eg, buttons,links) to trigger specific actions in the parent component, such as opening a modal or navigating to a different page.

STATE MANAGEMENT-
Event handlers can be used to update state in the parent component,
which can be passed down to child components as props to reflect the updated state.

CALLBACK FUNCTIONS-
Event handlers can be used as callback functions to handle asynchronous operations or to update state based on the result of an operation.






