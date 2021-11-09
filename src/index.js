import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import "./styles.css";
import Sdata from "./Sdata";

// function nCard(val){
// return(
//   <Card
//       title={val.title}
//       imgsrc={val.imgsrc}
//       seriesBy={val.seriesBy}
//       link={val.link}
//     />
// )
// }

ReactDOM.render(
  <>
    <h1 className="heading_style">Small Netflix(clone) Series from scratch</h1>

    {Sdata.map(function nCard(val) {
      return (
        <Card
          title={val.title}
          imgsrc={val.imgsrc}
          seriesBy={val.seriesBy}
          link={val.link}
        />
      );
    })}
  </>,
  document.getElementById("root")
);
