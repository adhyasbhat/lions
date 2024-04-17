// import banner from '../../assets/Images/frontImg.jpg';
import b1 from '../../assets/Images/b1.jpg';  
import b2 from '../../assets/Images/b2.jpg';
import './banner.css'
function banner(){
  return(
    <div className='banner'>
      <div className='d-flex justify-content-start gap-2 infoBar'>
        <div>
          Club number 152131
        </div>
        <div>
          Region 8
        </div>
        <div>
          Zone 3
        </div>
      </div>
      <div className='d-flex'>
        <div className='leftText'>
          <div className='clubName'>Lions Club Of Bengaluru Crystals</div>
        <p>Our club is dedicated to making a difference in the lives of those less fortunate in our neighbouring communities. Together, we unite with compassion and determination to serve, uplift and bring hope to those who need it most.</p>
        <div className='d-flex justify-content-start'>
        <button className='activityBtn'> What we do</button>
        <p>500+ Volunteers have participated!</p>
        </div>
        </div>
        <div className='rightImg'>
          <img className='b1'src={b1} alt="" />
          <img className='b2' src={b2} alt="" />
        </div>
      </div>
      </div>
    
  )
}

export default banner;
