import React from "react";
//import NetFlixSeries1 from "./components/NetflixSeries"; //not a best practice
//import NetFlixSeries from "./components/NetflixSeries"; //for DEFAULT Import
//import {Header,Footer} from "./components/NetflixSeries"; //for NAMED Import

import NetFlixSeries, {Header,Footer} from "./components/NetflixSeries"; //FOR MIXED


export const ComponentEx =()=>{
    return (
        <>
            <Header />
            <NetFlixSeries />
            <NetFlixSeries />
            <Footer />
        </>
    );
}
