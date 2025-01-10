import "./EV.css";

export const EventHandling=()=>{

   /* function handleOnClick(){
        alert ("Hey, You clicked Button");
    }*/
    
    const handleOnClick=(event)=>{ //FAT ARROW FUNCTION:
        console.log(event); //it prints "SyntheticBaseEvent" object
        //console.log(event.target);
        alert ("Hey, You clicked Button");
    }

   /* const handleWelcomeUser =()=>{
            console.log("Hey! Welcome User");     
    }*/
    const handleWelcomeUser =(name)=>{
        console.log(`Hey! Welcome ${name}`);     
    }    

    return(
        <>
        {/* {Function Compoenents with Named functions} */}
            <button onClick={handleOnClick}> With Named Function</button>
            <br />
            <button onClick={ (event)=>handleOnClick(event)}>Arrow func with Event argument</button>
            <br />
            {/* Inline Event handler */}
            <button onClick={ (event)=> console.log(event)}>Inline Arrow func console</button>
            <br />
            {/* {Function Compoenents with Inline functions}*/}
            <button onClick={()=> alert("Hey, You clicked Button")}>Inline Arrow func Alert</button>
            <br />
            {/* Passing arguments to Event handlers */}
            {/* <button onClick={handleWelcomeUser("Sush")}>Inline Arr fun</button> */}
            {/* Need to use Fat Arrow function in this case, otherwise, automatically it prints Hey! Welcome User without clicking also.*/}
            <button onClick={() => handleWelcomeUser("Sush")}>Inline Arr fun with Name argument</button>
            <br />
            <button onClick={() => handleWelcomeUser("Ram")}>Inline Arr fun with Name argument 2</button>
        </> 
        );
}

/**
 * 
 * NORMAL FUNCTION
 * function handleOnClick(){
        alert ("Hey, You clicked Button");
    }

A) NAMED FUNCTION PASS: Only name to be passed as arg  
    <button onClick={handleOnClick}> Click Me</button>
By default we get event object, implicitly. (SynthenticBaseEvent Object)
//SyntheticBaseEvent{_reactName: 'onClick', _targetInst: null, type: 'click', nativeEvent: PointerEvent, target: button,…}
    If we do this- nothing works
 * <button onClick={ ()=>handleOnClick}>Click Me 2</button>
 * 
 * FAT ARROW FUNCTION
 * 1) Need to call explicitly -- handleOnClick()
 * <button onClick={ ()=>handleOnClick()}>Click Me 2</button>
 * 
 * Calls the CallBack function.
 * 
 * NOTE: if we put by mistake () in this code:
 * <button onClick={handleOnClick}> Click Me</button>
 * 
 * it will call handleOnClick call infinitely. without trigerring the event.
 * 
 * 
 * 2) If we need the event object, then we need to explicitly pass the event object while calling.
 * 
 * For <button onClick={ ()=>handleOnClick(event)}>Click Me 2</button>
 * We get this: PointerEvent{isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0,…}
 * 
 * For <button onClick={ (event)=>handleOnClick(event)}>Click Me 2</button>
 * SyntheticBaseEvent{_reactName: 'onClick', _targetInst: null, type: 'click', nativeEvent: PointerEvent, target: button...}
 * 
 * In React, event handlers receive the event object as an argument by default.
 * However, when you use an arrow function directly in the onClick attribute without
 * passing the event object explicitly, React doesn't pass the event object to your handler
 * function. This is because, the arrow function creates a new function and calls your handler 
 * without passing any arguments.
 * 
 * 
 * FUNCTION COMPONENTS WITH INLINE FUNCTION PASS: 
 * 
 * PASSING ARGUMENTS TO EVENT HANDLERS:
 * 
 */