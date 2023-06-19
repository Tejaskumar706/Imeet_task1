import { render } from "@testing-library/react";
import React from "react";
import Hero from "./Hero";
import Analytics from "./Analytics";
import Cards from "./Cards";

const Home = () => {
    return(
        <>
            <Hero />
            <Analytics />
            <Cards />
        </>
    );
};

export default Home;