import Star from "./Star";
import React from "react";

export default function Stars({rating}) {
    let star: string[] ;
    if (rating.count > 0 && rating.count < 6) {
      star = Array(rating.count).fill('star');
    } else {
      return null;
    }
    return (
      <>
      <p className='card-body'>{rating.name}</p>
      <ul className="card-body-stars u-clearfix">
        <li>{ star.map((key) => <React.Fragment key={key}><Star/></React.Fragment> )}</li> 
      </ul>
      </>   
    )
  }