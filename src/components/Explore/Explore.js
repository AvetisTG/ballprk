import React, { Component } from 'react';
import {
  Button,
  FormGroup,
  Input
} from 'reactstrap';
import ExploreStatsItem from '../../containers/ExploreStatsItem'
import AthleteCard from '../../containers/AthleteCard'

import './Explore.css'

const stats = [
  {number: '7Mil', name: 'Posts'},
  {number: '17546', name: 'Followers'},
  {number: '312', name: 'Following'},
];

const athletes = [
  {
    name:'Cory Greenwood',
    sport:'Football',
    position:'Linebacker',
    team:'Edmonton Eskimos',
    coverUrl:'http://static.nfl.com/static/content/public/pg-photo/2013/10/15/0ap2000000263666/1-cam-newton_pg_600.jpg',
    profilePicUrl:'http://static.nfl.com/static/content/public/pg-photo/2013/04/28/0ap2000000164972_gallery_600.jpg'
  },
  {
    name:'Cory Greenwood',
    sport:'Football',
    position:'Linebacker',
    team:'Edmonton Eskimos',
    coverUrl:'http://static.nfl.com/static/content/public/pg-photo/2013/10/15/0ap2000000263666/1-cam-newton_pg_600.jpg',
    profilePicUrl:'http://static.nfl.com/static/content/public/pg-photo/2013/04/28/0ap2000000164972_gallery_600.jpg'
  },
  {
    name:'Cory Greenwood',
    sport:'Football',
    position:'Linebacker',
    team:'Edmonton Eskimos',
    coverUrl:'http://static.nfl.com/static/content/public/pg-photo/2013/10/15/0ap2000000263666/1-cam-newton_pg_600.jpg',
    profilePicUrl:'http://static.nfl.com/static/content/public/pg-photo/2013/04/28/0ap2000000164972_gallery_600.jpg'
  },
  {
    name:'Cory Greenwood',
    sport:'Football',
    position:'Linebacker',
    team:'Edmonton Eskimos',
    coverUrl:'http://static.nfl.com/static/content/public/pg-photo/2013/10/15/0ap2000000263666/1-cam-newton_pg_600.jpg',
    profilePicUrl:'http://static.nfl.com/static/content/public/pg-photo/2013/04/28/0ap2000000164972_gallery_600.jpg'
  },
  {
    name:'Cory Greenwood',
    sport:'Football',
    position:'Linebacker',
    team:'Edmonton Eskimos',
    coverUrl:'http://static.nfl.com/static/content/public/pg-photo/2013/10/15/0ap2000000263666/1-cam-newton_pg_600.jpg',
    profilePicUrl:'http://static.nfl.com/static/content/public/pg-photo/2013/04/28/0ap2000000164972_gallery_600.jpg'
  },
  {
    name:'Cory Greenwood',
    sport:'Football',
    position:'Linebacker',
    team:'Edmonton Eskimos',
    coverUrl:'http://static.nfl.com/static/content/public/pg-photo/2013/10/15/0ap2000000263666/1-cam-newton_pg_600.jpg',
    profilePicUrl:'http://static.nfl.com/static/content/public/pg-photo/2013/04/28/0ap2000000164972_gallery_600.jpg'
  },
  {
    name:'Cory Greenwood',
    sport:'Football',
    position:'Linebacker',
    team:'Edmonton Eskimos',
    coverUrl:'http://static.nfl.com/static/content/public/pg-photo/2013/10/15/0ap2000000263666/1-cam-newton_pg_600.jpg',
    profilePicUrl:'http://static.nfl.com/static/content/public/pg-photo/2013/04/28/0ap2000000164972_gallery_600.jpg'
  },
  {
    name:'Cory Greenwood',
    sport:'Football',
    position:'Linebacker',
    team:'Edmonton Eskimos',
    coverUrl:'http://static.nfl.com/static/content/public/pg-photo/2013/10/15/0ap2000000263666/1-cam-newton_pg_600.jpg',
    profilePicUrl:'http://static.nfl.com/static/content/public/pg-photo/2013/04/28/0ap2000000164972_gallery_600.jpg'
  },
]

const canadaWebsite = 'https://canada.nfl.com';

export class Explore extends Component {

  render() {

    return (
      <div className='explore-main'>
        <div className='explore-left-section-wrapper'>
          <div className="explore-left-section-image">
            <Button>Follow</Button>
            <img src='https://www.freepnglogos.com/uploads/nfl-logo-png-image-1.png' alt='nfl-logo'/>
          </div>
          <h2>NFL Canada</h2>
          <p>Canada</p>
          <div className='explore-stats'>
            {stats.map(stat => (<ExploreStatsItem key={stat.name} number={stat.number} name={stat.name}/>))}
          </div>
          <Button className='explore-message-button'>Message</Button>
          <div className="explore-left-section-intro">
            <div>
              <i className="fa fa-globe"/>
              <span><a href="#">{canadaWebsite}</a></span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic illum velit voluptates. Ab ad alias delectus dolore doloribus esse excepturi, id in iste iure laudantium obcaecati odit officia pariatur quis rem repellendus sapiente totam veniam voluptas? A esse excepturi exercitationem, fugiat non nostrum. Accusamus blanditiis eos expedita facere possimus quia saepe temporibus voluptatibus! Consequatur facilis nobis nostrum suscipit ut voluptates?</p>
            <div className="explore-left-section-intro-footer">
              <h4>Our Partners</h4>
              <div className="explore-left-section-intro-footer-logos">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="partner-logo"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="partner-logo"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="partner-logo"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="partner-logo"/>
              </div>
            </div>
          </div>
        </div>
        <div className='explore-right-section'>
          <div className="explore-right-section-nav-bar">
            <ul>
              <li><div>Posts</div></li>
              <li><div className='explore-right-section-nav-bar-active'><p>Our Athletes</p></div></li>
              <li><div>Photos</div></li>
              <li><div>Videos</div></li>
              <li><div>Events</div></li>
            </ul>
          </div>
          <FormGroup className='explore-right-section-search'>
              <Input type='text' name='birthDateDay' id='birth-date-day' placeholder='     Search Athletes' />
          </FormGroup>
          <div className="explore-right-section-athletes-cards-wrapper">
            {athletes.map(a => (
              <AthleteCard
                name={a.name}
                sport={a.sport}
                position={a.position}
                team={a.team}
                coverUrl={a.coverUrl}
                profilePicUrl={a.profilePicUrl}
              />
            ))}
            <AthleteCard
              name='Cory Greenwood'
              sport='Football'
              position='Linebacker'
              team='Edmonton Eskimos'
              coverUrl='http://static.nfl.com/static/content/public/pg-photo/2013/10/15/0ap2000000263666/1-cam-newton_pg_600.jpg'
              profilePicUrl='http://static.nfl.com/static/content/public/pg-photo/2013/04/28/0ap2000000164972_gallery_600.jpg'
            />
          </div>
        </div>
      </div>
    );
  }
}
