import React  from "react";
import ReactDOM from "react-dom/client";
import Card from "./component/card";
import Header from "./component/header";
import Footer from "./component/footer";
import cardData from "./utils/dummy";
import {greet, meet} from "./utils/dummy";
import { useState } from "react";

  function App(){

    let [A,setA] = useState(cardData);  
    function sortPrice(){
      A.sort((a,b)=> a.price - b.price);
      setA([...A]); //direct setA(A) will not work because it is same reference, so we need to create new reference by spreading the array
      console.log(A);
    }
    return(
        <>
        {/* HEADER*/}
        <Header/>

        <button onClick={sortPrice}> Sort by Price</button>
        {/*BODY*/}
        <div className="mid" style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
             {/* <Card  cloth="shirt" offer="30-40% OFF" />*/
            }

            {
              A.map((val,idx)=> <Card key={idx} cloth={val.cloth} offer={val.offer} img={val.img} price={val.price}/>)
            }
            </div>

        {/*FOOTER*/}
        <Footer/>
            </>
    )
  }
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />)