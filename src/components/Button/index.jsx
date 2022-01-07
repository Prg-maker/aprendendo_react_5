import React from "react";
import './index.scss'
export function Button({children , onClick}){
  return(
    <button onClick={onClick} className="add-button">
      {children}
    </button>
  )
}