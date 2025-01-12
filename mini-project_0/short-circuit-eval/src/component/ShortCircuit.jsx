import { useState } from "react";

const ShortCircuit = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user,setUser]=useState();
   
    return (
        <section>
            <h1> Welcome to ShortCircuit Evaluation</h1>
            {isLoggedIn && <p>You are logged in!</p>}
            { user ? `Hello ${user}` : "Please Log In!"}
            <div>
                <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>
                        Toggle Log
                </button>
                <button onClick={()=>setUser("Hi Sush!")}>Set User</button>
                <button onClick={()=> setUser("")}>Clear User</button>
            </div>
        </section>
    )
}

export default ShortCircuit;
