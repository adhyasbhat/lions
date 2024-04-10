import React from 'react';
import { activitiesData } from '../activitiesData';
import './activities.css'
const Activity = () => {
  return (
    <div className='p-3 whole'>
      <h3 className=' px-3 m-3'>Our Activities</h3>
      <div className=' px-3 m-3'>Our commitment to community welfare and health extends across various initiatives aimed at uplifting and supporting individuals in need. Here are some key highlights of our activities</div>
      {activitiesData.map(item => (
        <div className='activity p-3 m-3'>
          <div className='d-flex justify-content-between'>
            <div>
            <div className='d-flex align-items-center'>
            <img className='activityIcon mx-2' src={item.icon} alt="" />
            <h6>{item.activity}</h6>
          </div>
          <div>
            <div>{item.personIncharge}</div>
            <div>{item.date}</div>
          </div>
            </div>
            <div className='activityTable p-3 mb-3'>
              <div className='d-flex justify-content-between'>
                <div className='tableHeading'>
                  Total
                </div>
                <div>{item.total}</div>
              </div>
              <div className='d-flex justify-content-between'>
                <div className='tableHeading'>
                  Last month
                </div>
                <div>{item.lastMonth}</div>
              </div>
              <div className='d-flex justify-content-between'>
                <div className='tableHeading'>
                  Target
                </div>
                <div>{item.target}</div>
              </div>
            </div>
          </div>
          
          <div className='my-4'>
            {item.details}
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
