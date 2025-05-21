import React from "react";
//you will get a warning saying to import it from react-dom/client.
import ReactDOM from "react-dom/client";

//heading is a React element which is ultimately a JS object
const heading = React.createElement(
    "h1",

    //the below are props
    {id:"heading", xyz:"abc"},
    "Hello World from React!" //it is a chlidren inside props
);

// console.log(heading) //op- Object
const root = ReactDOM.createRoot(document.getElementById("root"));
//render method helps in converting the heading into a h1 tag and add into the html
// root.render(heading);

//We use JSX to make developers understand and easy to code.
//this is a React element
const jsxHeading = (
    <h1 className="heading">I am React from JSX</h1>
);
// root.render(jsxHeading);

const Title =() =>( <h1>I am Title</h1>);

//React functional component
const FunctionalComponent = () =>(
    <div className="container">
        {jsxHeading}
        {/* this is here is called component composition */}
        {Title()}
        <Title/>
        <Title></Title>
        <h1>I am React Functional Component</h1>
    </div>
);
root.render(<FunctionalComponent/>);

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
// root.render(parent);