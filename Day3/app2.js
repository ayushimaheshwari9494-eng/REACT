import React from "react";
import ReactDOM from "react-dom/client"
// const element = React.createElement("h1",{id:"first", className:"Rahul", style:{backgroundColor:"blue", fontSize:"30px", color:"pink"}},"Hello Coder Army");
// const element2 = React.createElement("h2",{id:"second", className:"Rahul", style:{backgroundColor:"black", fontSize:"30px", color:"pink"}},"Maja aaya muje");

// // const div1 = React.createElement('div',{},[element,element2]);
// // const Reactroot = ReactDOM.createRoot(document.getElementById('root'));

// // Reactroot.render(div1);




// //                       React                      Render
// //  React.createElement() => react element(JSObject) => HTML Element

// // JSX: JS ke expression

// const newElement = <h1>Hello Coder Army</h1>
// const Reactroot = ReactDOM.createRoot(document.getElementById('root'));

// Reactroot.render(newElement);




// //     babel:                   React                      Render
// // JSX => React.createElement() => react element(JSObject) => HTML Element

// // JSX: JS ke expression



// //FOR MULTIPLE ELEMENTS
// const newElement2 = <h1>Hello Coder Army</h1>
// const newElement3 = <h2>Maja aaya muje</h2>

// const div1 = <div>{newElement2}{newElement3}</div>


// Reactroot.render(div1);




// //OR

// const newElement7= (
// <div>
//     <h1>Hello Coder Army</h1>
//     <h2>Maja aaya muje</h2>
// </div>
// )
// //EXTRA DIV NHI CHIYB TO
// const newElement8= (
// <>
//     <h1>Hello Coder Army</h1>
//     <h2>Maja aaya muje</h2>
// </>
// )
 const names = "Ayushi";
 const obj = {
    age: 21
 }      

//FOR INLINE CSS
 //React ELement
const newElement00 = (
    <>
         <h1 id="first" className="second" >Hello Coder Army {names}</h1>
         <h2 style={{backgroundColor:"black",color:"white"}}>Maja aaya muje {obj.age}</h2>
    </>
)
const Reactroot = ReactDOM.createRoot(document.getElementById('root'));     
Reactroot.render(newElement00);

//BRACKETS CURLY WALE ME HMESA JS KA KUCH EXP WGRA HOTA AND STYLE ME DO BRACKETS LAGTE HAIN KYUN KI PEHLE TO HM JSX ME JS EXPRESSION LAGATE HAIN AUR USKE ANDAR STYLE OBJECT LAGATE HAIN JISME CSS KE PROPERTIES HOTI HAIN.


// React Component
// function Based Component

function greet(){
    return <h1>Aur bhai kaisa hai</h1>
};

const meet = ()=>{
    return <h2>Mera sab achaa hai</h2>
}


const newElement2 = greet();
const newElement3 = meet();

const newElement4 = <>{greet()} {meet()}</>

// const Reactroot = ReactDOM.createRoot(document.getElementById('root'));

Reactroot.render(newElement4);

// JSX: Javascript XML: HTML code direct js ke andar likh sakte ho

