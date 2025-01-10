
import { EventHandling } from "./components/Evetnhandling";
import { EventProps } from "./components/EventProps";

const App = () =>{

  return (
    <section className="container">
    {/* <h1 className="card-heading">List of Best Netflix Series</h1> */}
      {/* <NetflixSeries/> */}

     <EventHandling/>
     <EventProps/>
    </section>
     
  );
};

export default App;
