import React, {useState} from "react";
import ReactDOM from "react-dom/client";
function Counter(){
    // let count = 0;
    let [count, setCount] = useState(0);
    function incrementnum(){
    // count++;
    // document.querySelector("h1").innerText = `Count is : ${count}`; 
    setCount(count+1);
}


function decrementnum(){
    // count--;
    // document.querySelector("h1").innerText = `Count is : ${count}`;
    setCount(count-1);
}
return (
        <div className="first">
  <h1>Count is : {count}</h1>
   <button onClick={incrementnum}>Increment {count}</button>
   <button onClick={decrementnum}> Decrement {count}</button>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root")).render(<Counter />)