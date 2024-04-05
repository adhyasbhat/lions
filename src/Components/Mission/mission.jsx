import './mission.css';
import missionImg from '../../assets/Images/missionImg.png'
function mission(){
    return(
        <div className="mission p-2">
            <div className="missionImgDiv">
                <img src={missionImg} alt="mission" className='missionIcon' />
            </div>
            <div className="missionInfoDiv">
                <h3 className='my-3'>Mission</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere quam nobis corporis, consequatur porro eveniet dolorum ex corrupti vero dolor voluptatibus quis unde blanditiis minus modi eius culpa sint facilis!</p>
            </div>
        </div>
    )
}
export default mission;