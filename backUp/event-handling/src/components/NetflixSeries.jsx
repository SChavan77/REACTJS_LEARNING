import seriesData from "../api/seriesData.json";
import SeriesCard from "./SeriesCard.jsx";
import './Netflix.css';

const NetFlixSeries = () => {
    return (
        <ul className="grid grid-three--cols" >
            {seriesData.map((currentElement) => (
                <SeriesCard key={currentElement.id} series={currentElement} />
            ))}
        </ul>
    );
};

export default NetFlixSeries;
