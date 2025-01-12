# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# TO DO LIST MIN_PROJECT

## Elements:
* Real-time display
* Text box
* Mark & delete feature

#### DAY 1:
Create Main component

Main Component:
    * Todo List
    * Time-date
    * Form submit 
    * Display of the list-----
    * clear All       

Display of the list:
 * green check
 * delete symbol


 Need 2 states:
 1st storing all the tasks
 2nd storing real-time entered value

While adding the current elemnet, we should add to the existing task list.
For that, we used Spread operator.

Now,to add only unqiue tasks (not repeating the same task)- check has to be done.
State:["apple", "Mango", "mango"]


#### DATE TIME PICKER Implementation:

After every 1 sec, time is udpating.
setTimeOut(), setInterval() kind of.

Read about memory leakes on this context.
For every 1sec, state is changing, re-render for every sec.

But at backend, we are calling setInterval for every 1sec, there may be a chance of MEMORY LEAKAGE.
- Solution: useEffect


#### Delete & Clear all tasks functionality

We can delete elements from array is using filter()


#### Check Box functionality

Reusable Component & Separation of concern: Systemize the Components

#### Check-Out box functionality (check/UnCheck)
Implementation- 
If we have multiple items in the list. If we tick one row, how to identify which item is been checked out.
We should pass through keys

BEST WAY TO PASS KEYS in REACT-
By default, if you enter any values : keys are by defaalt 0.,1,2,3..
State: ["apple","mango"]
0:"apple"
1:"mango"

We need make now these values as an object.
Object of id,content,checked:
    Instead of passing as a value, pass with these attributes:
    ``` const handleInputChange = (value)=>{
        setInputValue({id:value,content:value, checked:false}); 
    }```

We set the entered ``value`` as ``id`` and ``value`` also. By default checked field we pass as false

If key & value are same, as per ES6, you can use shorthand property names to write them only once.
``` setTask((previous)=>[...previous, {id, content, checked}]);```
No need to use ```id:id,content:content,checked```

In TodoList,
By default we are giving key as key={curTask.id}.
No need to pass again & assign. So removed index in ``task.map((curTask)`` and ``export const TodoList =({data, checked, onHandleDeleteTodo, onHandleCheckTodo}){....}``

While deleting, we have, we get data (content itself: data={curTask.content}) 
```onClick={()=> onHandleCheckTodo(data)```
So no need to destructure to compare. While comparing, compare it against .content of all the array objects.
`` const updatedTask=task.filter((val)=>
                 val.content!=item);``


For
A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component.

By default, in REACT we have uncontrolled -need to use onChange & value.

In this case, still it is coming - but we can ignore for now.


#### LOCAL STORAGE: 
Todo Data to be retained after Refreshing the web page

With thid, even though we are adding to local storage, on refreshing it goes. Because, we have task as [] init value.
const [task,setTask]=useState([]);
localStorage.setItem("reactTodo",JSON.stringify(task));

We need to initialise our task to localstorage value.


JS Concept: 
When we update the localStorage.
- Do the localStorage.getItem("key"); & assign it to array variable.
- DO the JSON parse.
- push the data : todoList here is string. so push won't work.
todoList.push(newValue)

#### Data Validation

Empty scenario- Ways
* value.trim();
Then check for if(newValue!== 0) 
or if(newValue.length!==0)


#### Hosting an Application

https://www.hostinger.in/
https://www.netlify.com/ 

Now to deploy the React application ( which has different jsx components along with html & css)
DEVELOPMENT VESION - dev in this version
PRODUCTION VERSION - need this when deploy

To get Production Version -
>> bun run build
As we are seeing  vite+ bun : we get a folder dist (static asset). If we keep on hosting engine, it wil run.
eg:
dist/index.html                   0.46 kB │ gzip:  0.30 kB
dist/assets/index-DA-lt_zw.css    3.12 kB │ gzip:  1.25 kB
dist/assets/index-BFtoN5Zt.js   148.53 kB │ gzip: 48.04 kB

#### ABOUT KEYS

ReactJS will provide default index for every <li> : beginning with 0.
Say:
``
<li>...</li>  <----0
<li>...</li>  <----1
<li>...</li>  <----2
``

When we use :
 ``setTask((previous)=>[inputValue, ...previous]);``
 
 The recent li will take 0th key position.
 And thereby all the other keys gets updated with the rest of the values.
 React identify the element with it's unique key.
 Whenever a change is observed in the DOM tree, it signals to ReactDOM to update and render on the page.


#### SHORT - CIRCUIT EVALUATION
Involves Logical operation
 `` &&, ||, ??``


 ```js
 //Logical OR ( || )  : Rule: If exp1 is truthy, there return exp1, otherwise return exp2.
const result =false || 'Hello'; //'Hello'
const result =true || 'World'; //true

//Logical AND ( && ) : Rule: If exp1 is falsy, there return exp1, otherwise return exp2.
const result =false && 'Hello'; //false
const result =true && 'World'; // 'World'

//Nullish Coalescing (??) : exp ?? exp2
//Rule: If exp1 is not null or undefined, return exp1. Otherwise, return exp2.
const result = null ?? 'hello' ; // 'hello'
const result=undefined  ?? 'World' ; //'World'
const result = " ?? 'Fallback'; //"
```

#### Hooks Rule

 use_____ : useState, useEffects, useReducer

Note: 
* Hooks can only be used at the top level of your component.
* Do not call Hooks inside loops, conditions or nested functions.
* Call Hooks onyl from React function components or custom Hook. Do not call Hooks from regular JS functions or in class components.

(Not Recommended)
```js
..
..
if(user){
    const[count, setCount] =useState(0);
    /../
}
//we get error sayign: React Hook "useState" is called conditionally. Hooks must be called in the exact SAME ORDER in every component.
```

```js

const component1 = () =>{

    const getData =()=>{ //JS Function
        const [data,setData]=useState(""); //SHOULD NOT USE 
        /../
    }

}
```

**useState** : 
* To add state management to your functional components.
* It lets your store & update values that change over time, enabling dynamic and interactive user interfaces.


#### useState
It has 2 params: 
cosnt [statevariable,f to update the variable] =useState(inti value)

useState & useEffect runs TWICE during development to prevent developers from runing side effects.
 "React.StrictMode"

Object.is() : React using this , decided whether to re-render the page or not. in the process of any state change.

If we have multiple useStates, all the set..... are called as setStates(). React batches all these setStates() inside a event handlers & run them at the same time.
If we try to access the value immediately after setting a state, then you'll get old value as it's **Asynchronous**.


#### Controlled v/s UnControlled

Controlled Components in React : data is handled by React component state.

* State Management- value of the input field is controlled by React state.
* Event handlers- changes to the input field (typing, clicking..) are handled by React handlers (OnChange, onBlur....)
* State Updates- When user interacts with form input, React state is updated ... the the input value reflects the current state value.


UnControlled Components in React: Handled directly by the DOM

Direct DOM Manipulation- the value of the input field is controlled by the DOM.
(document.getElementById, etc)

Event Handling- changes are directly handled by DOM events (onchange, onblur etc)

Accessing from Data- Form data is accessed through refs or DOM traversal method, not react state.



