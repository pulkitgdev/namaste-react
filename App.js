const parent = React.createElement(
    "div",
    {id:"parent"},
    [
        React.createElement(
            "div",
            {id:"child"},
            [
                React.createElement("h1",{},"This is an h1 tag!"),
                React.createElement("h2",{},"This is an h2 tag!")
            ]
        ),
        React.createElement(
            "div",
            {id:"child2"},
            [
                React.createElement("h1",{},"This is an h1 tag!"),
                React.createElement("h2",{},"This is an h2 tag!")
            ]
        )
    ]
);



// const heading = React.createElement(
//     "h1", 
//     {
//         id:"heading", 
//         xyz:"abc",
//         style: {fontSize: "5em", textAlign: "center"}
//     }, 
//     "Hello World from React!"
// );

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);