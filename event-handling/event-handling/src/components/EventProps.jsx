/* eslint-disable react/prop-types */
import "./EV.css";

const handleWelcomeUser =(name)=>{
    
    alert(`Hey! Welcome ${name}`); 

} 

const handleHover =()=>{
    
    alert(`Hey! Thanks for hovering!`);  
       
}  

//This is your child component
const EventProps = () =>{

    return (
        <>
            <WelcomeUser onClick={()=> handleWelcomeUser("Sush")}
                
                onMouseEnter={handleHover}
                // Here onClick is a parent event name, here we can give anything, liek onButtonClick. 
                // There is no neeed to have the same arg name at props in Child component.
                // Main imp point is, handleWelcomeUser, handleHover 
            />
        </>
    )
}

const WelcomeUser =(props)=>{

    //if we don't destructure: {props.onClick}...

   const {onClick, onMouseEnter}=props; //events passed as Prop

    const handleGreeting = () =>{
        console.log("Hey Good Morning");
        onClick(); //calls handleWelcomeUser 
    }

    return (
        <>
            <button onClick={onClick}>Click Me</button>

            <button onMouseEnter={onMouseEnter} >Hover</button>

            <button  onClick={handleGreeting} >Greeting</button>
        </>
    );
}

export default EventProps;


//WelcomeUser is our child component, 2 events we are passing as a prop.
/**
 * 
 * Child Component: WelcomeUser
 * 
 * When button is clicked, onClick should call parent component's defined function.
 * 
 * 
 */