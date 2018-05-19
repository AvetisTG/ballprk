import React from "react";

export default function ExploreStatsItem(props) {
  return (
    <div className='explore-stats-item'>
      <h2>{props.number}</h2>
      <p>{props.name}</p>
    </div>
  )
}