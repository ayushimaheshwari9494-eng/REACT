import React from "react";
import ReactDOM from "react-dom/client";
const newElement = <h1>Hello Coder Army</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(newElement);
function greet(name) {
  return <h2>Welcome to React, {name}!</h2>
}
root.render(greet("Ayushi")); //



//OTHER WAY TO CALL FUNCTION IN JSX



function Greet(props){ //ism jo props hai uska mtlb h joo JSX wali Greet function ko call kr rha h usme name="Ayushi" pass kr rha h to props ke andar name ki value Ayushi aa jayegi

    //structure of props is like this
    // props = {
    //     name: "Ayushi"
    // }
    return <h2>Welcome to React, {props.name}!</h2>
}
const element = <Greet /> //JSX KA METHOD TO CALL FUNCTION FIRST LETTER CAPITAL HONA CHAHIYE
root.render(element);

//ARGUMENTS IN FUNCTION CALL IN JSX
const ele=<Greet name="Ayushi" />