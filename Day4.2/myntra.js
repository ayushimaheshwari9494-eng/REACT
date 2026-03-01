import React from "react";
import ReactDOM from "react-dom/client";
//HEADER


//BODY

//FOOTER
function Card(props){
    return(
        <div style={{border:"2px solid black",padding:"2px"}}>
            <img src="https://www.azafashions.com/blog/wp-content/uploads/2024/11/Featured-image-4.jpg" height="200px" width="200px" alt="img" />

           <div style={{textAlign:"center"}}>
            <h2>{props.cloth}</h2>
            <h1>{props.offer}</h1>
            <h2>Shop Now</h2>
           </div>

        </div>
    )
}

const cardData = [
    {cloth:"shirt", offer:"30-40% OFF"},
    {cloth:"dress", offer:"40-50% OFF"},
    {cloth:"jeans", offer:"20-30% OFF"},
    {cloth:"t-shirt", offer:"15-25% OFF"},
    {cloth:"skirt", offer:"35-45% OFF"},
    {cloth:"jacket", offer:"25-35% OFF"},
    {cloth:"sweater", offer:"20-30% OFF"},
    {cloth:"hoodie", offer:"30-40% OFF"},
    {cloth:"shorts", offer:"15-25% OFF"},
    {cloth:"blouse", offer:"25-35% OFF"}
]
  function App(){
    return(
        <div style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
             {/* <Card  cloth="shirt" offer="30-40% OFF" />
            <Card cloth="dress" offer="40-50% OFF" />
            <Card cloth="jeans" offer="20-30% OFF" />
            <Card cloth="t-shirt" offer="15-25% OFF" />
            <Card cloth="skirt" offer="35-45% OFF" />
            <Card cloth="jacket" offer="25-35% OFF" />
            <Card cloth="sweater" offer="20-30% OFF" />
            <Card cloth="hoodie" offer="30-40% OFF" />
            <Card cloth="shorts" offer="15-25% OFF" />
            <Card cloth="blouse" offer="25-35% OFF" />  */}

            {
                cardData.map((val,idx)=> <Card cloth={val.cloth} offer={val.offer} key={idx} />)
            }
            </div>
    )
  }
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />)