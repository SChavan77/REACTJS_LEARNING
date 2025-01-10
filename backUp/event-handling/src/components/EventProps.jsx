
const handleWelcomeUser =(name)=>{
    alert(`Hey! Welcome ${name}`);     
} 

const handleHover =()=>{
    alert(`Hey! Thanks for hovering!`);     
}  

//This is your child component
export const EventProps = () =>{

    return (
        <>
            <WelcomeUser onClick={()=> handleWelcomeUser("Sush")}
                
                onMouseEnter={handleHover}
            />
        </>
    )
}

const WelcomeUser =(props)=>{

   const {onClick, onMouseEnter}=props;

    const handleGreeting = () =>{
        console.log("Hey Good Morning");
        onClick(); //calls handleWelcomeUser 
    }

    return (<>
            <button onClick={onClick}>Click Me</button>

            <button onMouseEnter={onMouseEnter} >Hover</button>

            <button  onClick={handleGreeting} >Greeting</button>
    </>);
}

//WelcomeUser is our child component, 2 events we are passing as a prop.
/**
 * 
 * Child Component: WelcomeUser
 * 
 * When button is clicked, onClick should call parent component's defined function.
 * 
 * 
 */
