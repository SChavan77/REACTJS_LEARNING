# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



# STATES IN REACT JS

State refers to Object. (holds data or info abou the component)

Whenever there is a case, a variable valus will change in future, use useState for those.

It appears like a variable declared in functions
But, when state changes, React **RE-RENDERS** the component to reflect these changes, keeping the **UI IN-SYNC** with the data.

React RE-RENDERS THE COMPONENT to reflect the new state. (via ReactDOM: updates the changed value in DOM)

State is DYNAMIC, MUTABLE.
It can change according to user actions, server responses or other events.


## Using Normal variable state change:

Refer State.jsx
Only DOM renders, not the browser.

Here only DOM update happens in value variable. In Browser not renders.
React should respond to the value change in the "value" variable. Should **RE-RENDER**

This will be given by "useState".
Functions with starting "use..." called Hooks.


Refer UsingState.jsx

## React Reconciliation

RR is the proces through which React updates the browser DOM.

The Diffing Algorithm : 
Diffing short for Differences Algo is used to differentiate the DOM tree for efficient updates.

``
function App(){
    return(
        <div>
            <ParentComponent>
                <ChildComponent/>
                 <AnotherChildComponent/>
            </ParentComponent>
            <SiblingComponent/>
        </div>
    );
}
``
If any chnages happens in parentComponent, React will RE-RENDER parentComponent & all it's children component. siblingComponent is unaffected, will not be re-rendered.


Note: Sometimes, 2 times log shows in states. Why?
Because of React.StrictMode. For dev purpose, react gives this feature. If we remove this, then twice console logs scenario won't come.

```
 <StrictMode>
    <App />
  </StrictMode>
```

WHY on re-render, React will not come to init state?
Only on 1st render, it renders the init state.
During re-renders, it considers the latest past state as current state & update on top of it to the new value. useState hook takes care of this.


## DERIVED STATE

It is any state that can be COMPUTED based on other state or props. It is not stroed directly in component's state.
Rather it is calculated when needed. This approach helps avoid duplication & keeps the state simpler & more manageable.

Benefits- 
Lesser Redundancy:  By deriving values from existing state, you avoid storing redundant data.
Consistency: Ensures that derived values are always in sync with the underlying state props.
Simplicity: reduces the complexity of state management by minimizing the number of state variables.


## LIFTING THE STATE UP

How to pass state variable from one child to another child?

We know, from Parent component, if an State variable needed in child components, using Prop we can pass it.

Now, if child component State variable, needs to be rendered or needed in Parent component, then we need to LIFT UP the state to the parent(common parent) component.
By that, it is available to pass it to another child (via Props).


BEFORE:

````js
export const LiftignStateUp = ()=>{
    return(
        <>
            <InputComponent />
            <DisplayComponent />
        </>
    )
}

const InputComponent = () =>{
    const [inputValue, setInputValue] =useState("");
    return(
        <>
            <input 
                type="text" 
                placeholder="Enter your name" 
                value={inputValue}
                onChange={(e)=>{
                    setInputValue(e.target.value)
                }}  
                ></input>
        </>
    );
};

const DisplayComponent = ()=> {
   return <p>The Current Input value is </p>;
};````   


AFTER




