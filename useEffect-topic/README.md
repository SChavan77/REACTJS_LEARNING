# useEffect

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
`````