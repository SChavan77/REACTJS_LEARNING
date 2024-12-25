import "../EVV.css";

const State=()=>{


const handleButtonClick =(value)=>{
    value++;
    console.log(value);
      
}
    let value=0;
    return (
        <section className="main-div">
            <h1>Event States in React: {value}</h1>
            <button onClick={()=>handleButtonClick(value)}> Increment </button>
        </section>
    );
};

export default State

/**
 * 
 * Here only DOM update happens in value variable. In Browser not renders.
 * React should respond to the value change in the "value" variable
 * 
 * This will be given by "useState".
 * 
 * Functions with starting "use..." called Hooks 
 * 
 */