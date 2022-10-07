import React from "react";

import classes from "./Card.module.css";
const Card = (props) => {
  const classs = `${props.className} ${classes.card}`;
  return <div className={classs}>{props.children}</div>;
};
export default Card;
