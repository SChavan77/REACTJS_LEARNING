import "./EV.css";

export const EventPropagation = ()=>{

    const handleGrandParent =()=>{
        alert ("hey !GrandParent target");
    }

    /*const handleParentClick =()=>{
        alert ("hey !Parent target");
    }*/

     const handleParentClick =(e)=>{
        alert ("hey !Parent target");
        e.stopPropagation();
     }

    const handleChildClick =()=>{
        alert ("hey !Child target");
    }

    return(

        <section className="main-div">
            <div className="g-div" onClick={handleGrandParent}>
            <div className="p-div" onClick={handleParentClick}>
            <button className="c-div" onClick={handleChildClick}>
                    Child Div
            </button>
            </div>
            </div>
        </section>
    );
}

/**
 * 
 * On Clicking child div, how to print from grandparent to child (Top to bottom)-Capturing phase
 * 
 * we have onClick, similarly, we have onClickCapture=..
 *
 * 
 */