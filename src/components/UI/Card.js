import React from "react";
import "./Card.css";

function Card(props) {
  //нужно, чтобы все классы подтягтвались и общий вид сайта не менялся
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
}

export default Card;
