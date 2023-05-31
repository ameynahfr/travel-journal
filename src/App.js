import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  const cardData = data.map(info =>{
    return(
      <div>
        <Card 
        key={info.id}
        {...info}
        />
      </div>
    )
  })
  return (
    <div>
      <Navbar />
      {cardData}
    </div>
  )
}

