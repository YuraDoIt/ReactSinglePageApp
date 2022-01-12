import React from "react";

const Home = (props) => (
    <div className="main-content">
        <div className="container">
            <h2>{props.title}</h2>
            <div className="home-image"></div>
            <div className="thumbnail-container">
                <div className="home-trumbnail-1"></div>
                <div className="home-trumbnail-2"></div>
                <div className="home-trumbnail-3"></div>
            </div>
        </div>
    </div>
);

export default Home;