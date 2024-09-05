const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "I am a heading Tag"),
        React.createElement("h2", {}, "I am a heading2 Tag"),
    ])
);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World in Reatc"
// );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
