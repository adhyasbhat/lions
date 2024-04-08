import React from 'react';
import { activitiesData } from '../activitiesData';
import './activities.css'
const Activity = () => {
  return (
    <div>
      <h3>Our Activities</h3>
      <p>Our commitment to community welfare and health extends across various initiatives aimed at uplifting and supporting individuals in need. Here are some key highlights of our activities</p>
      
      {activitiesData.map(item => (
        <div className='activity p-3 m-2'>
          <div className='d-flex align-item-center'>
            <img className='activityIcon' src={item.icon} alt="" />
            <h6>{item.activity}</h6>
          </div>
          <div>
            <p>{item.personIncharge}</p>
            <p>{item.date}</p>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat magni facilis aperiam. Asperiores nam corrupti numquam culpa voluptas officia excepturi inventore pariatur quo in soluta molestias veniam, praesentium quisquam dolorum!
          </div>
          <div>
            <img src={item.image} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Activity;
