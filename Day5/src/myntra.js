import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./component/card";
import Header from "./component/header";
import Footer from "./component/footer";
import cardData from "./utils/dummy";
import {greet, meet} from "./utils/dummy";

  function App(){
    return(
        <>
        {/* HEADER*/}
        <Header/>


        {/*BODY*/}
        <div className="mid" style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
             {/* <Card  cloth="shirt" offer="30-40% OFF" />*/
            }

            {
                cardData.map((val,idx)=> <Card key={idx} cloth={val.cloth} offer={val.offer} img={val.img}/>)
            }
            </div>

        {/*FOOTER*/}
        <Footer/>
            </>
    )
  }
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />)