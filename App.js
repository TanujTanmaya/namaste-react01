import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "heading" }, "Chennai");

const Title = ()=>(
    <h1 className="head">Hello inside title</h1>
);

const HeadingComponent = () => (
  <div id="container">
    {Title()}
    <h1 className="heading">It is a functional components</h1>
   
  </div>
);

// const title=(
//  <h1 className="head" tabIndex="5">
    
//     Hello Tanuj inside title element
//  </h1>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
