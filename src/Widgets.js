import React from "react";
import "./Widgets.css";
import { Info, FiberManualRecord } from "@material-ui/icons";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecord />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>
      {newsArticle("LinkedIn Clone !!", "Made By :- Rohit Ingole")}
      {newsArticle("Coronavirus: IND Updates", "Top news - 1024 readers")}
      {newsArticle("Tesla hits new highs", "Cars & auto - 300 readers")}
      {newsArticle("Bitcoin Breaks $22K", "Crypto - 800 readers")}
      {newsArticle("Is Redux too good?", "Code - 123 readers")}
      {newsArticle("Thats the news for Today.", "See you guyz tommorow.")}
    </div>
  );
};

export default Widgets;
