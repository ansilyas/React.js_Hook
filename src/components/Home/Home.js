import React, { useState } from "react";
import Card from "../UI/Card/Card";
import classes from "./Home.module.css";
// import classes from "../UI/Button/Button.module.css"

const Home = (props) => {
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <button className={classes.button}>Logout</button>
    </Card>
  );
};

export default Home;
