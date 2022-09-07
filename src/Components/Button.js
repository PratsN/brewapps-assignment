import React from "react";
import Data from "./Data";
import "./Button.css";

const Buttons = ({setItem , filterItem}) => {


    const MenuItem = [...new Set(Data.map((value) => value.category))]


    return (
        <>
        <div className="container">
             <button className="button"
                onClick={() => setItem(Data)}
            
            >All</button>
            {MenuItem.map((item , idx) => {
                return (
                    <button
                    onClick={() => filterItem(item)}
                    className="button" type="submit" key={idx}>{item}</button>
                )
            })

            }
           
        </div>


        </>
    )

}

export default Buttons;