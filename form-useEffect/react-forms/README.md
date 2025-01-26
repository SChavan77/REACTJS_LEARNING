# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


In this project,

we have implemented
* Registration Form
* Contact Form
* Login Form


Additional Notes:
* htmlFor is used when we use in jsx.
In normal HTML , we use for

* In JSX, used autoComplete -camelCase, in Normal HTML autocomplete.

* For message, used tag ``<textarea />``




NOTE:
Flow of Data
Initialization:

The component ForewardRef initializes two useRef hooks:
usernameRef for the username input field.
passwordRef for the password input field.
Rendering the Form:

ForewardRef renders a form with two inputs and a submit button.
It uses the BeforeReactV19Input component to create the input fields for "Username" and "Password".
Ref Forwarding:

BeforeReactV19Input is wrapped with React.forwardRef. This allows the ref passed to BeforeReactV19Input to be forwarded to the <input> element inside it.
This means usernameRef and passwordRef in ForewardRef directly reference the <input> elements created by BeforeReactV19Input.
Form Submission:

When the form is submitted, the handleFormSubmit function is triggered.
e.preventDefault() prevents the default form submission behavior.
The current values of the input fields are accessed using usernameRef.current.value and passwordRef.current.value and logged to the console.
After logging, the input fields are cleared by setting their value properties to an empty string.
Understanding forwardRef
The forwardRef function is a React utility that allows a component to forward a ref it receives to one of its children.

Why use forwardRef?

Normally, a ref cannot be passed directly to a child component. React only allows ref to work with DOM elements or class components.
forwardRef enables functional components (like BeforeReactV19Input) to support ref forwarding. This is especially useful for abstracting complex UI components while maintaining access to their inner DOM elements.
How does forwardRef work here?

In BeforeReactV19Input, the ref is forwarded to the <input> element via the ref attribute:
jsx
Copy
<input ref={ref} id={id} type={type} autoComplete="off" />
This allows the parent component ForewardRef to directly manipulate the <input> element, even though it is encapsulated inside BeforeReactV19Input.
Dynamic ID Generation:

The useId hook generates a unique id for each input field, ensuring that the label and input are correctly associated.
Key Points
usernameRef and passwordRef:

These hold references to the actual <input> DOM elements created by BeforeReactV19Input.
forwardRef:

Bridges the gap between ForewardRef and the inner <input> elements of BeforeReactV19Input.
Advantages:

Encapsulation: BeforeReactV19Input abstracts the input and label logic.
Control: ForewardRef still retains control over the <input> values via ref.
Output:

The logged values in the console are the current values of the "Username" and "Password" fields when the form is submitted.
This design demonstrates how to use forwardRef to balance component abstraction with the ability to directly interact with DOM elements.





### forwardRef()

Parent to child data pass- we use props  - (1 difficulty: prop drilling)

Re-render only the changed part, not the whole component.
in V19- it is deprecated
