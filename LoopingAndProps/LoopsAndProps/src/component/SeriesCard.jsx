import '../index.css';
/*const SeriesCard= (props)=>{

    return (
    <li>
    <div>
        <img src={props.curEle.img_url} alt={props.curEle.id} width="40%" height="40%"/>
    </div>
    <h2> Name: {props.curEle.name} </h2>
    <h3> Rating: {props.curEle.rating}</h3>
    <p>Summary: {props.curEle.description}</p>
    <p> Genre:{props.curEle.genre.join(", ")}</p>
    <p>Cast: {props.curEle.cast.join(", ")}</p>
    <a href={props.curEle.watch_url} target="_blank">
      <button> Watch Now </button>
    </a>
  </li>
    );
}

export default SeriesCard;*/
const buttonStyle ={
    padding:"1.2rem 2.4rem",
    border: "none",
    fontSize: "1.6rem",
    backgroundColor: `${rating >=8.5? "#7dcea0" : "#f7dc6f"}`,
    color: "var(--bg-color)",
}
  //backgroundColor:`${rating >=8.5? "#7dcea0" : "#f7dc6f"}`,
  //backgroundColor: "var(--btn-hover-bg-color)",

const ratingClass= rating>=8.5? "super-hit": "average";

//RESTRUCTURING
//const SeriesCard = (props) => {
    const SeriesCard = ({series}) =>{
    /*const {series} =props;
    const { img_url, name, rating, description, cast, genre, watch_url } =series;
    */
   
   // const { img_url, name, rating, description, cast, genre, watch_url } = props.series;
   const { img_url, name, rating, description, cast, genre, watch_url } = series;
    return (
        <li className="card">
            <div>
                <img src={img_url} alt={name} width="40%" height="40%"/>
            </div>
            <div className="card-content">
                <h2>Name: {name}</h2>
                <h3> Rating: <span className={`rating timepass ${ratingClass}`}>
                {rating}</span></h3>
                <p>Summary: {description}</p>
                <p>Genre: {genre.join(', ')}</p>
                <p>Cast: {cast.join(', ')}</p>
                <a href={watch_url} target="_blank" rel="noopener noreferrer">
                    <button style={buttonStyle}>Watch Now</button>
                </a>
            </div>
        </li>
    );
};
export default SeriesCard;


/**
 * Added one more div for containers
 * 
 * Inline styles in React are specified using JS objects. Property names are written in camelCase instead of the 
 * traditional CSS kebab-case.
 * 
 * Doubly curly braces represent the JS object created inside of JSX
 * 
 * For Numeric calues, you need to specify units as a string (eg,'16px'). Some properties like' zIndex, can make numeric values directly.
 * 
 * const style ={
 * margin: '16px',
 * zIndex=1,
 * }
 * 
 * <div className="card-content">
                <h2 >Name: {name}</h2>
                <h3 style={{margin: '1.2rem 0',}}> Rating: {rating}</h3>
                <p style={{margin: '1.2rem 0',}}>Summary: {description}</p>
                <p style={{margin: '1.2rem 0',}}>Genre: {genre.join(', ')}</p>
                <p style={{margin: '1.2rem 0',}}>Cast: {cast.join(', ')}</p>
                <a href={watch_url} target="_blank" rel="noopener noreferrer">
                    <button>Watch Now</button>
                </a>
            </div>

Instead of creating JS object inside stlying for every tags/components,
take that out, create/define the style outside of the render method or as constants.

Perfomance issue, for every render, each obejct is created.
<a href={watch_url} target="_blank" rel="noopener noreferrer">
                    <button style={{
                        padding:"1.2rem 2.4rem",
                        border: "none",
                        fontSize: "1.6rem",
                        backgroundColor:"var(--btn-hover-bg-color)",
                        color: "var(--bg-color)",
                    }}>Watch Now</button>
                </a>

    Improved :---
    const buttonStyle ={
        padding:"1.2rem 2.4rem",
        border: "none",
        fontSize: "1.6rem",
        backgroundColor:"var(--btn-hover-bg-color)",
        color: "var(--bg-color)",
    }
     <button style={buttonStyle}>Watch Now</button>


CONDITIONAL TAGGING:
     Earlier code: <h3 > Rating: {rating}</h3>

if  <8.5, show yellow rating.
>8.5, show green rating.

We can use ternary operator to add conditional stylings in our CSS.

Earlier: <h3> Rating: <span className='super-hit'>{rating}</span></h3>

Next, <h3> Rating: <span className={rating>=8.5 ? "super-hit":"average"}>
                {rating}</span></h3>

TEMPLATE LITERALS:
<h3> Rating: <span className={`rating timepass ${rating>=8.5 ? "super-hit":"average"}`}>
                {rating}</span></h3>

Next:
const ratingClass= rating>=8.5? "super-hit": "average";
...
 <h3> Rating: <span className={`rating timepass ${ratingClass}`}>


 Let's implement Conditional Styling on button for color:

 */