import React from "react";
import { Button } from 'reactstrap';

export default function AthleteCard(props) {

  const styleCover = {
    backgroundImage: `url(${props.coverUrl})`
  };
  const styleProfilePic = {
    backgroundImage: `url(${props.profilePicUrl})`
  }
  return (
    <div className="explore-right-section-athletes-card">
      <div className="explore-right-section-athletes-card-image" style={styleCover}>
        <Button>Follow</Button>
        <div className="explore-right-section-athletes-card-profile-image" style={styleProfilePic}/>
      </div>
      <h4>{props.name}</h4>
      <p>{`${props.sport} | ${props.position}`}</p>
      <p>{props.team}</p>
      <div className="explore-right-section-athletes-card-buttons">
        <Button className='color-dark-blue'>Message</Button>
        <Button>Book Session</Button>
      </div>
    </div>
  )
}