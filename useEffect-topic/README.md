# useEffect and Fetch API

### About Side Effects

````js
useEffect(()=>{},[])
````

### Use Effect with cleanUp function

````js
useEffect(()=>{

    //Clean Up function
    return () =>{
            //Clean up code : Optional
    }
},[/*dependencies*/])
````


Explaination: 
useEffect runs only once in the beginning when component mount/renders at first. as dependencies= []

setInterval is in webAPI. For every 1sec, setCount will be called and update the count variable.
count is updated, so component again will re-render.
BUT useEffect won't be called again, it is removed from global call stack.
But setInterval is still there in queue stack (from webAPI)

Because of the CLOSURE, even though the parent function is not active in exec context, child function has the capability to store the past execution data of the parent function in memory. it tries to get it.
This child function -setInterval: **will not get exact value to prev - gets some stale value**. Assumes this is the actual count value.

``return ()=> clearInterval(timer)`` is the resolution. It cleans the previous result of the setInterval function. With this, actual count value will be considered for prev in setCount().

````js
useEffect (()=>{
    const timer=setInterval(()=>{
        setCount((prev)=>prev+1) ;//setCount((prev)=>prev+1)
        },1000);
    return ()=> clearInterval(timer)
    },[])
````

### About FetchAPI

Whenever we use fetch(), it returns Promise response

A Promise is like a placeholder for the result of an Asynchronous operation.

If we use fetch() -> to any URL like this: If we observe the network calls: there are infinite request calls happening.

```js
fetch("https://jsonplaceholder.typicode.com/posts")
             .then((res)=> res.json())
             .then((data)=>setapiData(data)) //Here, everytime it is setting. As the apiData is changing every time, component will re-render every time. again fetch() is called to the URL.
             .catch((err)=>console.log("Error : "+ err));
```

Resolution:
```js
//Dependency set here makes this code to run only once in the beginning.
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
             .then((res)=> res.json())
             // eslint-disable-next-line no-unused-vars
             .then((data)=>
                {
                    setapiData(data)
                }) //casues too many requests
             .catch((err)=>console.log("Error : "+ err));
    },[])
```


On Using this 
```js
const API = "https://pokeapi.co/api/v2/pokemon/pikachu";
        //Dependency set here makes this code to run only once in the beginning.
        useEffect(()=>{
            fetch(API)
                 .then((res)=> res.json())
                 // eslint-disable-next-line no-unused-vars
                 .then((data)=>
                    {
                        setapiData(data)
                    }) //casues too many requests
                 .catch((err)=>console.log("Error : "+ err));
        },[])
```

We got,
```
Pickachu.jsx:23 Uncaught TypeError: apiData.map is not a function
    at Pikachu (Pickachu.jsx:23:37)

hook.js:608 The above error occurred in the <Pikachu> component:

    at Pikachu (http://localhost:5173/src/component/fetchAPI/Pickachu.jsx:22:33)
    at App

Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.
chunk-HCIN4FJ4.js?v=2fe1858c:19464 Uncaught TypeError: apiData.map is not a function
    at Pikachu (Pickachu.jsx:23:37)
```
Basically https://pokeapi.co/api/v2/pokemon/pikachu response is not an array data.
so, changed useState const to non-array object. Removed .map(..)


### Handling Loading & Error States

We can create a useState variable as 'loading'. 'error'


### Data Fetching using Async-Await & Try-Catch






