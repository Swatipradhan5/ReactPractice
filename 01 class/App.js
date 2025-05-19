//heading is a React element which is ultimately a JS object
const heading = React.createElement(
    "h1",

    //the below are props
    {id:"heading", xyz:"abc"},
    "Hello World from React!" //it is a chlidren inside props
);
console.log(heading) //op- Object
const root = ReactDOM.createRoot(document.getElementById("root"));

//render method helps in converting the heading into a h1 tag and add into the html
// root.render(heading);

//create this nested structure using React
//  <div id="parent">
//         <div id="child1">
//             <h1>I am h1 tag</h1>
//             <h2>I am h2 tag</h2>
//         </div>
//         <div id="child2">
//             <h1>I am h1 tag</h1>
//             <h2>I am h2 tag</h2>
//         </div>
//     </div>

//to add more then one child we use array, example as below
const parent = React.createElement(
    "div",
    {id:"parent"},
    [React.createElement(
        "div",
        {id:"child1"},
        [React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag")]
    ),
    React.createElement(
        "div",
        {id:"child2"},
        [React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag")]),
    ]
)
root.render(parent);