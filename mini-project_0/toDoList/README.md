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


